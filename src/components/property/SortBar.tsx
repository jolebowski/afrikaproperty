import { ArrowUpDown } from "lucide-react";

interface SortBarProps {
  totalItems: number;
  onSortChange: (value: string) => void;
}

export function SortBar({ totalItems, onSortChange }: SortBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-gray-100">
      <p className="text-gray-500 text-sm">
        <span className="font-semibold text-gray-900">{totalItems}</span> résultats trouvés
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-600 flex items-center gap-1">
          <ArrowUpDown className="h-3 w-3" />
          Trier par :
        </label>
        <select
          id="sort"
          className="text-sm border-none bg-transparent font-medium text-gray-900 focus:ring-0 cursor-pointer"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="newest">Nouveautés</option>
          <option value="price_asc">Prix croissant</option>
          <option value="price_desc">Prix décroissant</option>
          <option value="area_desc">Surface décroissante</option>
        </select>
      </div>
    </div>
  );
}
