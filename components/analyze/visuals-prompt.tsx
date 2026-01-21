import type { AnalysisResult } from "@/lib/types"

interface VisualsPromptProps {
  data: AnalysisResult
}

export function VisualsPrompt({ data }: VisualsPromptProps) {
  // Use the first improved version if available
  const improvedVersion = data.improvedVersions?.[0]

  if (!improvedVersion) {
    return null
  }

  return (
    <div className="border border-border bg-card p-6 mb-8">
      <h2 className="text-lg font-bold text-foreground mb-4">Visuals & Engagement Prompt</h2>
      
      <div className="mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Improved Text</span>
        <div className="mt-3 bg-muted/30 border border-border p-4">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
            {improvedVersion.text}
          </pre>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Improvement Points</span>
        <ul className="mt-3 space-y-2">
          {improvedVersion.improvements.map((point, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-[#3b82f6] text-white py-3 text-sm font-medium hover:bg-[#2563eb] transition-colors">
        Tweet
      </button>
    </div>
  )
}

