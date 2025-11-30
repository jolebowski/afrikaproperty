import { ArrowLeft, Upload } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Reveal } from "../../components/ui/Reveal";
import { useToast } from "../../components/ui/Toast";

export function EditListing() {
  const { id } = useParams();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Annonce modifiée avec succès !", "success");
    setTimeout(() => navigate("/promoter/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <DashboardHeader promoterName="Horizon Immobilier" />

      <main className="container-custom py-8">
        <Reveal>
          <div className="mb-6">
            <Link to="/promoter/dashboard" className="inline-flex items-center text-gray-500 hover:text-[#C7A86A] transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au tableau de bord
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h1 className="font-serif text-2xl font-bold text-gray-900">Modifier l'annonce</h1>
                <p className="text-gray-500 text-sm">Édition du bien #{id}</p>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">
                Publié
              </div>
            </div>

            <form className="p-8 space-y-8" onSubmit={handleSave}>
              {/* General Info */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Informations Générales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre de l'annonce</label>
                    <Input defaultValue="Villa Océane - Phase 2" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de transaction</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>Vente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de bien</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>Maison / Villa</option>
                      <option>Appartement</option>
                      <option>Terrain</option>
                      <option>Local commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
                    <Input type="number" defaultValue="350000" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)</label>
                    <Input type="number" defaultValue="185" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
              </section>

              {/* Location */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Localisation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Île</label>
                    <select className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]">
                      <option>Sal</option>
                      <option>Boa Vista</option>
                      <option>Santiago</option>
                      <option>São Vicente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville / Quartier</label>
                    <Input defaultValue="Santa Maria" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adresse exacte (masquée)</label>
                    <Input defaultValue="Rue des Hôtels, Zone Touristique" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
              </section>

              {/* Details */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Détails & Équipements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chambres</label>
                    <Input type="number" defaultValue="4" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salles de bain</label>
                    <Input type="number" defaultValue="3" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Équipements</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Piscine", "Jardin", "Garage", "Vue Mer", "Climatisation", "Meublé", "Ascenseur", "Sécurité"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" defaultChecked={["Piscine", "Jardin", "Vue Mer", "Climatisation"].includes(item)} className="rounded border-gray-300 text-[#C7A86A] focus:ring-[#C7A86A]" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]" 
                    defaultValue="Magnifique villa moderne située dans un quartier résidentiel calme de Santa Maria. Finitions haut de gamme, piscine privée et vue imprenable sur l'océan. Idéal pour investissement locatif ou résidence secondaire."
                  />
                </div>
              </section>

              {/* Media */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Photos & Documents</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                      <img src={`https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=200&auto=format&fit=crop`} alt="Bien" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="h-8 text-xs">Modifier</Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group hover:border-[#C7A86A]/50">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4 group-hover:text-[#C7A86A] transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">Ajouter d'autres photos</p>
                </div>
              </section>

              {/* Sticky Actions Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20 shadow-lg">
                <div className="container-custom max-w-4xl flex justify-end gap-4">
                  <Button variant="ghost" type="button" onClick={() => navigate("/promoter/dashboard")}>Annuler</Button>
                  <Button className="bg-[#C7A86A] hover:bg-[#B6965A]" type="submit">Enregistrer les modifications</Button>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
