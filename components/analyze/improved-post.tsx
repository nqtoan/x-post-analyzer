"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"
import type { AnalysisResult } from "@/lib/types"

interface ImprovedPostProps {
  data: AnalysisResult
}

export function ImprovedPost({ data }: ImprovedPostProps) {
  const [copied, setCopied] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const improvedVersions = data.improvedVersions || []
  const currentVersion = improvedVersions[selectedIndex]

  if (!currentVersion) {
    return null
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentVersion.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <p className="text-sm text-foreground mb-3">
        Here&apos;s an optimized version of your post that should perform better:
      </p>
      
      {improvedVersions.length > 1 && (
        <div className="mb-3 flex gap-2 overflow-x-auto pb-2">
          {improvedVersions.map((version, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedIndex === idx
                  ? "bg-[#fc6432] text-white"
                  : "bg-muted/30 text-foreground hover:bg-muted/50"
              }`}
            >
              {version.title}
            </button>
          ))}
        </div>
      )}
      
      <div className="bg-muted/30 border border-border rounded-lg p-4 mb-3">
        <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
          {currentVersion.text}
        </pre>
      </div>
      
      {currentVersion.improvements && currentVersion.improvements.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-2">Key improvements:</p>
          <ul className="space-y-1">
            {currentVersion.improvements.map((improvement, idx) => (
              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                <span>•</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex items-center gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 bg-[#fc6432] text-white py-2.5 text-sm font-medium hover:bg-[#e55a2d] transition-colors rounded-lg flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy to Clipboard
            </>
          )}
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(currentVersion.text)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-foreground text-background py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors rounded-lg text-center"
        >
          Post to X
        </a>
      </div>
    </div>
  )
}

