import { Bath, Bed, ChevronLeft, ChevronRight, Heart, MapPin, Maximize } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AGENCIES } from "../../data/agencies";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";
import type { Property } from "../../types";
import { AgencyBadge } from "../agency/AgencyBadge";
import { Badge } from "../ui/Badge";
import { useAuth } from "../../contexts/AuthContext";
import { useFavorites } from "../../contexts/FavoritesContext";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t, formatCurrency } = useTranslation();
  const { user, agency } = useAuth();
  const { toggleFavorite, isFavorited } = useFavorites();

  // Afficher les favoris uniquement pour les visiteurs (non connectés ou pas agency/promoter)
  const showFavorites = !user || !agency;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div
      className={cn(
        "group relative block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Link to={`/properties/${property.id}`} className="block h-full w-full">
            <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          {property.isNew && (
            <Badge variant="default">
              {t("property.badges.new", { fallback: "Nouveau" })}
            </Badge>
          )}
          {property.isExclusive && (
            <Badge variant="secondary">
              {t("property.badges.exclusive", { fallback: "Exclusif" })}
            </Badge>
          )}
          {property.status === "sold" && (
            <Badge variant="destructive">
              {t("property.badges.sold", { fallback: "Vendu" })}
            </Badge>
          )}
        </div>

        {/* Favorite Button - Only for visitors */}
        {showFavorites && (
          <button
            className={cn(
              "absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-white transition-all duration-300 shadow-lg z-20 hover:scale-110 active:scale-95",
              isFavorited(property.id)
                ? "text-red-500 hover:text-red-600"
                : "text-gray-700 hover:text-red-500"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            title={isFavorited(property.id) ? t("property.removeFromFavorites", { fallback: "Retirer des favoris" }) : t("property.addToFavorites", { fallback: "Ajouter aux favoris" })}
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-all duration-300",
                isFavorited(property.id)
                  ? "fill-current animate-pulse"
                  : ""
              )}
            />
          </button>
        )}

        {/* Image Navigation */}
        {property.images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Image Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
            {property.images.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-colors",
                  idx === currentImageIndex ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-[200px]">
        <div className="flex justify-between items-start mb-2">
            <Link to={`/properties/${property.id}`} className="group-hover:text-primary transition-colors">
                <h3 className="font-serif text-lg font-semibold text-text-primary line-clamp-1">
                    {property.title}
                </h3>
            </Link>
          <p className="font-semibold text-primary whitespace-nowrap ml-4">
            {formatCurrency(property.price, property.currency)}
          </p>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600 mt-auto">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>
                {property.area} {t("property.metrics.areaUnit", { fallback: "m²" })}
              </span>
            </div>
          </div>
        </div>
        
        {/* Agency Badge */}
        {(property.agency || property.agencyId) && (
           <div className="mt-4 pt-3 border-t border-gray-50">
             <div className="relative z-10">
                <AgencyBadge 
                    agency={property.agency || AGENCIES.find(a => a.id === property.agencyId)} 
                />
             </div>
           </div>
        )}
      </div>
    </div>
  );
}
