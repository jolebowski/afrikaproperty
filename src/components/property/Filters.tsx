import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

// Helper hook for clicking outside to close dropdowns
function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export function Filters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isAllFiltersOpen, setIsAllFiltersOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(filterRef, () => setActiveFilter(null));

  const toggleFilter = (name: string) => {
    setActiveFilter(activeFilter === name ? null : name);
  };

  return (
    <>
      <div className="w-full border-b border-gray-200 bg-white sticky top-20 z-30 py-4" ref={filterRef}>
        <div className="container-custom flex items-center gap-3 overflow-x-auto md:overflow-visible no-scrollbar pb-2 sm:pb-0">
          
          {/* Type de transaction */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("type")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap",
                activeFilter === "type" 
                  ? "border-black bg-gray-100" 
                  : "border-gray-300 hover:border-black bg-white"
              )}
            >
              Type de transaction
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {activeFilter === "type" && (
              <>
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setActiveFilter(null)} />
                <div className="fixed inset-x-0 bottom-0 z-50 w-full bg-white rounded-t-xl p-6 shadow-2xl md:absolute md:inset-auto md:top-full md:left-0 md:mt-2 md:w-72 md:rounded-xl md:border md:border-gray-100 animate-in slide-in-from-bottom-10 md:slide-in-from-top-2 fade-in duration-200">
                  <div className="flex justify-between items-center mb-4 md:hidden">
                    <h3 className="font-bold text-lg">Type de transaction</h3>
                    <button onClick={() => setActiveFilter(null)}><X className="w-5 h-5" /></button>
                  </div>
                  <div className="space-y-3">
                    {["Acheter", "Louer"].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#C7A86A] focus:ring-[#C7A86A]" />
                        <span className="text-gray-700 group-hover:text-black">{type}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <button className="text-sm text-gray-500 underline hover:text-black">Effacer</button>
                    <Button size="sm" className="bg-black text-white hover:bg-gray-800">Appliquer</Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Budget */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("price")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap",
                activeFilter === "price" 
                  ? "border-black bg-gray-100" 
                  : "border-gray-300 hover:border-black bg-white"
              )}
            >
              Budget
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeFilter === "price" && (
              <>
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setActiveFilter(null)} />
                <div className="fixed inset-x-0 bottom-0 z-50 w-full bg-white rounded-t-xl p-6 shadow-2xl md:absolute md:inset-auto md:top-full md:left-0 md:mt-2 md:w-80 md:rounded-xl md:border md:border-gray-100 animate-in slide-in-from-bottom-10 md:slide-in-from-top-2 fade-in duration-200">
                  <div className="flex justify-between items-center mb-4 md:hidden">
                    <h3 className="font-bold text-lg">Budget</h3>
                    <button onClick={() => setActiveFilter(null)}><X className="w-5 h-5" /></button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Min</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                          <input type="number" className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" placeholder="0" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Max</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                          <input type="number" className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" placeholder="Max" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <button className="text-sm text-gray-500 underline hover:text-black">Effacer</button>
                    <Button size="sm" className="bg-black text-white hover:bg-gray-800">Appliquer</Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Surface */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("surface")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap",
                activeFilter === "surface" 
                  ? "border-black bg-gray-100" 
                  : "border-gray-300 hover:border-black bg-white"
              )}
            >
              Surface
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeFilter === "surface" && (
              <>
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setActiveFilter(null)} />
                <div className="fixed inset-x-0 bottom-0 z-50 w-full bg-white rounded-t-xl p-6 shadow-2xl md:absolute md:inset-auto md:top-full md:left-0 md:mt-2 md:w-80 md:rounded-xl md:border md:border-gray-100 animate-in slide-in-from-bottom-10 md:slide-in-from-top-2 fade-in duration-200">
                  <div className="flex justify-between items-center mb-4 md:hidden">
                    <h3 className="font-bold text-lg">Surface</h3>
                    <button onClick={() => setActiveFilter(null)}><X className="w-5 h-5" /></button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Min</label>
                        <div className="relative">
                          <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" placeholder="0" />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">m²</span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Max</label>
                        <div className="relative">
                          <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black" placeholder="Max" />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">m²</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <button className="text-sm text-gray-500 underline hover:text-black">Effacer</button>
                    <Button size="sm" className="bg-black text-white hover:bg-gray-800">Appliquer</Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Chambres */}
          <div className="relative">
            <button
              onClick={() => toggleFilter("rooms")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap",
                activeFilter === "rooms" 
                  ? "border-black bg-gray-100" 
                  : "border-gray-300 hover:border-black bg-white"
              )}
            >
              Chambres
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeFilter === "rooms" && (
              <>
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setActiveFilter(null)} />
                <div className="fixed inset-x-0 bottom-0 z-50 w-full bg-white rounded-t-xl p-6 shadow-2xl md:absolute md:inset-auto md:top-full md:left-0 md:mt-2 md:w-72 md:rounded-xl md:border md:border-gray-100 animate-in slide-in-from-bottom-10 md:slide-in-from-top-2 fade-in duration-200">
                  <div className="flex justify-between items-center mb-4 md:hidden">
                    <h3 className="font-bold text-lg">Chambres</h3>
                    <button onClick={() => setActiveFilter(null)}><X className="w-5 h-5" /></button>
                  </div>
                   <div className="space-y-4">
                     <div className="flex items-center justify-between">
                       <span className="text-gray-700">Chambres</span>
                       <div className="flex items-center gap-3">
                         <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black">-</button>
                         <span className="font-medium">Any</span>
                         <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black">+</button>
                       </div>
                     </div>
                     <div className="flex items-center justify-between">
                       <span className="text-gray-700">Salles de bain</span>
                       <div className="flex items-center gap-3">
                         <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black">-</button>
                         <span className="font-medium">Any</span>
                         <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black">+</button>
                       </div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <button className="text-sm text-gray-500 underline hover:text-black">Effacer</button>
                    <Button size="sm" className="bg-black text-white hover:bg-gray-800">Appliquer</Button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Separator */}
          <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block" />

          {/* More Filters */}
          <button
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-black bg-white text-sm font-medium transition-all whitespace-nowrap"
              onClick={() => setIsAllFiltersOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Tous les filtres
          </button>

        </div>
      </div>

      {/* All Filters Modal */}
      {isAllFiltersOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsAllFiltersOpen(false)}
          />
          
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <button onClick={() => setIsAllFiltersOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
              <h2 className="text-lg font-bold text-gray-900">Filtres</h2>
              <div className="w-9" /> {/* Spacer for centering */}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Caractéristiques */}
              <div className="space-y-6">
                <h3 className="font-bold text-xl text-gray-900">Caractéristiques</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Parking/garage", "Balcon/terrasse", "Jardin", "Piscine", "Cave", "Entièrement meublé", "Non meublé", "Cuisine intégrée", "Chauffage au sol", "À rénover", "Accès à mobilité réduite", "Ascenseur"].map((feat) => (
                    <label key={feat} className="flex items-center gap-3 cursor-pointer group select-none">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#C7A86A] focus:ring-[#C7A86A]" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50 rounded-b-xl">
              <button className="text-sm font-medium text-gray-500 underline hover:text-black">Tout effacer</button>
              <Button className="bg-black text-white hover:bg-gray-800 px-8">
                Afficher les résultats
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
