"use client"

import { Copy, Check, ExternalLink } from "lucide-react"
import { useState } from "react"
import type { AnalysisResult } from "@/lib/types"

interface AnalysisCompleteProps {
  data: AnalysisResult
  onNewAnalysis: () => void
}

export function AnalysisComplete({ data, onNewAnalysis }: AnalysisCompleteProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const improvedVersions = data.improvedVersions || []

  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-[#fc6432] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Analysis Complete</h2>
        <p className="text-sm text-muted-foreground">
          Your post has been analyzed. Review the insights below and take action.
        </p>
      </div>

      {/* Next Actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={onNewAnalysis}
          className="bg-foreground text-background py-3 px-6 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-lg flex items-center justify-center gap-2"
        >
          Analyze Another Post
          <span>→</span>
        </button>
        <a
          href="/"
          className="bg-muted text-foreground py-3 px-6 text-sm font-medium hover:bg-muted/80 transition-colors rounded-lg flex items-center justify-center gap-2"
        >
          Back to Home
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Quick Copy Actions */}
      {improvedVersions.length > 0 && (
        <div className="border-t border-border pt-6">
          <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {improvedVersions.slice(0, 3).map((version, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-muted/30 border border-border rounded-lg p-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{version.title}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {version.text.substring(0, 60)}...
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(version.text, idx)}
                  className="flex-shrink-0 bg-[#fc6432] text-white px-4 py-2 text-xs font-medium hover:bg-[#e55a2d] transition-colors rounded-lg flex items-center gap-2"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

