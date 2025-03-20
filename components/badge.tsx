import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={
        `${className} inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors`
      }
    >
      {children}
    </span>
  )
}


