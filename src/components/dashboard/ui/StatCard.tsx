import { type LucideIcon } from "lucide-react";
import { cn } from "../../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function StatCard({ label, value, icon: Icon, trend, trendUp, className }: StatCardProps) {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-300",
      "hover:shadow-lg hover:scale-[1.02] hover:border-[#C7A86A]/30",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-[#C7A86A]/10 text-[#C7A86A]">
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className={cn("text-xs font-medium px-2 py-1 rounded-full", 
            trendUp ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
          )}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">{value}</h3>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
      </div>
    </div>
  );
}
