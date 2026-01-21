import type { AnalysisResult } from "@/lib/types"

interface ImprovedVersionsProps {
  data: AnalysisResult
}

function ImprovedVersionCard({ version, index }: { version: { title: string; text: string; improvements: string[] }; index: number }) {
  return (
    <div className="border border-border bg-card p-6 mb-8">
      <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-4">{version.title}</h2>
      
      <div className="mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Improved Text</span>
        <div className="mt-3 bg-muted/30 border border-border p-4">
          <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
            {version.text}
          </pre>
        </div>
      </div>

      <div className="mb-6">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">Improvement Points</span>
        <ul className="mt-3 space-y-2">
          {version.improvements.map((point, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full bg-foreground text-background py-3 text-sm font-medium hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2">
        Copy to Tweet
        <span>→</span>
      </button>
    </div>
  )
}

export function ImprovedVersions({ data }: ImprovedVersionsProps) {
  const improvedVersions = data.improvedVersions || []

  if (improvedVersions.length === 0) {
    return null
  }

  return (
    <>
      {improvedVersions.map((version, index) => (
        <ImprovedVersionCard key={index} version={version} index={index} />
      ))}
    </>
  )
}

