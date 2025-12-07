import { Calendar, CheckCircle, Clock, DollarSign, FileText } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../i18n/I18nProvider";
import type { Commission } from "../../types";
import { useToast } from "../ui/Toast";

interface CommissionTableProps {
  commissions: Commission[];
  onUpdateStatus?: (commissionId: string, status: "pending" | "paid") => void;
}

export default function CommissionTable({ commissions, onUpdateStatus }: CommissionTableProps) {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [selectedCommissions, setSelectedCommissions] = useState<string[]>([]);

  const handleMarkAsPaid = (commission: Commission) => {
    if (onUpdateStatus) {
      onUpdateStatus(commission.id, "paid");
    }
  };

  const toggleSelectCommission = (id: string) => {
    setSelectedCommissions((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedCommissions.length === commissions.length) {
      setSelectedCommissions([]);
    } else {
      setSelectedCommissions(commissions.map((c) => c.id));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return `${amount.toLocaleString("fr-FR")} ${currency}`;
  };

  const getTotalCommissions = (status?: "pending" | "paid") => {
    const filtered = status
      ? commissions.filter((c) => c.status === status)
      : commissions;
    return filtered.reduce((sum, c) => sum + c.commissionAmount, 0);
  };

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t("commission.totalCommissions")}</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(getTotalCommissions(), "EUR")}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-700">{t("commission.pendingPayment")}</p>
              <p className="text-2xl font-bold text-yellow-700">
                {formatCurrency(getTotalCommissions("pending"), "EUR")}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700">{t("commission.paid")}</p>
              <p className="text-2xl font-bold text-green-700">
                {formatCurrency(getTotalCommissions("paid"), "EUR")}
              </p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedCommissions.length === commissions.length && commissions.length > 0}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </th>
                <th className="px-6 py-4">{t("commission.property")}</th>
                <th className="px-6 py-4">{t("commission.salePrice")}</th>
                <th className="px-6 py-4">{t("commission.rate")}</th>
                <th className="px-6 py-4">{t("commission.amount")}</th>
                <th className="px-6 py-4">{t("commission.saleDate")}</th>
                <th className="px-6 py-4">{t("commission.status")}</th>
                <th className="px-6 py-4 text-right">{t("common.actions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {commissions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    {t("commission.noCommissions")}
                  </td>
                </tr>
              ) : (
                commissions.map((commission) => (
                  <tr key={commission.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedCommissions.includes(commission.id)}
                        onChange={() => toggleSelectCommission(commission.id)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{commission.propertyTitle}</p>
                        <p className="text-xs text-gray-500">ID: {commission.propertyId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatCurrency(commission.salePrice, commission.currency)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{commission.commissionRate}%</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-green-600">
                        {formatCurrency(commission.commissionAmount, commission.currency)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(commission.saleDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {commission.status === "paid" ? (
                        <div className="flex items-center gap-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            <CheckCircle className="h-3 w-3" />
                            {t("commission.paid")}
                          </span>
                          {commission.paidDate && (
                            <span className="text-xs text-gray-500">
                              ({formatDate(commission.paidDate)})
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                          <Clock className="h-3 w-3" />
                          {t("commission.pending")}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {commission.status === "pending" && (
                          <button
                            onClick={() => handleMarkAsPaid(commission)}
                            className="px-3 py-1 text-xs bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                          >
                            {t("commission.markAsPaid")}
                          </button>
                        )}
                        {commission.notes && (
                          <button
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors"
                            title={commission.notes}
                            onClick={() => addToast(commission.notes || "", "info")}
                          >
                            <FileText className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer with export button */}
        {commissions.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {selectedCommissions.length} {t("common.selected")}
            </p>
            <button
              className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => addToast(t("commission.exportToCSV"), "info")}
            >
              {t("commission.export")} CSV
            </button>
          </div>
        )}
      </div>
    </div>
  );
}