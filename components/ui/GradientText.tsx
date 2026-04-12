import React from "react";

type AllowedTags = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface GradientTextProps {
  as?: AllowedTags;
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  as: Tag = "span",
  children,
  className = "",
}: GradientTextProps) {
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  );
}
