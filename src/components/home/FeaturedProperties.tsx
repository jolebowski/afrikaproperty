import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PROPERTIES } from "../../data/properties";
import { PropertyCard } from "../property/PropertyCard";
import { Reveal } from "../ui/Reveal";

export function FeaturedProperties() {
  const featuredProperties = PROPERTIES.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Sélection Exclusive
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Propriétés <span className="italic text-gray-400">à la Une</span>
              </h2>
            </Reveal>
          </div>
          
          <div className="hidden md:block">
            <Reveal delay={0.2} direction="left">
              <Link 
                to="/properties" 
                className="group inline-flex items-center text-lg font-medium text-gray-900 border-b border-gray-200 pb-1 hover:border-primary transition-colors"
              >
                Voir toute la collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} delay={index * 0.1 + 0.3} width="100%">
              <div className="group">
                <PropertyCard property={property} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/properties" 
            className="inline-flex items-center text-lg font-medium text-gray-900 border-b border-gray-200 pb-1"
          >
            Voir toute la collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
