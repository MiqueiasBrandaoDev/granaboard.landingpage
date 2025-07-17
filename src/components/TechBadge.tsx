import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "outline";
}

export const TechBadge = ({ children, variant = "outline" }: TechBadgeProps) => {
  const variantClasses = {
    primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
    success: "bg-success/10 text-success border-success/20 hover:bg-success/20",
    outline: "border-primary/30 text-primary hover:bg-primary/10"
  };

  return (
    <Badge 
      variant="outline" 
      className={`${variantClasses[variant]} transition-colors duration-200 px-3 py-1`}
    >
      {children}
    </Badge>
  );
};