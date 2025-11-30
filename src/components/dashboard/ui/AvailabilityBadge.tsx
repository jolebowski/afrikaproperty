import { cn } from "../../../lib/utils";

export type AvailabilityStatus = "available" | "reserved" | "sold";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  className?: string;
}

const availabilityConfig = {
  available: { label: "Disponible", className: "bg-blue-50 text-blue-700 border-blue-200" },
  reserved: { label: "Réservé", className: "bg-purple-50 text-purple-700 border-purple-200" },
  sold: { label: "Vendu", className: "bg-gray-100 text-gray-600 border-gray-200" },
};

export function AvailabilityBadge({ status, className }: AvailabilityBadgeProps) {
  const config = availabilityConfig[status];
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border",
      config.className,
      className
    )}>
      {config.label}
    </span>
  );
}
