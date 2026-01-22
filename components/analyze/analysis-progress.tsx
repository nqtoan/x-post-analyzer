"use client"

interface AnalysisProgressProps {
  stage: "analyzing" | "scoring" | "generating" | "complete"
}

const stages = [
  { key: "analyzing", label: "Analyzing post content", description: "Processing text and extracting key signals" },
  { key: "scoring", label: "Calculating engagement scores", description: "Evaluating against X recommendation algorithm" },
  { key: "generating", label: "Generating insights", description: "Creating improvement suggestions and optimized versions" },
]

export function AnalysisProgress({ stage }: AnalysisProgressProps) {
  const currentStageIndex = stages.findIndex(s => s.key === stage)
  
  return (
    <div className="bg-card border border-border rounded-lg p-8 mb-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {stages.map((s, index) => {
            const isActive = index === currentStageIndex
            const isComplete = index < currentStageIndex
            const isPending = index > currentStageIndex

            return (
              <div key={s.key} className="flex items-start gap-4">
                {/* Status Indicator */}
                <div className="flex-shrink-0 mt-1">
                  {isComplete ? (
                    <div className="w-8 h-8 rounded-full bg-[#fc6432] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : isActive ? (
                    <div className="w-8 h-8 rounded-full bg-[#fc6432] flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted border-2 border-border" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-sm font-medium mb-1 ${
                    isActive ? "text-foreground" : isComplete ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {s.label}
                  </h3>
                  <p className={`text-xs ${
                    isActive ? "text-muted-foreground" : "text-muted-foreground/60"
                  }`}>
                    {s.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

