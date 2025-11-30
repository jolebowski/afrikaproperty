import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/utils";

interface DashboardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const DashboardButton = forwardRef<HTMLButtonElement, DashboardButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants
          variant === "primary" && "bg-[#C7A86A] text-white hover:bg-[#B6965A] shadow-sm hover:shadow",
          variant === "secondary" && "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
          variant === "ghost" && "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
          variant === "danger" && "bg-white text-red-600 border border-red-200 hover:bg-red-50",
          
          // Sizes
          size === "sm" && "h-8 px-3 text-xs",
          size === "md" && "h-10 px-4 text-sm",
          size === "lg" && "h-12 px-6 text-base",
          
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

DashboardButton.displayName = "DashboardButton";
