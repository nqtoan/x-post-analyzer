"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostInput } from "@/components/analyze/post-input"
import { TotalScore } from "@/components/analyze/total-score"
import { ScoreBreakdown } from "@/components/analyze/score-breakdown"
import { ImprovementSuggestions } from "@/components/analyze/improvement-suggestions"
import { VisualsPrompt } from "@/components/analyze/visuals-prompt"
import type { AnalyzeResponse } from "@/lib/types"

export default function AnalyzePage() {
  const [analysisData, setAnalysisData] = useState<AnalyzeResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">X Post Analyzer</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Analyze X Timeline Recommendation Potential
          </p>
          <a 
            href="#" 
            className="text-[#3b82f6] text-sm hover:underline"
          >
            X Recommendation Algorithm
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
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
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

            {/* Visuals & Engagement Prompt */}
            <VisualsPrompt data={analysisData.data} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

