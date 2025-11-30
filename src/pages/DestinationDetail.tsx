import { ArrowLeft, Calendar, Plane, Sun } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PropertyGrid } from "../components/property/PropertyGrid";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { DESTINATIONS } from "../data/destinations";
import { PROPERTIES } from "../data/properties";

export function DestinationDetail() {
  const { slug } = useParams();
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif font-bold mb-4">Destination non trouvée</h1>
        <Link to="/destinations">
          <Button>Retour aux destinations</Button>
        </Link>
      </div>
    );
  }

  // Mock filtering properties by location (simple string match for now)
  const destinationProperties = PROPERTIES.filter(p => 
    p.location.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <main>
      <PageHero
        title={destination.name}
        backgroundImage={destination.image}
      />

      <div className="container-custom py-12">
        <Link to="/destinations" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux destinations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-6">À propos de {destination.name}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {destination.description}
            </p>

            <h3 className="font-serif text-2xl font-bold mb-4">Points Forts</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
            <h3 className="font-serif text-xl font-bold mb-6">Infos Pratiques</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Plane className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-gray-900">Aéroport</p>
                  <p className="text-sm text-gray-600">{destination.practicalInfo.airport}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-gray-900">Durée de vol</p>
                  <p className="text-sm text-gray-600">{destination.practicalInfo.flightDuration}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Sun className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-gray-900">Meilleure saison</p>
                  <p className="text-sm text-gray-600">{destination.practicalInfo.bestSeason}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties in Area */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-3xl font-bold">Propriétés à {destination.name}</h2>
            <Link to="/properties" className="text-primary font-medium hover:underline">
              Voir tout
            </Link>
          </div>
          
          {destinationProperties.length > 0 ? (
            <PropertyGrid properties={destinationProperties} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">Aucune propriété disponible pour le moment à {destination.name}.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
