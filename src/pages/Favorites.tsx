import { Heart, Trash2 } from "lucide-react"; // Added Trash2
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PropertyGrid } from "../components/property/PropertyGrid";
import { Button } from "../components/ui/Button";
import { useFavorites } from "../contexts/FavoritesContext";
import { PROPERTIES } from "../data/properties";
import { useTranslation } from "../i18n/I18nProvider";

export function Favorites() {
  const { t } = useTranslation();
  const { favorites, clearAllFavorites, favoritesCount, markAsRead } = useFavorites();

  useEffect(() => {
    markAsRead();
  }, [markAsRead]);

  // Filter properties
  const favoriteProperties = PROPERTIES.filter(property =>
    favorites.includes(property.id)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-20" /> {/* Spacer for fixed header */}
      
      <div className="pt-12 pb-20">
        <div className="container-custom">
        <div className="flex flex-col gap-8">
            <div className="flex items-end justify-between border-b border-gray-200 pb-6">
                <div>
                    <h1 className="font-serif text-3xl text-gray-900 mb-2">
                    {t("favorites.title", { fallback: "Vos favoris" })}
                    </h1>
                     <p className="text-gray-500">
                        {favoritesCount} {t("property.list.resultsLabel", { fallback: "propriétés sauvegardées" })}
                    </p>
                </div>

                {favoritesCount > 0 && (
                    <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFavorites}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                    <Trash2 className="w-4 h-4 mr-2" />
                    {t("favorites.clearAll", { fallback: "Tout effacer" })}
                    </Button>
                )}
            </div>

          {/* Content */}
          <div className="min-h-[400px]">
          {favoriteProperties.length > 0 ? (
            <PropertyGrid properties={favoriteProperties} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="h-24 w-24 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-300 mb-6 border border-gray-100">
                <Heart className="h-10 w-10 fill-current" />
              </div>
              <h2 className="text-2xl font-serif text-gray-900 mb-3 text-center">
                {t("favorites.empty.title", { fallback: "Votre liste est vide" })}
              </h2>
              <p className="text-gray-500 mb-8 max-w-md text-center">
                {t("favorites.empty.description", {
                  fallback: "Vous n'avez pas encore ajouté de propriétés à vos favoris."
                })}
              </p>
              <Link to="/properties">
                <Button variant="outline" className="border-gray-300">
                  {t("favorites.empty.action", { fallback: "Découvrir les propriétés" })}
                </Button>
              </Link>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}