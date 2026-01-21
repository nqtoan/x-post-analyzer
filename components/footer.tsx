export function Footer() {
  return (
    <footer className="bg-background px-4 md:px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and newsletter */}
          <div className="col-span-2">
            <a href="/" className="text-foreground font-bold text-xl tracking-tight inline-block mb-6">
              <span className="border border-foreground px-2 py-1">X/AI</span>
            </a>
            <p className="text-xs text-foreground/60 uppercase tracking-wide mb-4">
              Stay up to date with product updates
              <br />
              and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="border-b border-border bg-transparent text-sm py-2 flex-1 placeholder:text-foreground/40 focus:outline-none focus:border-foreground"
              />
              <button className="text-sm text-foreground hover:text-[#fc6432]">[ SUBSCRIBE ]</button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-medium mb-4">Product /</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="/analyze" className="hover:text-foreground">├─ Analyze</a></li>
              <li><a href="#" className="hover:text-foreground">├─ Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">└─ API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-medium mb-4">Resources /</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">├─ Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">├─ Guides</a></li>
              <li><a href="#" className="hover:text-foreground">└─ Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium mb-4">Company /</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">├─ About</a></li>
              <li><a href="#" className="hover:text-foreground">├─ Careers</a></li>
              <li><a href="#" className="hover:text-foreground">└─ Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-medium mb-4">Social /</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">├─ X</a></li>
              <li><a href="#" className="hover:text-foreground">├─ GitHub</a></li>
              <li><a href="#" className="hover:text-foreground">└─ Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-xs text-foreground/60">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>All Systems Operational</span>
          </div>
          <div>© 2025 XANAI</div>
        </div>
      </div>
    </footer>
  )
}

