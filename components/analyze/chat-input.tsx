"use client"

import React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

interface ChatInputProps {
  onSend: (text: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() && !disabled) {
      onSend(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-end gap-3 bg-card border border-border p-3 rounded-2xl">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your X post here to analyze..."
          className="flex-1 bg-transparent text-foreground text-sm resize-none min-h-[48px] max-h-[120px] focus:outline-none placeholder:text-muted-foreground"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSubmit(e)
            }
          }}
        />
        <button
          type="submit"
          disabled={!text.trim() || disabled}
          className="bg-[#fc6432] text-white p-3 rounded-xl hover:bg-[#e55a2d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Analyze post"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Press Enter to analyze or Shift+Enter for new line
      </p>
    </form>
  )
}

