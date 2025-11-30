import { Check } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";

interface PropertyAmenitiesProps {
  amenities?: string[];
}

// Mock amenities if none provided
const DEFAULT_AMENITIES = [
  "Climatisation",
  "Piscine",
  "Vue Mer",
  "Jardin",
  "Parking",
  "Sécurité 24/7",
  "Wi-Fi",
  "Terrasse",
];

export function PropertyAmenities({ amenities = DEFAULT_AMENITIES }: PropertyAmenitiesProps) {
  const { t } = useTranslation();
  const translatedAmenities =
    (t("property.amenities.defaults", { fallback: DEFAULT_AMENITIES }) as string[]) || DEFAULT_AMENITIES;
  const displayAmenities = amenities?.length ? amenities : translatedAmenities;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-serif text-xl font-bold mb-6">
        {t("property.amenities.title", { fallback: "Équipements" })}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-600">
            <div className="h-6 w-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
