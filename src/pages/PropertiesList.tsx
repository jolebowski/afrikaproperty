import { useState } from "react";
import { Filters } from "../components/property/Filters";
import { PropertyGrid } from "../components/property/PropertyGrid";
import { SortBar } from "../components/property/SortBar";
import { PROPERTIES } from "../data/properties";
import { useTranslation } from "../i18n/I18nProvider";


export function PropertiesList() {
  const [sortValue, setSortValue] = useState("newest");
  const { t } = useTranslation();

  // Mock sorting logic
  const sortedProperties = [...PROPERTIES].sort((a, b) => {
    if (sortValue === "price_asc") return a.price - b.price;
    if (sortValue === "price_desc") return b.price - a.price;
    if (sortValue === "area_desc") return b.area - a.area;
    return 0; // newest (default order for now)
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-20" /> {/* Spacer for fixed header */}
      
      <div className="pt-12 pb-20">
        <div className="container-custom">

        <div className="flex flex-col gap-6">
          {/* Horizontal Filters */}
          <Filters />

          {/* Sort Bar & Results */}
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              <span className="font-medium text-gray-900">{sortedProperties.length}</span>{" "}
              {t("property.list.resultsLabel", { fallback: "résultats" })}
            </div>
            <SortBar 
              totalItems={sortedProperties.length} 
              onSortChange={setSortValue} 
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <PropertyGrid properties={sortedProperties} />
            
            {/* Pagination (Mock) */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
                {t("property.list.pagination.previous", { fallback: "Précédent" })}
              </button>
              <button className="px-4 py-2 border border-primary bg-primary text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                {t("property.list.pagination.next", { fallback: "Suivant" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
