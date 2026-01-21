"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { DevToolsSection } from "@/components/dev-tools-section"
import { LatestPostsSection } from "@/components/latest-posts-section"
import { Footer } from "@/components/footer"

export default function HiroLandingPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const textToCopy = "soon"
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <div className="bg-[#fc6432] text-foreground py-2.5 px-4 text-center text-sm">
        <span className="uppercase tracking-wide text-xs font-medium">
          $XANA is LIVE : soon     
        </span>
        <button 
          onClick={handleCopy}
          className="ml-3 bg-foreground text-background px-3 py-1 text-xs font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-1.5"
          aria-label={copied ? "Link copied" : "Copy CA $XANA"}
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              COPIED
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              COPY CA
            </>
          )}
        </button>
      </div>

      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <DevToolsSection />
        <LatestPostsSection />
      </main>

      <Footer />
    </div>
  )
}

