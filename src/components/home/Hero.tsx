import { Search } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop" 
          alt="Cape Verde Coastline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-20">
        <div className="flex flex-col items-center">
          <Reveal delay={0.2}>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1]">
              L'Immobilier d'Exception <br />
              <span className="italic font-light">au Cap-Vert</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-gray-200 font-light">
              Découvrez une sélection exclusive de propriétés de luxe, villas en bord de mer et opportunités d'investissement uniques.
            </p>
          </Reveal>

          <Reveal delay={0.6} width="100%">
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-full shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2">
              <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">Localisation</label>
                <input 
                  type="text" 
                  placeholder="Toutes les îles" 
                  className="w-full outline-none text-gray-900 placeholder-gray-400 font-medium bg-transparent"
                />
              </div>
              <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">Type de bien</label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option>Tous types</option>
                  <option>Villa</option>
                  <option>Appartement</option>
                  <option>Terrain</option>
                </select>
              </div>
              <div className="flex-1 px-6 py-3">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 text-left">Budget</label>
                <select className="w-full outline-none text-gray-900 font-medium bg-transparent cursor-pointer appearance-none">
                  <option>Tout budget</option>
                  <option>100k - 250k €</option>
                  <option>250k - 500k €</option>
                  <option>500k € +</option>
                </select>
              </div>
              <Button size="lg" className="rounded-full px-8 h-auto py-3 md:py-0">
                <Search className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Rechercher</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
