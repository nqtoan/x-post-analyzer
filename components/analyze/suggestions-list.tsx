import type { AnalysisResult } from "@/lib/types"

interface SuggestionsListProps {
  data: AnalysisResult
}

export function SuggestionsList({ data }: SuggestionsListProps) {
  return (
    <div>
      <p className="text-sm text-foreground mb-3">Here are my top suggestions to improve your score:</p>
      <div className="space-y-2">
        {data.improvements.map((s, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-muted/30 border border-border rounded-lg p-3">
            <span className="flex-shrink-0 w-6 h-6 bg-[#fc6432] text-white text-xs font-bold rounded-full flex items-center justify-center">
              {s.priority}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{s.suggestion}</p>
            </div>
            <span className="flex-shrink-0 text-xs font-medium text-foreground bg-foreground/10 px-2 py-1 rounded">
              +{s.expectedGain} pts
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

