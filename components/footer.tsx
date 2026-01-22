export function Footer() {
  return (
    <footer className="bg-background px-4 md:px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo and description */}
          <div className="max-w-md">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/xanai-logo.png" 
                alt="XANAI" 
                className="h-8 w-auto"
              />
              <span className="text-foreground font-bold text-xl tracking-tight">
                <span className="text-[#fc6432]">X</span>ANAI
              </span>
            </a>
            <p className="text-sm text-foreground/60 leading-relaxed">
              AI-powered X post analysis. Understand the algorithm, optimize your content, and grow your audience with data-driven insights.
            </p>
          </div>

          {/* Social */}
          <div>
            <span className="text-xs text-foreground/50 mb-3 block">Social /</span>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="https://x.com/xanaifun" className="hover:text-foreground transition-colors">├─ X</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">├─ GitHub</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">└─ Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        
      </div>
    </footer>
  )
}
