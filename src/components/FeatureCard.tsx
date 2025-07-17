import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  gradient?: "primary" | "success" | "accent";
}

export const FeatureCard = ({ title, description, Icon, gradient = "primary" }: FeatureCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    success: "bg-gradient-success", 
    accent: "bg-gradient-accent"
  };

  return (
    <Card className="p-6 hover:shadow-primary transition-all duration-300 hover:scale-105 bg-gradient-card border border-primary/20">
      <div className={`w-12 h-12 rounded-lg ${gradientClasses[gradient]} flex items-center justify-center mb-4 shadow-primary`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};