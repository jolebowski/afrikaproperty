import { DollarSign, Edit, Eye, MessageSquare, MoreHorizontal, Pause, Play, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../components/ui/Toast";
import { useAuth } from "../../contexts/AuthContext";
import type { Property } from "../../types";
import SaleModal from "../property/SaleModal";
import { AvailabilityBadge, type AvailabilityStatus } from "./ui/AvailabilityBadge";
import { DashboardButton } from "./ui/DashboardButton";
import { type ListingStatus, StatusBadge } from "./ui/StatusBadge";

interface Listing {
  id: string;
  title: string;
  location: string;
  image: string;
  status: ListingStatus;
  availability: AvailabilityStatus;
  views: number;
  leads: number;
  price: string;
}

const INITIAL_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "Villa Océane - Phase 2",
    location: "Santa Maria, Sal",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=200&auto=format&fit=crop",
    status: "published",
    availability: "available",
    views: 1240,
    leads: 45,
    price: "350 000 €"
  },
  {
    id: "2",
    title: "Penthouse Vue Mer",
    location: "Mindelo, São Vicente",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=200&auto=format&fit=crop",
    status: "published",
    availability: "reserved",
    views: 890,
    leads: 28,
    price: "280 000 €"
  },
  {
    id: "3",
    title: "Résidence Les Palmiers",
    location: "Praia, Santiago",
    image: "https://images.unsplash.com/photo-1600596542815-27b88e35eabb?q=80&w=200&auto=format&fit=crop",
    status: "pending",
    availability: "available",
    views: 120,
    leads: 5,
    price: "195 000 €"
  },
  {
    id: "4",
    title: "Terrain Constructible",
    location: "Boa Vista",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop",
    status: "rejected",
    availability: "available",
    views: 45,
    leads: 0,
    price: "85 000 €"
  },
  {
    id: "5",
    title: "Appartement T3 Centre",
    location: "Espargos, Sal",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=200&auto=format&fit=crop",
    status: "published",
    availability: "sold",
    views: 3400,
    leads: 82,
    price: "145 000 €"
  }
];

export function ListingsTable() {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const { user, agency } = useAuth();
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS);
  const [selectedPropertyForSale, setSelectedPropertyForSale] = useState<Property | null>(null);
  const [showSaleModal, setShowSaleModal] = useState(false);

  const handleEdit = (id: string) => {
    addToast("Redirection vers l'édition...", "info");
    // Simulate navigation delay
    setTimeout(() => {
      navigate(`/promoter/listings/edit/${id}`);
    }, 500);
  };

  const handlePause = (id: string, currentStatus: ListingStatus) => {
    setListings(prev => prev.map(listing => {
      if (listing.id === id) {
        const newStatus = currentStatus === 'published' ? 'pending' : 'published';
        addToast(
          newStatus === 'pending' ? "Annonce mise en pause" : "Annonce réactivée", 
          "success"
        );
        return { ...listing, status: newStatus };
      }
      return listing;
    }));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      setListings(prev => prev.filter(l => l.id !== id));
      addToast("Annonce supprimée définitivement", "error");
    }
  };

  const handleMarkAsSold = (listing: Listing) => {
    // Convert listing to Property format for the modal
    const property: Property = {
      id: listing.id,
      title: listing.title,
      location: listing.location,
      price: parseFloat(listing.price.replace(/[^\d]/g, '')), // Extract number from price string
      currency: 'EUR',
      type: 'sale',
      status: 'available',
      bedrooms: 3, // Default values for demo
      bathrooms: 2,
      area: 120,
      images: [listing.image],
      agencyId: user?.agencyId || 'agency1',
    };

    setSelectedPropertyForSale(property);
    setShowSaleModal(true);
  };

  const handleConfirmSale = (saleData: any) => {
    // Update the listing status to sold
    setListings(prev => prev.map(listing => {
      if (listing.id === saleData.property.id) {
        return { ...listing, availability: 'sold' as AvailabilityStatus };
      }
      return listing;
    }));

    // Save commission to persistent store
    const newCommission: any = {
      id: `com_${Date.now()}`,
      propertyId: saleData.property.id,
      agentId: user?.id || 'unknown',
      agencyId: agency?.id || 'unknown',
      propertyTitle: saleData.property.title,
      salePrice: saleData.salePrice,
      commissionRate: saleData.commissionRate,
      commissionAmount: saleData.commissionAmount,
      currency: saleData.property.currency,
      status: 'pending',
      saleDate: saleData.saleDate,
      notes: saleData.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Dynamically import to avoid circular dependencies if any (or just standard import)
    // We'll use the standard import added to the top of the file
    // @ts-ignore
    import('../../utils/commissionStore').then(mod => {
        mod.addCommission(newCommission);
        
        const commissionMessage = `Vente enregistrée ! Commission de ${saleData.commissionAmount.toLocaleString()} ${saleData.property.currency} (${saleData.commissionRate.toFixed(2)}%)`;
        addToast(commissionMessage, "success");
    });

    // Close the modal
    setShowSaleModal(false);
    setSelectedPropertyForSale(null);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-lg font-serif font-bold text-gray-900">Mes Annonces</h2>
        <Link to="/promoter/listings/create">
          <DashboardButton size="sm">
            Créer une nouvelle annonce
          </DashboardButton>
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium">
            <tr>
              <th className="px-6 py-4">Bien</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Disponibilité</th>
              <th className="px-6 py-4 text-center">Vues</th>
              <th className="px-6 py-4 text-center">Leads</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {listings.map((listing) => (
              <tr key={listing.id} className="hover:bg-gray-50 transition-colors group cursor-default">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={listing.image} 
                      alt={listing.title} 
                      className="w-12 h-12 rounded-lg object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{listing.title}</p>
                      <p className="text-xs text-gray-500">{listing.location}</p>
                      <p className="text-xs font-medium text-[#C7A86A] mt-0.5">{listing.price}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={listing.status} />
                </td>
                <td className="px-6 py-4">
                  <AvailabilityBadge status={listing.availability} />
                </td>
                <td className="px-6 py-4 text-center text-gray-600">
                  {listing.views.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    {listing.leads}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {listing.availability !== 'sold' && agency?.type === 'promoter' && (
                      <button
                        onClick={() => handleMarkAsSold(listing)}
                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        title="Marquer comme vendu"
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleEdit(listing.id)}
                      className="p-2 text-gray-400 hover:text-[#C7A86A] hover:bg-[#C7A86A]/10 rounded-md transition-colors"
                      title="Modifier"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handlePause(listing.id, listing.status)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title={listing.status === 'published' ? "Mettre en pause" : "Réactiver"}
                    >
                      {listing.status === 'published' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {listings.map((listing) => (
          <div key={listing.id} className="p-4">
            <div className="flex gap-4 mb-3">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="w-20 h-20 rounded-lg object-cover bg-gray-100 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium text-gray-900 truncate pr-2">{listing.title}</h3>
                  <button className="text-gray-400">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-2">{listing.location}</p>
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status={listing.status} />
                  <AvailabilityBadge status={listing.availability} />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <div className="flex gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-gray-400" />
                  {listing.views}
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-gray-400" />
                  {listing.leads}
                </div>
              </div>
              <p className="font-medium text-[#C7A86A]">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-gray-200 flex justify-center">
        <button className="text-sm text-gray-500 hover:text-gray-900 font-medium">
          Voir toutes les annonces
        </button>
      </div>

      {/* Sale Modal */}
      {selectedPropertyForSale && (
        <SaleModal
          property={selectedPropertyForSale}
          isOpen={showSaleModal}
          onClose={() => {
            setShowSaleModal(false);
            setSelectedPropertyForSale(null);
          }}
          onConfirmSale={handleConfirmSale}
        />
      )}
    </div>
  );
}
