"use client";

import * as LucideIcons from "lucide-react";

import { cn } from "@/lib/utils";

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 20 }: IconProps) {
  const IconComponent = LucideIcons[name as IconName] as React.ComponentType<{
    className?: string;
    size?: number;
  }>;

  if (!IconComponent || typeof IconComponent !== "function") {
    return <LucideIcons.Circle className={className} size={size} />;
  }

  return <IconComponent className={cn("shrink-0", className)} size={size} />;
}
