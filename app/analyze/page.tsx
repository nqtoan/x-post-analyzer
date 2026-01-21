"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostInput } from "@/components/analyze/post-input"
import { TotalScore } from "@/components/analyze/total-score"
import { ScoreBreakdown } from "@/components/analyze/score-breakdown"
import { ImprovementSuggestions } from "@/components/analyze/improvement-suggestions"
import { ImprovedVersions } from "@/components/analyze/improved-versions"
import type { AnalyzeResponse } from "@/lib/types"

export default function AnalyzePage() {
  const [analysisData, setAnalysisData] = useState<AnalyzeResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleAnalyze = (data: AnalyzeResponse) => {
    setAnalysisData(data)
    setError(null)
    setIsLoading(false)
  }

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setIsLoading(false)
  }

  const handleAnalyzeStart = () => {
    setIsLoading(true)
    setError(null)
  }

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

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">X Post Analyzer</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Analyze X Timeline Recommendation Potential
          </p>
          <a 
            href="/analyze" 
            className="text-foreground/70 hover:text-foreground transition-colors text-sm inline-flex items-center gap-1 mt-1"
          >
            View X Recommendation Algorithm →
          </a>
        </div>

        {/* Post Input */}
        <PostInput 
          onAnalyze={handleAnalyze} 
          onError={handleError}
          onAnalyzeStart={handleAnalyzeStart}
          isLoading={isLoading}
        />

        {/* Error Display */}
        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm">
            {error}
          </div>
        )}

        {/* Analysis Results */}
        {analysisData?.success && analysisData.data && (
          <>
            {/* Total Score */}
            <TotalScore data={analysisData.data} />

            {/* Score Breakdown */}
            <ScoreBreakdown data={analysisData.data} />

            {/* Improvement Suggestions */}
            <ImprovementSuggestions data={analysisData.data} />

            {/* Improved Versions - Threaded Story, Cautionary Tale, Engagement Suggestions */}
            <ImprovedVersions data={analysisData.data} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

