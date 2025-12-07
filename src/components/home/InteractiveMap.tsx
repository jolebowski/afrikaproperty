import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { Reveal } from "../ui/Reveal";

// Données des îles avec coordonnées GPS réelles
const ISLANDS = [
  {
    id: "sal",
    slug: "sal",
    name: "Sal",
    coordinates: [16.75, -22.95] as [number, number],
    price: "2 200 €/m²",
    vibe: "Tourisme & Plages",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "boavista",
    slug: "boa-vista",
    name: "Boa Vista",
    coordinates: [16.10, -22.82] as [number, number],
    price: "1 900 €/m²",
    vibe: "Dunes & Nature",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "santiago",
    slug: "santiago",
    name: "Santiago",
    coordinates: [15.08, -23.62] as [number, number],
    price: "1 500 €/m²",
    vibe: "Capitale & Business",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "saovicente",
    slug: "sao-vicente",
    name: "São Vicente",
    coordinates: [16.86, -24.97] as [number, number],
    price: "1 700 €/m²",
    vibe: "Culture & Musique",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "santoantao",
    slug: "santo-antao",
    name: "Santo Antão",
    coordinates: [17.07, -25.17] as [number, number],
    price: "1 400 €/m²",
    vibe: "Montagnes & Randonnée",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: "fogo",
    slug: "fogo",
    name: "Fogo",
    coordinates: [14.95, -24.38] as [number, number],
    price: "1 300 €/m²",
    vibe: "Volcan & Vins",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop"
  }
];

// Créer un icône personnalisé pour les marqueurs
const createCustomIcon = (isActive: boolean = false) => {
  const size = isActive ? 30 : 20;
  const html = `
    <div style="
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3), ${isActive ? '0 0 20px rgba(255,215,0,0.6)' : '0 0 0 transparent'};
      transition: all 0.3s;
    "></div>
  `;

  return L.divIcon({
    html: html,
    className: 'custom-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
};

// Composant pour ajuster automatiquement la vue
function MapBounds({ islands }: { islands: typeof ISLANDS }) {
  const map = useMap();

  useEffect(() => {
    const updateBounds = () => {
      const bounds = L.latLngBounds(islands.map(island => island.coordinates));
      // Padding plus petit sur mobile
      const padding = window.innerWidth < 768 ? [20, 20] : [50, 50]; 
      map.invalidateSize(); // Force le redimensionnement
      map.fitBounds(bounds, { padding: padding as [number, number] });
    };

    // Initial bound setting
    updateBounds();

    // Update on resize
    window.addEventListener('resize', updateBounds);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateBounds);
    };
  }, [map, islands]);

  return null;
}

export function InteractiveMap() {
  const [activeIsland, setActiveIsland] = useState<string | null>(null);
  const { t } = useTranslation();

  // Fix pour les icônes Leaflet par défaut
  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

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

        <div className="relative w-full h-[500px] md:h-[600px] bg-[#111] rounded-3xl border border-white/5 shadow-2xl overflow-hidden z-10">
          <MapContainer
            center={[16.0, -24.0]}
            zoom={6} 
            className="w-full h-full rounded-3xl"
            scrollWheelZoom={false}
            dragging={true}
            zoomControl={true}
          >
            {/* Utilisation d'un style de carte sombre */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {/* Ajuster automatiquement la vue pour inclure toutes les îles */}
            <MapBounds islands={ISLANDS} />

            {/* Marqueurs pour chaque île */}
            {ISLANDS.map((island) => (
              <Marker
                key={island.id}
                position={island.coordinates}
                icon={createCustomIcon(activeIsland === island.id)}
                eventHandlers={{
                  mouseover: () => setActiveIsland(island.id),
                  mouseout: () => setActiveIsland(null),
                  click: () => setActiveIsland(island.id),
                }}
              >
                <Popup
                  className="custom-popup"
                  closeButton={false}
                  autoPan={true}
                  autoPanPadding={[20, 20]}
                >
                  <div className="w-full"> 
                    <div className="h-24 sm:h-32 relative">
                      <img
                        src={island.image}
                        alt={island.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-2 left-3 sm:bottom-3 sm:left-4 text-white z-10">
                        <h3 className="font-serif font-bold text-lg sm:text-xl drop-shadow-md">{island.name}</h3>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 bg-white rounded-b-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {t("home.map.price", { fallback: "Prix Moyen" })}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-gray-900">
                          {t(`home.map.islands.${island.id}.price`, { fallback: island.price })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {t("home.map.vibe", { fallback: "Ambiance" })}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] sm:max-w-none">
                          {t(`home.map.islands.${island.id}.vibe`, { fallback: island.vibe })}
                        </span>
                      </div>
                      <Link
                        to={`/destinations/${island.slug}`}
                        className="flex items-center justify-between w-full p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-[10px] sm:text-xs font-bold text-gray-900">
                          {t("home.map.explore", { fallback: "Explorer les biens" })}
                        </span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Légende / Info - Mobile Friendly version */}
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-8 md:left-8 bg-black/70 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl md:max-w-xs z-[400]">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">
                  {t("home.map.legendTitle", { fallback: "Guide de l'investisseur" })}
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed hidden sm:block">
                  {t("home.map.legendText", {
                    fallback: "Cliquez sur les marqueurs pour explorer les opportunités d'investissement.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles personnalisés pour les popups Leaflet */}
      <style>{`
        .leaflet-popup-content-wrapper {
          padding: 0;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        .leaflet-popup-content {
          margin: 0;
          width: 256px !important;
        }
        @media (max-width: 640px) {
           .leaflet-popup-content {
             width: 280px !important; /* Increased from 220px to fix cutoff */
           }
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-container {
          font-family: inherit;
          z-index: 10;
        }
        /* Style pour le contrôle de zoom */
        .leaflet-control-zoom {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(0, 0, 0, 0.7) !important;
        }
        .leaflet-control-zoom a {
          background: transparent !important;
          color: white !important;
        }
        .leaflet-control-zoom a:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        /* Animation pour les marqueurs */
        .custom-marker > div {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }
          50% {
            box-shadow: 0 2px 20px rgba(255,215,0,0.4);
          }
          100% {
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }
        }
        /* Style plus discret pour l'attribution (OBLIGATOIRE - NE PAS CACHER) */
        .leaflet-control-attribution {
          background: rgba(0, 0, 0, 0.5) !important;
          color: rgba(255, 255, 255, 0.4) !important;
          font-size: 10px !important;
          padding: 2px 5px !important;
          border-radius: 4px !important;
        }
        .leaflet-control-attribution a {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .leaflet-control-attribution a:hover {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>
    </section>
  );
}