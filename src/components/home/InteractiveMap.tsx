import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { Reveal } from "../ui/Reveal";

const ISLANDS = [
  {
    id: "sal",
    name: "Sal",
    top: "25%",
    left: "75%",
    price: "2 200 €/m²",
    vibe: "Tourisme & Plages",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "boavista",
    name: "Boa Vista",
    top: "35%",
    left: "70%",
    price: "1 900 €/m²",
    vibe: "Dunes & Nature",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "santiago",
    name: "Santiago",
    top: "75%",
    left: "65%",
    price: "1 500 €/m²",
    vibe: "Capitale & Business",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "saovicente",
    name: "São Vicente",
    top: "15%",
    left: "25%",
    price: "1 700 €/m²",
    vibe: "Culture & Musique",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  }
];

export function InteractiveMap() {
  const [activeIsland, setActiveIsland] = useState<string | null>(null);
  const { t } = useTranslation();

  // Handle click outside to close on mobile
  const handleMapClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveIsland(null);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                {t("home.map.tag", { fallback: "Exploration" })}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
                {t("home.map.title", { fallback: "Choisissez votre destination" })}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} direction="left">
            <p className="text-gray-400 max-w-md text-right md:text-left">
              {t("home.map.description", {
                fallback:
                  "Chaque île a son caractère unique. Survolez la carte (ou cliquez) pour découvrir les opportunités de chaque région.",
              })}
            </p>
          </Reveal>
        </div>

        <div 
          className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#111] rounded-3xl border border-white/5 shadow-2xl"
          onClick={handleMapClick}
        >
          {/* Map Background (Stylized) */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
             {/* Using a placeholder map image - in prod use a real SVG or high-res map */}
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cape_Verde_location_map.svg/2000px-Cape_Verde_location_map.svg.png" 
              alt="Map of Cape Verde" 
              className="w-full h-full object-cover grayscale invert contrast-125"
            />
          </div>
          
          {/* Hotspots */}
          {ISLANDS.map((island) => (
            <div 
              key={island.id}
              className="absolute z-10"
              style={{ top: island.top, left: island.left }}
              onMouseEnter={() => setActiveIsland(island.id)}
              onMouseLeave={() => setActiveIsland(null)}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIsland(activeIsland === island.id ? null : island.id);
              }}
            >
              {/* Pulsing Dot */}
              <div className="relative flex items-center justify-center w-12 h-12 md:w-8 md:h-8 cursor-pointer -translate-x-1/2 -translate-y-1/2">
                <div className={`absolute inset-0 rounded-full bg-primary opacity-20 animate-ping ${activeIsland === island.id ? 'animation-duration-[1s]' : ''}`} />
                <div className={`relative w-4 h-4 md:w-3 md:h-3 rounded-full bg-primary transition-all duration-300 ${activeIsland === island.id ? 'scale-150 shadow-[0_0_20px_rgba(0,167,157,0.5)]' : ''}`} />
              </div>

              {/* Tooltip Card (Desktop: Floating / Mobile: Fixed Bottom) */}
              <div 
                className={`
                  fixed md:absolute 
                  left-4 right-4 bottom-4 md:left-1/2 md:bottom-full md:right-auto md:mb-4 
                  md:-translate-x-1/2 w-auto md:w-64 
                  bg-white rounded-xl shadow-xl overflow-hidden 
                  transition-all duration-300 origin-bottom 
                  z-50 md:z-auto
                  ${activeIsland === island.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 pointer-events-none translate-y-4 md:translate-y-0'}
                `}
              >
                <div className="flex md:block">
                  <div className="h-24 w-24 md:w-full md:h-24 relative shrink-0">
                    <img src={island.image} alt={island.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent hidden md:block" />
                    <div className="absolute bottom-3 left-4 text-white font-serif font-bold text-lg hidden md:block">
                      {island.name}
                    </div>
                  </div>
                  
                  <div className="p-4 flex-1">
                    <div className="md:hidden font-serif font-bold text-gray-900 text-lg mb-1">{island.name}</div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {t("home.map.price", { fallback: "Prix Moyen" })}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {t(`home.map.islands.${island.id}.price`, { fallback: island.price })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {t("home.map.vibe", { fallback: "Ambiance" })}
                      </span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {t(`home.map.islands.${island.id}.vibe`, { fallback: island.vibe })}
                      </span>
                    </div>
                    <Link to="/destinations" className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 transition-colors group/link">
                      <span className="text-xs font-bold text-gray-900">
                        {t("home.map.explore", { fallback: "Explorer" })}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover/link:text-primary transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Legend / Info */}
          <div className="absolute bottom-8 left-8 bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-xs hidden md:block pointer-events-none">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-sm mb-1">
                  {t("home.map.legendTitle", { fallback: "Guide de l'investisseur" })}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {t("home.map.legendText", {
                    fallback: "Survolez les points pour comparer rapidement les zones d'investissement.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
