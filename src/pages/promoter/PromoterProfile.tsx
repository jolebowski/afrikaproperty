import { Building, Camera, Mail, MapPin, Phone } from "lucide-react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardButton } from "../../components/dashboard/ui/DashboardButton";
import { Input } from "../../components/ui/Input";
import { Reveal } from "../../components/ui/Reveal";
import { useToast } from "../../components/ui/Toast";

export function PromoterProfile() {
  const { addToast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save
    addToast("Profil mis à jour avec succès", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <DashboardHeader promoterName="Horizon Immobilier" />

      <main className="container-custom py-8 space-y-8">
        <Reveal>
          <h1 className="text-2xl font-serif font-bold text-gray-900">Mon Profil</h1>
          <p className="text-gray-500">Gérez les informations de votre entreprise et vos coordonnées.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Summary */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md group-hover:border-[#C7A86A]/20 transition-colors duration-300">
                    <Building className="w-12 h-12 text-gray-400" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-[#C7A86A] text-white rounded-full hover:bg-[#B6965A] transition-colors shadow-sm hover:scale-110 active:scale-95 duration-200">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Horizon Immobilier</h2>
                <p className="text-sm text-gray-500 mb-6">Promoteur Premium</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    contact@horizon-immo.cv
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    +238 999 88 77
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Santa Maria, Sal
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Edit Form */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">Informations de l'entreprise</h3>
                </div>
                <form className="p-6 space-y-6" onSubmit={handleSave}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input defaultValue="Horizon Immobilier" className="pl-9 focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input defaultValue="contact@horizon-immo.cv" className="pl-9 focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input defaultValue="+238 999 88 77" className="pl-9 focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input defaultValue="Avenue Amilcar Cabral, Santa Maria" className="pl-9 focus:border-[#C7A86A] focus:ring-[#C7A86A]" />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description courte</label>
                      <textarea 
                        className="w-full min-h-[100px] rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A86A] focus:border-[#C7A86A] transition-shadow"
                        defaultValue="Spécialiste de l'immobilier de luxe au Cap-Vert depuis 10 ans."
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <DashboardButton type="submit">Enregistrer les modifications</DashboardButton>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mt-8">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900">Sécurité</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Mot de passe</p>
                      <p className="text-sm text-gray-500">Dernière modification il y a 3 mois</p>
                    </div>
                    <DashboardButton variant="secondary" size="sm">Modifier</DashboardButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}
