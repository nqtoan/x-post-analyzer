"use client"

export function Header() {
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
          <button className="bg-[#fc6432] text-white px-4 py-2 text-sm font-medium hover:bg-[#e55a2d] transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}

