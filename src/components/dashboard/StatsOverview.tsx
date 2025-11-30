import { Eye, FileCheck, FileClock, FileText, FileX, MessageSquare } from "lucide-react";
import { StatCard } from "./ui/StatCard";

export function StatsOverview() {
  const stats = [
    { label: "Annonces publiées", value: 12, icon: FileCheck, trend: "+2", trendUp: true },
    { label: "En attente", value: 3, icon: FileClock },
    { label: "Refusées", value: 1, icon: FileX },
    { label: "Expirées", value: 0, icon: FileText },
    { label: "Vues totales", value: "24.5k", icon: Eye, trend: "+12%", trendUp: true },
    { label: "Leads reçus", value: 148, icon: MessageSquare, trend: "+5%", trendUp: true },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
          trendUp={stat.trendUp}
        />
      ))}
    </div>
  );
}
