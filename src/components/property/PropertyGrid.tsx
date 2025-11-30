import { useTranslation } from "../../i18n/I18nProvider";
import type { Property } from "../../types";
import { Skeleton } from "../ui/Skeleton";
import { PropertyCard } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
}

export function PropertyGrid({ properties, isLoading = false }: PropertyGridProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <Skeleton className="aspect-[4/3] w-full" />
            <div className="p-5 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="pt-4 border-t border-gray-100 flex justify-between">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
          {t("property.list.emptyTitle", { fallback: "Aucune propriété trouvée" })}
        </h3>
        <p className="text-gray-500">
          {t("property.list.emptyDescription", { fallback: "Essayez de modifier vos filtres de recherche." })}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
