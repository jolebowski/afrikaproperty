import { ArrowRight, Lock, Star } from "lucide-react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const OPPORTUNITIES = [
  {
    id: 1,
    title: "Résidence Santa Maria Beach",
    location: "Sal, Santa Maria",
    type: "Appartements Vue Mer",
    price: "À partir de 145 000 €",
    yield: "Est. 7.5%",
    status: "Avant-Première",
    image: "https://images.unsplash.com/photo-1570211776045-af3a51026f4a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Villas des Dunes",
    location: "Boa Vista, Sal Rei",
    type: "Villas Individuelles",
    price: "À partir de 280 000 €",
    yield: "Est. 6.8%",
    status: "Off-Market",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Mindelo Harbor Loft",
    location: "São Vicente, Mindelo",
    type: "Lofts Urbains",
    price: "À partir de 95 000 €",
    yield: "Est. 6.2%",
    status: "Lancement",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  }
];

export function CurrentOpportunities() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Exclusivités
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Opportunités <span className="italic text-gray-400">du Moment</span>
              </h2>
            </Reveal>
          </div>
          <div className="hidden md:block">
            <Reveal delay={0.2} direction="left">
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-primary hover:text-primary">
                Voir toutes les opportunités
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OPPORTUNITIES.map((opp, index) => (
            <Reveal key={opp.id} delay={index * 0.1 + 0.3} width="100%">
              <div className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer">
                {/* Image */}
                <img 
                  src={opp.image} 
                  alt={opp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wide">
                    <Lock className="h-3 w-3" />
                    {opp.status}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/70 text-sm font-medium mb-2">{opp.location}</p>
                    <h3 className="font-serif text-2xl font-bold text-white mb-4">{opp.title}</h3>
                    
                    <div className="flex items-center justify-between border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div>
                        <p className="text-white/60 text-xs uppercase tracking-wider">Prix</p>
                        <p className="text-white font-semibold">{opp.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Rendement</p>
                        <p className="text-primary font-bold">{opp.yield}</p>
                      </div>
                    </div>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border-none">
                        Accéder au dossier
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
