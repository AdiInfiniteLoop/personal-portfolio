import type React from "react"
import { cn } from "../lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-gray-100 text-gray-800",
        variant === "outline" && "border border-gray-300 text-gray-700",
        className,
      )}
    >
      {children}
    </span>
  )
}


