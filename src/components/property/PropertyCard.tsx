import { Bath, Bed, ChevronLeft, ChevronRight, Heart, MapPin, Maximize } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";
import type { Property } from "../../types";
import { Badge } from "../ui/Badge";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t, formatCurrency } = useTranslation();

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <Link
      to={`/properties/${property.id}`}
      className={cn(
        "group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
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

        {/* Favorite Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault();
            // Handle favorite logic
          }}
        >
          <Heart className="h-5 w-5" />
        </button>

        {/* Image Navigation */}
        {property.images.length > 1 && isHovered && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Image Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
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
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-semibold text-text-primary line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="font-semibold text-primary whitespace-nowrap ml-4">
            {formatCurrency(property.price, property.currency)}
          </p>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-600">
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
    </Link>
  );
}
