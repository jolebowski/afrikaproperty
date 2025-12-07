import { DollarSign, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/I18nProvider";
import type { Commission } from "../../types";
import { useAuth } from "../../contexts/AuthContext";
import { getRecentCommissions, getCommissionStats } from "../../data/commissions";
import { useEffect, useState } from "react";

export function CommissionWidget() {
  const { t } = useTranslation();
  const { agency } = useAuth();
  const [recentCommissions, setRecentCommissions] = useState<Commission[]>([]);
  const [stats, setStats] = useState({
    totalPending: 0,
    countPending: 0,
  });

  useEffect(() => {
    if (agency) {
      // Get recent commissions (last 30 days)
      const recent = getRecentCommissions(agency.id).slice(0, 3); // Get only 3 most recent
      setRecentCommissions(recent);

      // Get stats
      const commissionStats = getCommissionStats(agency.id);
      setStats({
        totalPending: commissionStats.totalPending,
        countPending: commissionStats.countPending,
      });
    }
  }, [agency]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return t("common.today") as string;
    if (diffDays === 1) return t("common.yesterday") as string;
    if (diffDays < 7) return `${diffDays} ${t("common.daysAgo") as string}`;

    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gray-900">{t("commission.commissions")}</h3>
              <p className="text-sm text-gray-500">{t("commission.recentActivity")}</p>
            </div>
          </div>
          {stats.countPending > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-100 rounded-full">
              <Clock className="h-3.5 w-3.5 text-yellow-600" />
              <span className="text-xs font-medium text-yellow-700">
                {stats.countPending} {t("commission.pending")}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Pending Amount Display */}
        {stats.totalPending > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {t("commission.pendingPayment")}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalPending.toLocaleString()} €
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-600 opacity-50" />
            </div>
          </div>
        )}

        {/* Recent Commissions List */}
        <div className="space-y-3">
          {recentCommissions.length === 0 ? (
            <p className="text-center text-gray-500 py-4">{t("commission.noRecentSales")}</p>
          ) : (
            <>
              {recentCommissions.map((commission) => (
                <div
                  key={commission.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm line-clamp-1">
                      {commission.propertyTitle}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">
                        {formatDate(commission.saleDate)}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs font-medium text-green-600">
                        {commission.commissionAmount.toLocaleString()} €
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    {commission.status === "paid" ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {t("commission.paid")}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        {t("commission.pending")}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* View All Link */}
        <Link
          to="/promoter/commissions"
          className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
        >
          {t("commission.viewAllCommissions")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}