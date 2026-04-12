import React from "react";

interface BadgeProps {
  variant?: "green" | "purple" | "amber";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "green",
  children,
  className = "",
}: BadgeProps) {
  const variants = {
    green:
      "bg-green/15 text-green border border-green/30",
    purple:
      "bg-purple/15 text-purple border border-purple/30",
    amber:
      "bg-amber-400/15 text-amber-400 border border-amber-400/30",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-body font-medium text-xs px-3 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
