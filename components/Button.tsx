import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

interface ButtonProps {
  href?: string
  onClick?: () => void 
  children: ReactNode
  icon?: string
  className?: string
  download?: boolean
}

export function Button({ href, onClick, children, icon, className = "", download }: ButtonProps) {
  const content = (
    <>
      {children}
      {icon && <Image src={icon } height={20} width={20} alt="icon" className="w-5" />}
    </>
  )

  const buttonClasses = `font-sans flex items-center justify-between gap-3 px-8 py-3 border border-gray-300 rounded-full transition-colors duration-300 hover:bg-gray-100 ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClasses}  target="_blank" 
      rel="noopener noreferrer" download={download}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  )
}

