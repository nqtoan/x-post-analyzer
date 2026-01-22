"use client"

import React from "react"

interface ChatMessageProps {
  type: "user" | "bot"
  timestamp: string
  children: React.ReactNode
}

export function ChatMessage({ type, timestamp, children }: ChatMessageProps) {
  const isUser = type === "user"
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-6`}>
      <div className={`max-w-[85%] ${isUser ? "order-2" : "order-1"}`}>
        <div className={`flex items-center gap-2 mb-1.5 ${isUser ? "justify-end" : "justify-start"}`}>
          {!isUser && (
            <div className="w-6 h-6 rounded-full bg-[#fc6432] flex items-center justify-center">
              <span className="text-white text-xs font-bold">X</span>
            </div>
          )}
          <span className="text-xs text-muted-foreground">{timestamp}</span>
          {isUser && (
            <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-bold">U</span>
            </div>
          )}
        </div>
        <div
          className={`p-4 ${
            isUser
              ? "bg-foreground text-background rounded-2xl rounded-tr-sm"
              : "bg-card border border-border rounded-2xl rounded-tl-sm"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

