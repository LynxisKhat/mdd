"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 transform bg-white transition duration-300 ease-in-out",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <div className="font-bold text-xl">Your Logo</div>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="mt-4 px-4">
          <ul className="space-y-4">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg font-medium text-gray-900 hover:text-gray-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-25" onClick={toggleMenu} aria-hidden="true" />}
    </div>
  )
}
