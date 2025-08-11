"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-maroon-800 group-hover:text-amber-600 transition-colors duration-300">
              Meher Ali
            </div>
            <div className="text-sm text-gray-600">Tent & Pakwan</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-amber-600 hover:scale-105 ${
                  pathname === item.href ? "text-amber-600 border-b-2 border-amber-600" : "text-maroon-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-maroon-800 hover:bg-maroon-700 text-white transition-all duration-300 hover:scale-105"
            >
              <Link href="tel:+92XXXXXXXXX" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-maroon-800 hover:text-amber-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-amber-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-amber-600 hover:bg-amber-50 rounded-md ${
                    pathname === item.href ? "text-amber-600 bg-amber-50" : "text-maroon-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full bg-maroon-800 hover:bg-maroon-700 text-white">
                  <Link href="tel:+92XXXXXXXXX" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
