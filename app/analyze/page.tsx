"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostInputSection } from "@/components/analyze/post-input-section"
import { AnalysisProgress } from "@/components/analyze/analysis-progress"
import { TotalScore } from "@/components/analyze/total-score"
import { ScoreBreakdown } from "@/components/analyze/score-breakdown"
import { ImprovementSuggestions } from "@/components/analyze/improvement-suggestions"
import { InsightSections } from "@/components/analyze/insight-sections"
import { AnalysisComplete } from "@/components/analyze/analysis-complete"
import type { AnalyzeResponse } from "@/lib/types"

type AnalysisStage = "idle" | "analyzing" | "scoring" | "generating" | "complete"

export default function AnalyzePage() {
  const [analysisData, setAnalysisData] = useState<AnalyzeResponse["data"] | null>(null)
  const [stage, setStage] = useState<AnalysisStage>("idle")
  const [error, setError] = useState<string | null>(null)
  const [userInput, setUserInput] = useState<string>("")

  const handleAnalyze = async (text: string) => {
    setUserInput(text)
    setError(null)
    setAnalysisData(null)
    setStage("analyzing")

    try {
      // Stage 1: Analyzing
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStage("scoring")

      // Stage 2: Scoring
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          locale: "en",
        }),
      })

      const result: AnalyzeResponse = await response.json()

      if (!result.success || !result.data) {
        setError(result.error || "Analysis failed. Please try again.")
        setStage("idle")
        return
      }

      // Stage 3: Generating
      setStage("generating")
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Complete
      setAnalysisData(result.data)
      setStage("complete")
    } catch (error) {
      setError(error instanceof Error ? error.message : "Network error. Please try again.")
      setStage("idle")
    }
  }

  const handleNewAnalysis = () => {
    setAnalysisData(null)
    setStage("idle")
    setUserInput("")
    setError(null)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#fc6432]/10 flex flex-col relative overflow-hidden">
      {/* Gradient Accent Orbs */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-[#fc6432]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#fc6432]/8 rounded-full blur-3xl pointer-events-none" />

      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            X Post Analyzer
          </h1>
          <p className="text-sm text-muted-foreground">
            AI-powered analysis based on the{" "}
            <a href="https://github.com/xai-org/x-algorithm" className="text-[#fc6432] hover:underline">
              X Recommendation Algorithm
            </a>
          </p>
        </div>

        {/* Input Section */}
        {stage === "idle" && (
          <PostInputSection 
            onAnalyze={handleAnalyze} 
            disabled={false}
            isLoading={false}
          />
        )}

        {/* Progress Section */}
        {(stage === "analyzing" || stage === "scoring" || stage === "generating") && (
          <>
            <PostInputSection 
              onAnalyze={handleAnalyze} 
              disabled={true}
              isLoading={true}
            />
            <AnalysisProgress stage={stage} />
          </>
        )}

        {/* Error Display */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-lg mb-8">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚠</span>
              <div>
                <p className="font-medium">Analysis Failed</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
            <button
              onClick={handleNewAnalysis}
              className="mt-4 text-sm text-destructive hover:underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Results Section */}
        {stage === "complete" && analysisData && (
          <div className="space-y-8">
            {/* User Input Display */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide font-secondary">
                Your Post
              </h2>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                  {userInput}
                </pre>
              </div>
            </div>

            {/* Overall Score */}
            <TotalScore data={analysisData} />

            {/* Score Breakdown */}
            <ScoreBreakdown data={analysisData} />

            {/* Improvement Suggestions */}
            <ImprovementSuggestions data={analysisData} />

            {/* Insight Sections */}
            <InsightSections data={analysisData} />

            {/* Analysis Complete CTA */}
            <AnalysisComplete data={analysisData} onNewAnalysis={handleNewAnalysis} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
