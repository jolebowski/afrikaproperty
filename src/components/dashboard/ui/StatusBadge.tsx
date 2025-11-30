import { cn } from "../../../lib/utils";

export type ListingStatus = "published" | "pending" | "rejected" | "expired";

interface StatusBadgeProps {
  status: ListingStatus;
  className?: string;
}

const statusConfig = {
  published: { label: "Publiée", className: "bg-green-50 text-green-700 border-green-200" },
  pending: { label: "En attente", className: "bg-amber-50 text-amber-700 border-amber-200" },
  rejected: { label: "Refusée", className: "bg-red-50 text-red-700 border-red-200" },
  expired: { label: "Expirée", className: "bg-gray-50 text-gray-600 border-gray-200" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      config.className,
      className
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", 
        status === "published" ? "bg-green-500" :
        status === "pending" ? "bg-amber-500" :
        status === "rejected" ? "bg-red-500" : "bg-gray-400"
      )} />
      {config.label}
    </span>
  );
}
