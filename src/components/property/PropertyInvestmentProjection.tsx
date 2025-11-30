import { Info, TrendingUp } from "lucide-react";
import { useTranslation } from "../../i18n/I18nProvider";

interface PropertyInvestmentProjectionProps {
  price: number;
  currency?: string;
  rentPrice?: number; // Monthly rent estimation
}

export function PropertyInvestmentProjection({ price, rentPrice, currency = "EUR" }: PropertyInvestmentProjectionProps) {
  // Simple mock calculation
  const estimatedRent = rentPrice || (price * 0.008); // ~9.6% gross yield assumption
  const annualRent = estimatedRent * 12;
  const grossYield = (annualRent / price) * 100;
  const { t, formatCurrency } = useTranslation();

  return (
    <div className="bg-secondary text-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <TrendingUp className="h-5 w-5" />
        </div>
        <h3 className="font-serif text-xl font-bold">
          {t("property.investment.title", { fallback: "Projection d'Investissement" })}
        </h3>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-gray-400">
            {t("property.investment.purchasePrice", { fallback: "Prix d'acquisition" })}
          </span>
          <span className="text-xl font-bold">{formatCurrency(price, currency)}</span>
        </div>

        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <span className="text-gray-400">
            {t("property.investment.monthlyRent", { fallback: "Loyer mensuel estimé" })}
          </span>
          <span className="text-xl font-bold">{formatCurrency(estimatedRent, currency)}</span>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-gray-400">
            {t("property.investment.grossYield", { fallback: "Rendement Brut" })}
          </span>
          <span className="text-2xl font-bold text-primary">{grossYield.toFixed(1)}%</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex gap-2 text-xs text-gray-500">
        <Info className="h-4 w-4 flex-shrink-0" />
        <p>
          {t("property.investment.disclaimer", {
            fallback:
              "Ces chiffres sont des estimations basées sur le marché actuel et ne constituent pas une garantie de revenus.",
          })}
        </p>
      </div>
    </div>
  );
}
