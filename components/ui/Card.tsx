import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-lg hover:shadow-green/10 cursor-default"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
