import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";

const DESTINATIONS = [
  {
    id: "sal",
    name: "Sal",
    description: "L'île du soleil éternel et des plages infinies.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    count: 45,
    tag: "Balnéaire"
  },
  {
    id: "boa-vista",
    name: "Boa Vista",
    description: "Des dunes de sable blanc à perte de vue.",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop",
    count: 32,
    tag: "Nature"
  },
  {
    id: "santiago",
    name: "Santiago",
    description: "Le cœur culturel et historique de l'archipel.",
    image: "https://images.unsplash.com/photo-1584284496181-229475899292?q=80&w=2070&auto=format&fit=crop",
    count: 28,
    tag: "Culture"
  },
  {
    id: "sao-vicente",
    name: "São Vicente",
    description: "L'âme musicale et festive du Cap-Vert.",
    image: "https://images.unsplash.com/photo-1580666726284-5264b38d302b?q=80&w=2070&auto=format&fit=crop",
    count: 15,
    tag: "Art de vivre"
  }
];

export function DestinationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Explorer
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Destinations <span className="italic text-gray-400">Phares</span>
              </h2>
            </Reveal>
          </div>
          <div className="hidden md:block">
            <Reveal delay={0.2} direction="left">
              <Link to="/destinations" className="group inline-flex items-center text-lg font-medium text-gray-900 border-b border-gray-200 pb-1 hover:border-primary transition-colors">
                Voir toutes les îles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DESTINATIONS.map((destination, index) => (
            <Reveal key={destination.id} delay={index * 0.1 + 0.3} width="100%">
              <Link 
                to={`/destinations/${destination.id}`}
                className="group relative block h-[500px] w-full overflow-hidden rounded-[2rem]"
              >
                {/* Image */}
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  
                  {/* Top Tag */}
                  <div className="self-start">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide">
                      {destination.tag}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.count} propriétés</span>
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold text-white mb-2">
                      {destination.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 text-center md:hidden">
          <Link to="/destinations" className="inline-flex items-center text-lg font-medium text-gray-900 border-b border-gray-200 pb-1">
            Voir toutes les îles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
