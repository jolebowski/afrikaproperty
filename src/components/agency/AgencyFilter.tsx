import React from 'react';
import { AGENCIES } from "../../data/agencies";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";

interface AgencyFilterProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const AgencyFilter: React.FC<AgencyFilterProps> = ({ value, onChange, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
      >
        <option value="">{t("filters.allAgencies", { fallback: "Toutes les agences" })}</option>
        {AGENCIES.map((agency) => (
          <option key={agency.id} value={agency.id}>
            {agency.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};
