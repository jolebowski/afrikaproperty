import { ArrowUpDown } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";

interface SortBarProps {
  totalItems: number;
  onSortChange: (value: string) => void;
}

export function SortBar({ totalItems, onSortChange }: SortBarProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-gray-100">
      <p className="text-gray-500 text-sm">
        <span className="font-semibold text-gray-900">{totalItems}</span>{" "}
        {t("property.list.resultsLabel", { fallback: "résultats" })}
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-600 flex items-center gap-1">
          <ArrowUpDown className="h-3 w-3" />
          {t("property.sort.label", { fallback: "Trier par" })} :
        </label>
        <select
          id="sort"
          className="text-sm border-none bg-transparent font-medium text-gray-900 focus:ring-0 cursor-pointer"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="newest">{t("property.sort.newest", { fallback: "Nouveautés" })}</option>
          <option value="price_asc">{t("property.sort.priceAsc", { fallback: "Prix croissant" })}</option>
          <option value="price_desc">{t("property.sort.priceDesc", { fallback: "Prix décroissant" })}</option>
          <option value="area_desc">{t("property.sort.areaDesc", { fallback: "Surface décroissante" })}</option>
        </select>
      </div>
    </div>
  );
}
