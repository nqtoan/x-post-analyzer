"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const products = [
  { name: "X Content Optimizer", href: "#" },
  { name: "X Thread Analyzer", href: "#" },
  { name: "X Engagement Pattern Library", href: "#" },
  { name: "X Growth Tracker", href: "#" },
  { name: "Creator Feedback Simulator", href: "#" },
]

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <a href="/" className="text-foreground font-bold text-xl tracking-tight">
            <span className="text-[#fc6432]">X</span>ANAI
          </a>
          
          {/* Navigation */}
          
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-foreground hover:text-foreground/70 transition-colors flex items-center gap-1">
            Docs
            <span className="text-xs">↗</span>
          </button>
          
          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="bg-[#fc6432] text-white px-4 py-2 text-sm font-medium hover:bg-[#e55a2d] transition-colors flex items-center gap-1.5"
              aria-expanded={isProductsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isProductsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-card border border-border shadow-lg z-50">
                <ul className="py-2" role="menu">
                  {products.map((product) => (
                    <li key={product.name} role="menuitem">
                      <a
                        href={product.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

