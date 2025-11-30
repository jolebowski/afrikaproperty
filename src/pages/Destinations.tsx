import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ModernPageHero } from "../components/ui/ModernPageHero";
import { DESTINATIONS } from "../data/destinations";
import { useTranslation } from "../i18n/I18nProvider";

export function Destinations() {
  const { t, language } = useTranslation();

  return (
    <main>
      <ModernPageHero
        tag={t("destinationsPage.tag", { fallback: "Évasion" })}
        title={t("destinationsPage.title", { fallback: "Nos Destinations" })}
        subtitle={t("destinationsPage.subtitle", {
          fallback: "Explorez les îles du Cap-Vert et trouvez le lieu idéal pour votre investissement.",
        })}
        image="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESTINATIONS.map((destination) => {
              const localized = destination.translations?.[language];
              const description = localized?.description ?? destination.description;

              return (
                <Link 
                  key={destination.id} 
                  to={`/destinations/${destination.slug}`}
                  className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="font-serif text-3xl font-bold mb-2">{destination.name}</h2>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                      {t("destinationsPage.discover", { fallback: "Découvrir" })}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
