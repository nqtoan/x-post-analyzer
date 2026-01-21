"use client"

import { useState } from "react"
import { getGraphemeCount, MAX_TWEET_LENGTH } from "@/lib/utils"
import type { AnalyzeResponse } from "@/lib/types"

interface PostInputProps {
  onAnalyze: (data: AnalyzeResponse) => void
  onError: (error: string) => void
  onAnalyzeStart: () => void
  isLoading: boolean
}

const samplePost = `– Wolf of Wall Street vibes
– Same team behind The Heist
– Super early

High risk on all of these.

Some will win, some will lose.

They can collapse quickly, so act smart and move fast.`

export function PostInput({ onAnalyze, onError, onAnalyzeStart, isLoading }: PostInputProps) {
  const [text, setText] = useState(samplePost)
  const charCount = getGraphemeCount(text)

  const handleAnalyze = async () => {
    if (!text || text.trim().length === 0) {
      onError("Text is required")
      return
    }

    if (charCount > MAX_TWEET_LENGTH) {
      onError("Text exceeds maximum length")
      return
    }

    onAnalyzeStart()

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          locale: "en", // Default to English, can be made configurable
        }),
      })

      const result: AnalyzeResponse = await response.json()

      if (!result.success) {
        onError(result.error || "Analysis failed")
        return
      }

      onAnalyze(result)
    } catch (error) {
      onError(error instanceof Error ? error.message : "Network error")
    }
  }

  return (
    <div className="mb-8">
      <div className="border border-border bg-card">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
          className="w-full p-4 bg-transparent text-foreground text-sm resize-none min-h-[160px] focus:outline-none disabled:opacity-50"
          placeholder="Enter your X post text here..."
        />
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className={`text-sm ${charCount > MAX_TWEET_LENGTH ? "text-red-500" : "text-muted-foreground"}`}>
          {charCount}/{MAX_TWEET_LENGTH}
        </span>
        <button
          onClick={handleAnalyze}
          disabled={isLoading || charCount > MAX_TWEET_LENGTH || text.trim().length === 0}
          className="bg-[#3b82f6] text-white px-6 py-2 text-sm font-medium hover:bg-[#2563eb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  )
}

