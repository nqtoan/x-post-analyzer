import type { AnalysisResult } from "@/lib/types"

interface ImprovementSuggestionsProps {
  data: AnalysisResult
}

function SuggestionCard({ suggestion, priority }: { suggestion: { suggestion: string; expectedGain: number }; priority: number }) {
  return (
    <div className="border border-border bg-card p-4 mb-3">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-bold text-[#fc6432] uppercase tracking-wide">
          Priority {priority}
        </span>
        <span className="text-xs font-medium text-foreground border border-foreground px-2 py-0.5">
          +{suggestion.expectedGain} PTS
        </span>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{suggestion.suggestion}</p>
    </div>
  )
}

export function ImprovementSuggestions({ data }: ImprovementSuggestionsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-4">Improvement Suggestions</h2>
      <div>
        {data.improvements.map((suggestion) => (
          <SuggestionCard key={suggestion.priority} suggestion={suggestion} priority={suggestion.priority} />
        ))}
      </div>
    </div>
  )
}

