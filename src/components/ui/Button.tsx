import * as React from "react";
import { cn } from "../../lib/utils";

// Note: I am not using radix-ui/react-slot or class-variance-authority in the package.json yet.
// I should probably stick to simple props or install them.
// The user didn't ask for cva/radix, so I will implement a simpler version without extra deps for now to avoid "package not found" errors if I didn't install them.
// Wait, I can install them. But to be safe and quick, I'll write standard React components first.
// Actually, I'll use standard props for now.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover",
      secondary: "bg-secondary text-white hover:bg-secondary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-accent hover:text-accent-foreground hover:bg-gray-100",
    };

    const sizes = {
      sm: "h-9 rounded-md px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
