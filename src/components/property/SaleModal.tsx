import { DollarSign, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../i18n/I18nProvider";
import { cn } from "../../lib/utils";
import type { Property } from "../../types";

interface SaleModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
  onConfirmSale: (saleData: {
    property: Property;
    salePrice: number;
    commissionRate: number;
    commissionAmount: number;
    saleDate: string;
    notes?: string;
  }) => void;
}

export default function SaleModal({ property, isOpen, onClose, onConfirmSale }: SaleModalProps) {
  const { t } = useTranslation();

  const [salePrice, setSalePrice] = useState<string>(property.price.toString());
  const [commissionType, setCommissionType] = useState<'percentage' | 'fixed'>('percentage');
  const [commissionValue, setCommissionValue] = useState<string>("2.5");
  const [saleDate, setSaleDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState<string>("");

  // Calculate commission amount
  const calculateCommission = () => {
    const price = parseFloat(salePrice) || 0;
    const value = parseFloat(commissionValue) || 0;
    
    if (commissionType === 'fixed') {
        return value;
    }
    return (price * value) / 100;
  };

  const commissionAmount = calculateCommission();

  const handleConfirm = () => {
    if (!salePrice || !commissionValue || !saleDate) {
      alert(t("commission.fillAllFields"));
      return;
    }

    const price = parseFloat(salePrice);
    const calculatedRate = commissionType === 'percentage' 
        ? parseFloat(commissionValue) 
        : (commissionAmount / price) * 100;

    onConfirmSale({
      property,
      salePrice: price,
      commissionRate: calculatedRate,
      commissionAmount,
      saleDate,
      notes: notes.trim() || undefined,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] flex flex-col relative shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0 flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                {t("commission.recordSale")}
            </h2>
            <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                <X className="h-5 w-5 text-gray-500" />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
            <div className="space-y-6">
            {/* Property Info */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500 mb-0.5 uppercase tracking-wider font-semibold">{t("commission.property")}</p>
                    <p className="font-bold text-gray-900 text-lg">{property.title}</p>
                    <p className="text-sm text-gray-600">{property.location}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-0.5">{t("commission.listPrice")}</p>
                    <p className="font-mono font-medium text-gray-900 bg-white px-2 py-1 rounded border border-gray-200">
                        {property.price.toLocaleString()} {property.currency}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Sale Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t("commission.salePrice")}
                    </label>
                    <div className="relative">
                        <input
                        type="number"
                        value={salePrice}
                        onChange={(e) => setSalePrice(e.target.value)}
                        className="w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all font-medium"
                        placeholder={property.price.toString()}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-medium sm:text-sm">{property.currency}</span>
                        </div>
                    </div>
                </div>

                {/* Sale Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t("commission.saleDate")}
                    </label>
                    <input
                    type="date"
                    value={saleDate}
                    onChange={(e) => setSaleDate(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all font-medium text-gray-700"
                    />
                </div>
            </div>

            {/* Commission Configuration */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Commission</label>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4">
                    
                    {/* Toggle Type */}
                    <div className="flex bg-white p-1 rounded-lg border border-gray-200 w-full">
                        <button
                            type="button"
                            onClick={() => setCommissionType('percentage')}
                            className={cn(
                                "flex-1 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                                commissionType === 'percentage' 
                                    ? "bg-green-50 text-green-700 shadow-sm ring-1 ring-green-200" 
                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            )}
                        >
                            Pourcentage (%)
                        </button>
                        <button
                            type="button"
                            onClick={() => setCommissionType('fixed')}
                            className={cn(
                                "flex-1 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                                commissionType === 'fixed' 
                                    ? "bg-green-50 text-green-700 shadow-sm ring-1 ring-green-200" 
                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            )}
                        >
                            Montant Fixe
                        </button>
                    </div>

                    {/* Value Input */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
                            {commissionType === 'percentage' ? "Taux de commission" : "Montant de commission"}
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                step={commissionType === 'percentage' ? "0.1" : "100"}
                                value={commissionValue}
                                onChange={(e) => setCommissionValue(e.target.value)}
                                className="w-full pl-3 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all font-bold text-gray-900"
                                placeholder={commissionType === 'percentage' ? "5.0" : "5000"}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 font-bold sm:text-sm">
                                    {commissionType === 'percentage' ? "%" : property.currency}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Calculation Result */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-500">Total calculé :</span>
                        <span className="text-xl font-bold text-green-600 font-mono">
                            {commissionAmount.toLocaleString()} {property.currency}
                        </span>
                    </div>

                </div>
            </div>

            {/* Notes (optional) */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("commission.notes")} <span className="text-gray-400 font-normal">({t("common.optional")})</span>
                </label>
                <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
                rows={2}
                placeholder="Détails supplémentaires sur la transaction..."
                />
            </div>

            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 flex gap-4 flex-shrink-0 bg-white rounded-b-xl">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            {t("common.cancel")}
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg transition-all"
          >
            {t("commission.confirmSale")}
          </button>
        </div>
      </div>
    </div>
  );
}