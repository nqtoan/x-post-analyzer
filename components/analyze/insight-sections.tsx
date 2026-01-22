"use client"

import type { AnalysisResult } from "@/lib/types"

interface InsightSectionsProps {
  data: AnalysisResult
}

export function InsightSections({ data }: InsightSectionsProps) {
  const { improvedVersions } = data

  // Map improvedVersions to insight sections
  // Typically: [0] = Threaded Story with Context, [1] = Cautionary Tale, [2] = Engagement Suggestions
  const threadedStory = improvedVersions.find(v => 
    v.title.toLowerCase().includes("thread") || 
    v.title.toLowerCase().includes("context") ||
    v.title.toLowerCase().includes("story")
  ) || improvedVersions[0]

  const cautionaryTale = improvedVersions.find(v => 
    v.title.toLowerCase().includes("caution") || 
    v.title.toLowerCase().includes("warning") ||
    v.title.toLowerCase().includes("risk")
  ) || improvedVersions[1]

  const engagementSuggestions = improvedVersions.find(v => 
    v.title.toLowerCase().includes("engagement") || 
    v.title.toLowerCase().includes("suggestion") ||
    v.title.toLowerCase().includes("improve")
  ) || improvedVersions[2]

  return (
    <div className="space-y-8">
      {/* Threaded Story with Context */}
      {threadedStory && (
        <section className="bg-card border border-border rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-2">Threaded Story with Context</h3>
            <p className="text-sm text-muted-foreground">
              An optimized version structured as a thread with additional context to improve engagement.
            </p>
          </div>
          
          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
              {threadedStory.text}
            </pre>
          </div>

          {threadedStory.improvements && threadedStory.improvements.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Key Improvements</p>
              <ul className="space-y-1.5">
                {threadedStory.improvements.map((improvement, idx) => (
                  <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-[#fc6432] mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Cautionary Tale */}
      {cautionaryTale && cautionaryTale !== threadedStory && (
        <section className="bg-card border border-border rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-2">Cautionary Tale</h3>
            <p className="text-sm text-muted-foreground">
              A version that emphasizes risks and warnings while maintaining engagement potential.
            </p>
          </div>
          
          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
              {cautionaryTale.text}
            </pre>
          </div>

          {cautionaryTale.improvements && cautionaryTale.improvements.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Key Improvements</p>
              <ul className="space-y-1.5">
                {cautionaryTale.improvements.map((improvement, idx) => (
                  <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-[#fc6432] mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Engagement Suggestions */}
      {engagementSuggestions && engagementSuggestions !== threadedStory && engagementSuggestions !== cautionaryTale && (
        <section className="bg-card border border-border rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-2">Engagement Suggestions</h3>
            <p className="text-sm text-muted-foreground">
              A version optimized specifically for maximum engagement and reach.
            </p>
          </div>
          
          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
              {engagementSuggestions.text}
            </pre>
          </div>

          {engagementSuggestions.improvements && engagementSuggestions.improvements.length > 0 && (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Key Improvements</p>
              <ul className="space-y-1.5">
                {engagementSuggestions.improvements.map((improvement, idx) => (
                  <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-[#fc6432] mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Fallback: Show all versions if mapping didn't work */}
      {improvedVersions.length > 0 && !threadedStory && !cautionaryTale && !engagementSuggestions && (
        <div className="space-y-6">
          {improvedVersions.map((version, idx) => (
            <section key={idx} className="bg-card border border-border rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">{version.title}</h3>
              </div>
              
              <div className="bg-muted/30 border border-border rounded-lg p-4 mb-4">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                  {version.text}
                </pre>
              </div>

              {version.improvements && version.improvements.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Key Improvements</p>
                  <ul className="space-y-1.5">
                    {version.improvements.map((improvement, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-[#fc6432] mt-1">•</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

