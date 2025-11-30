import { ArrowLeft, FileText, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Reveal } from "../../components/ui/Reveal";
import { useToast } from "../../components/ui/Toast";

export function CreateListing() {
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Annonce publiée avec succès !", "success");
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
            <div className="p-6 border-b border-gray-100">
              <h1 className="font-serif text-2xl font-bold text-gray-900">Créer une nouvelle annonce</h1>
              <p className="text-gray-500 text-sm">Remplissez les informations ci-dessous pour publier votre bien.</p>
            </div>

            <form className="p-8 space-y-8" onSubmit={handlePublish}>
              {/* General Info */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Informations Générales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre de l'annonce</label>
                    <Input placeholder="Ex: Villa de luxe avec vue mer" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
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
                      <option>Appartement</option>
                      <option>Maison / Villa</option>
                      <option>Terrain</option>
                      <option>Local commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix (€)</label>
                    <Input type="number" placeholder="0" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)</label>
                    <Input type="number" placeholder="0" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
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
                    <Input placeholder="Ex: Santa Maria" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adresse exacte (masquée)</label>
                    <Input placeholder="Rue, numéro..." className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
              </section>

              {/* Details */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Détails & Équipements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chambres</label>
                    <Input type="number" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salles de bain</label>
                    <Input type="number" className="focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Équipements</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Piscine", "Jardin", "Garage", "Vue Mer", "Climatisation", "Meublé", "Ascenseur", "Sécurité"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="rounded border-gray-300 text-[#C7A86A] focus:ring-[#C7A86A]" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea className="w-full min-h-[150px] rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A]" placeholder="Décrivez votre bien en détail..." />
                </div>
              </section>

              {/* Media */}
              <section className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2 text-gray-900">Photos & Documents</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group hover:border-[#C7A86A]/50">
                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4 group-hover:text-[#C7A86A] transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">Cliquez ou glissez vos photos ici</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG jusqu'à 5MB</p>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <FileText className="h-8 w-8 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Documents légaux (Optionnel)</p>
                    <p className="text-xs text-gray-500">Plans, diagnostics, etc.</p>
                  </div>
                  <Button variant="outline" size="sm" type="button">Ajouter</Button>
                </div>
              </section>

              {/* Sticky Actions Footer */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20 shadow-lg">
                <div className="container-custom max-w-4xl flex justify-end gap-4">
                  <Button variant="ghost" type="button">Enregistrer en brouillon</Button>
                  <Button className="bg-[#C7A86A] hover:bg-[#B6965A]" type="submit">Publier l'annonce</Button>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
