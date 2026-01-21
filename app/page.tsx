"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DevToolsSection } from "@/components/dev-tools-section"
import { LatestPostsSection } from "@/components/latest-posts-section"
import { Footer } from "@/components/footer"
import { NewsletterPopup } from "@/components/newsletter-popup"

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-[#fc6432] text-foreground py-2.5 px-4 text-center text-sm">
        <span className="uppercase tracking-wide text-xs font-medium">
          AI-powered post analysis with tiered scoring and recommendations.
        </span>
        <button className="ml-3 bg-foreground text-background px-3 py-1 text-xs font-medium hover:bg-foreground/90 transition-colors">
          → TRY XANAI FREE
        </button>
      </div>

      <Header />

      <main>
        <HeroSection />
        <DevToolsSection />
        <LatestPostsSection />
      </main>

      <Footer />

      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}

