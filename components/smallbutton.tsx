import type React from "react"
import { cn } from "../lib/utils"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
}

export const ButtonNew = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", size = "default", asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50",
          variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "outline" && "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
          variant === "ghost" && "bg-transparent hover:bg-gray-100 text-gray-700",
          variant === "link" && "bg-transparent underline-offset-4 hover:underline text-blue-600",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-8 px-3 text-sm",
          size === "lg" && "h-12 px-6 text-lg",
          size === "icon" && "h-10 w-10",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

ButtonNew.displayName = "ButtonNew"


