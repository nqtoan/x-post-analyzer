"use client"

import React from "react"
import { useState } from "react"
import { Send, Link2, FileText } from "lucide-react"

interface PostInputSectionProps {
  onAnalyze: (text: string) => void
  disabled?: boolean
  isLoading?: boolean
}

export function PostInputSection({ onAnalyze, disabled, isLoading }: PostInputSectionProps) {
  const [text, setText] = useState("")
  const [inputMode, setInputMode] = useState<"text" | "link">("text")
  const [error, setError] = useState<string | null>(null)

  const validateInput = (input: string): boolean => {
    if (!input.trim()) {
      setError("Please enter some content to analyze")
      return false
    }

    if (inputMode === "link") {
      const urlPattern = /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/.+\/status\/\d+/
      if (!urlPattern.test(input.trim())) {
        setError("Please enter a valid X (Twitter) post URL")
        return false
      }
    } else {
      if (input.trim().length < 10) {
        setError("Post text must be at least 10 characters")
        return false
      }
      if (input.trim().length > 5000) {
        setError("Post text must be less than 5000 characters")
        return false
      }
    }

    setError(null)
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateInput(text) && !disabled && !isLoading) {
      onAnalyze(text.trim())
      setText("")
    }
  }

  const handleModeChange = (mode: "text" | "link") => {
    setInputMode(mode)
    setText("")
    setError(null)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground mb-2">Analyze Your X Post</h2>
        <p className="text-sm text-muted-foreground">
          Paste your post text or share a link to get AI-powered insights based on the X recommendation algorithm.
        </p>
      </div>

      {/* Input Mode Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => handleModeChange("text")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            inputMode === "text"
              ? "bg-[#fc6432] text-white"
              : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          <FileText className="w-4 h-4" />
          Post Text
        </button>
        <button
          type="button"
          onClick={() => handleModeChange("link")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            inputMode === "link"
              ? "bg-[#fc6432] text-white"
              : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          <Link2 className="w-4 h-4" />
          Post Link
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div className="relative">
            {inputMode === "text" ? (
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  setError(null)
                }}
                placeholder="Paste your X post text here... (minimum 10 characters)"
                className={`w-full bg-background border ${
                  error ? "border-destructive" : "border-border"
                } rounded-lg p-4 text-foreground text-sm resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#fc6432]/20 placeholder:text-muted-foreground`}
                rows={6}
                disabled={disabled || isLoading}
              />
            ) : (
              <input
                type="url"
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  setError(null)
                }}
                placeholder="https://twitter.com/username/status/1234567890 or https://x.com/username/status/1234567890"
                className={`w-full bg-background border ${
                  error ? "border-destructive" : "border-border"
                } rounded-lg p-4 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[#fc6432]/20 placeholder:text-muted-foreground`}
                disabled={disabled || isLoading}
              />
            )}
            {error && (
              <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                <span>⚠</span>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!text.trim() || disabled || isLoading}
            className="w-full bg-[#fc6432] text-white py-3 px-6 text-sm font-medium hover:bg-[#e55a2d] transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Analyze Post
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

