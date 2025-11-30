import { ArrowLeft, Bath, Bed, MapPin, Maximize, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ContactForm } from "../components/property/ContactForm";
import { PropertyAmenities } from "../components/property/PropertyAmenities";
import { PropertyGallery } from "../components/property/PropertyGallery";
import { PropertyInvestmentProjection } from "../components/property/PropertyInvestmentProjection";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { PROPERTIES } from "../data/properties";

export function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Propriété non trouvée</h1>
        <Link to="/properties">
          <Button>Retour aux propriétés</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/properties" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux propriétés
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {property.isNew && <Badge variant="default">Nouveau</Badge>}
                  {property.isExclusive && <Badge variant="secondary">Exclusif</Badge>}
                  <Badge variant="outline" className="uppercase">Achat</Badge>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  {property.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary mb-2">
                  {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: property.currency, maximumFractionDigits: 0 }).format(property.price)}
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>

            {/* Gallery */}
            <PropertyGallery images={property.images} />

            {/* Key Specs */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Bed className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.bedrooms}</span>
                <span className="text-xs text-gray-500 uppercase">Chambres</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Bath className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.bathrooms}</span>
                <span className="text-xs text-gray-500 uppercase">Salles de bain</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Maximize className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-lg">{property.area}</span>
                <span className="text-xs text-gray-500 uppercase">m² Surface</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Découvrez cette magnifique propriété située au cœur de {property.location}. 
                Offrant des prestations haut de gamme et une architecture moderne, ce bien est idéal pour 
                un investissement locatif ou une résidence secondaire. Profitez d'une vue imprenable 
                et d'un cadre de vie exceptionnel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les finitions sont soignées, avec des matériaux nobles importés. La résidence dispose 
                de toutes les commodités nécessaires pour un confort optimal.
              </p>
            </div>

            {/* Amenities */}
            <PropertyAmenities />

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold mb-4">Localisation</h2>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                  <p>Carte interactive indisponible dans la maquette</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <ContactForm />
            <PropertyInvestmentProjection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
