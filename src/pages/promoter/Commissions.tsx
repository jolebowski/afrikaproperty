import { ArrowLeft, DollarSign, Download, Filter, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommissionTable from "../../components/commission/CommissionTable";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { useToast } from "../../components/ui/Toast";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "../../i18n/I18nProvider";
import type { Commission } from "../../types";

export default function Commissions() {
  const { t } = useTranslation();
  const { agency } = useAuth();
  const { addToast } = useToast();
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "paid">("all");
  const [stats, setStats] = useState({
    totalCommissions: 0,
    totalPending: 0,
    totalPaid: 0,
    countPending: 0,
    countPaid: 0,
    countTotal: 0,
  });

  useEffect(() => {
    // Load commissions for the current agency from persistent store
    if (agency) {
      // Initialize store if needed (this makes sure mock data is present first time)
      import('../../utils/commissionStore').then(mod => {
          mod.initCommissionStore();
          
          const agencyCommissions = mod.getStoredCommissions(agency.id);
          setCommissions(agencyCommissions);

          // Calculate stats locally based on stored data
            const pendingCommissions = agencyCommissions.filter(c => c.status === "pending");
            const paidCommissions = agencyCommissions.filter(c => c.status === "paid");

            const totalPending = pendingCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
            const totalPaid = paidCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
            const totalCommissions = totalPending + totalPaid;

            setStats({
                totalCommissions,
                totalPending,
                totalPaid,
                countPending: pendingCommissions.length,
                countPaid: paidCommissions.length,
                countTotal: agencyCommissions.length,
            });
      });
    }
  }, [agency]);

  const handleUpdateStatus = (commissionId: string, status: "pending" | "paid") => {
     import('../../utils/commissionStore').then(mod => {
        mod.updateCommissionStatus(commissionId, status);
        
        // Refresh data
        if (agency) {
            const updated = mod.getStoredCommissions(agency.id);
            setCommissions(updated);
             // Re-calculate stats
            const pendingCommissions = updated.filter(c => c.status === "pending");
            const paidCommissions = updated.filter(c => c.status === "paid");
            const totalPending = pendingCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
            const totalPaid = paidCommissions.reduce((sum, c) => sum + c.commissionAmount, 0);
            const totalCommissions = totalPending + totalPaid;

            setStats({
                totalCommissions,
                totalPending,
                totalPaid,
                countPending: pendingCommissions.length,
                countPaid: paidCommissions.length,
                countTotal: updated.length,
            });
        }
     });

    addToast(
      status === "paid"
        ? t("commission.markedAsPaid")
        : t("commission.markedAsPending"),
      "success"
    );
  };

  const filteredCommissions = commissions.filter((commission) => {
    if (filter === "all") return true;
    return commission.status === filter;
  });

  const handleExportCSV = () => {
    // Simple CSV export
    const headers = [
      "Propriété",
      "Prix de vente",
      "Taux",
      "Commission",
      "Date de vente",
      "Statut",
      "Date de paiement",
      "Méthode de paiement",
    ];

    const rows = commissions.map((c) => [
      c.propertyTitle,
      c.salePrice,
      c.commissionRate + "%",
      c.commissionAmount,
      c.saleDate,
      c.status === "paid" ? "Payée" : "En attente",
      c.paidDate || "",
      c.paymentMethod || "",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `commissions_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addToast(t("commission.exportSuccess"), "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20"> 
      <DashboardHeader promoterName={agency?.name || "Promoteur"} />

      <main className="container-custom py-8">
        
        {/* Back Link Style (CreateListing style) */}
        <div className="mb-6 flex items-center justify-between">
            <Link to="/promoter/dashboard" className="inline-flex items-center text-gray-500 hover:text-[#C7A86A] transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("common.backToDashboard") || "Retour au tableau de bord"}
            </Link>
        </div>

        <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header inside the card */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-gray-900">
                        {t("commission.myCommissions")}
                        </h1>
                        <p className="text-sm text-gray-600 mt-1">
                        {t("commission.trackYourEarnings")}
                        </p>
                    </div>
                    <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                    <Download className="h-4 w-4" />
                    {t("commission.export")}
                    </button>
                </div>

                {/* Main Content inside card */}
                <div className="p-6">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-600">{t("commission.totalSales")}</p>
                          <TrendingUp className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{stats.countTotal}</p>
                        <p className="text-xs text-gray-500 mt-1">{t("commission.completedSales")}</p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-600">{t("commission.totalEarned")}</p>
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-2xl font-bold text-green-600">
                          {stats.totalCommissions.toLocaleString()} €
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{t("commission.allTime")}</p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-600">{t("commission.pending")}</p>
                          <div className="h-2 w-2 bg-yellow-400 rounded-full animate-pulse" />
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">
                          {stats.totalPending.toLocaleString()} €
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {stats.countPending} {t("commission.transactions")}
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-600">{t("commission.received")}</p>
                          <div className="h-2 w-2 bg-green-400 rounded-full" />
                        </div>
                        <p className="text-2xl font-bold text-green-600">
                          {stats.totalPaid.toLocaleString()} €
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {stats.countPaid} {t("commission.transactions")}
                        </p>
                      </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">{t("common.filter")}:</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setFilter("all")}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            filter === "all"
                              ? "bg-primary-100 text-primary-700 font-medium"
                              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                          }`}
                        >
                          {t("common.all")} ({stats.countTotal})
                        </button>
                        <button
                          onClick={() => setFilter("pending")}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            filter === "pending"
                              ? "bg-yellow-100 text-yellow-700 font-medium"
                              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                          }`}
                        >
                          {t("commission.pending")} ({stats.countPending})
                        </button>
                        <button
                          onClick={() => setFilter("paid")}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                            filter === "paid"
                              ? "bg-green-100 text-green-700 font-medium"
                              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                          }`}
                        >
                          {t("commission.paid")} ({stats.countPaid})
                        </button>
                      </div>
                    </div>

                    {/* Commission Table */}
                    <CommissionTable
                      commissions={filteredCommissions}
                      onUpdateStatus={handleUpdateStatus}
                    />
                </div> 
            </div> 
        </div> 
      </main>
    </div>
  );
}