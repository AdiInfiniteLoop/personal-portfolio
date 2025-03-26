"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./Button"

import Logo from "@/public/Logo.png"
import downloadIcon from "../assets/download.svg"
import menuIcon from "../assets/hamburger.svg"
import closeIcon from "../assets/cross.svg"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight

      if (currentScrollY > lastScrollY || currentScrollY > windowHeight) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)

    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  const toggleSidebar = (open: boolean) => {
    if (sidebarRef.current) {
      sidebarRef.current.style.transform = open ? "translateX(0)" : "translateX(100%)"
    }
  }

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between shadow-sm md:shadow-none z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src={Logo || "/placeholder.svg"} alt="Your Name" className="w-40 cursor-pointer" />
      </Link>
      <ul className="hidden lg:flex items-center border rounded-full px-8 py-4 gap-8 dark:border-gray-700">
        {navItems.map((item) => (
          <li key={item.href} className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Button  className="p-2 border-none"></Button>
        <Button
          href="https://drive.google.com/file/d/1ReUirxZCk3QQW2FloXTn2U1ggVipRCPB/view?usp=sharing"
          icon={downloadIcon}
          className="hidden lg:flex font-Ovo"
          download
        >
          Resume
        </Button>
        <Button onClick={() => toggleSidebar(true)} className="block lg:hidden p-2 border-none">
          <Image src={menuIcon || "/placeholder.svg"} height={24} width={24} alt="Menu" />
        </Button>
      </div>

      {/* Mobile sidebar */}
      <div
        ref={sidebarRef}
        className="lg:hidden fixed right-0 top-0 bottom-0 w-full bg-white dark:bg-gray-900 transition-transform duration-300 transform translate-x-full z-50"
      >
        <Button onClick={() => toggleSidebar(false)} className="absolute right-8 top-8 p-2 border-none">
          <Image src={closeIcon || "/placeholder.svg"} alt="Close" className="w-6" />
        </Button>
        <ul className="flex flex-col gap-6 p-8 mt-20 bg-white  h-screen">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="font-Outfit text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Link href={item.href} onClick={() => toggleSidebar(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              href={"https://drive.google.com/file/d/1ReUirxZCk3QQW2FloXTn2U1ggVipRCPB/view?usp=sharing"}
              icon={downloadIcon}
              className="w-full justify-center font-Ovo"
              download
            >
              Resume
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

