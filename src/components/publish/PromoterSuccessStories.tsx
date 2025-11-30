import { Quote } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const STORIES = [
  {
    promoter: "Cabo Verde Real Estate",
    person: "Carlos Mendes",
    role: "Directeur Commercial",
    quote: "Depuis que nous utilisons Luxe CV, nous avons doublé notre visibilité auprès de la clientèle française. La qualité des leads est incomparable.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    result: "+12 Ventes en 6 mois"
  },
  {
    promoter: "Horizon Villas",
    person: "Sarah Johnson",
    role: "Fondatrice",
    quote: "L'interface de gestion est simple et efficace. Nous pouvons mettre en avant nos villas de luxe exactement comme elles le méritent.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    result: "100% des lots vendus"
  }
];

export function PromoterSuccessStories() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Header */}
          <div className="lg:w-1/3">
            <Reveal>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Témoignages
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ils nous font <span className="text-primary italic">confiance</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 text-lg leading-relaxed">
                Découvrez les retours d'expérience des promoteurs et agences qui ont choisi Luxe CV pour accélérer leur croissance.
              </p>
            </Reveal>
          </div>

          {/* Stories Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORIES.map((story, index) => (
              <Reveal key={index} delay={index * 0.1 + 0.3} width="100%">
                <div className="bg-gray-50 p-8 rounded-3xl relative group hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border border-transparent hover:border-gray-100">
                  <Quote className="absolute top-8 right-8 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={story.image} 
                      alt={story.person} 
                      className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{story.person}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{story.promoter}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </p>

                  <div className="inline-block px-4 py-2 rounded-lg bg-white border border-gray-100 text-primary font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    {story.result}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
