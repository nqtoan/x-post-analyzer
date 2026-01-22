"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatMessage } from "@/components/analyze/chat-message"
import { ChatInput } from "@/components/analyze/chat-input"
import { ScoreDisplay } from "@/components/analyze/score-display"
import { BreakdownCards } from "@/components/analyze/breakdown-cards"
import { SuggestionsList } from "@/components/analyze/suggestions-list"
import { ImprovedPost } from "@/components/analyze/improved-post"
import type { AnalyzeResponse } from "@/lib/types"

interface Message {
  id: string
  type: "user" | "bot"
  content: "text" | "score" | "breakdown" | "suggestions" | "improved"
  text?: string
  data?: AnalyzeResponse["data"]
  timestamp: string
}

export default function AnalyzePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "text",
      text: "Welcome to XANAI! I'm your AI-powered X post analyzer. Paste your post below and I'll analyze its potential performance based on the X recommendation algorithm.",
      timestamp: "Just now"
    }
  ])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (text: string) => {
    const now = new Date()
    const timestamp = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: "user",
      content: "text",
      text,
      timestamp
    }])

    setIsAnalyzing(true)

    // Add analyzing message
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "text",
        text: "Analyzing your post against the X recommendation algorithm...",
        timestamp
      }])
    }, 500)

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.trim(),
          locale: "en",
        }),
      })

      const result: AnalyzeResponse = await response.json()

      if (!result.success || !result.data) {
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          type: "bot",
          content: "text",
          text: result.error || "Analysis failed. Please try again.",
          timestamp
        }])
        setIsAnalyzing(false)
        return
      }

      // Add score message
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 2).toString(),
          type: "bot",
          content: "score",
          data: result.data,
          timestamp
        }])
      }, 1500)

      // Add breakdown message
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 3).toString(),
          type: "bot",
          content: "breakdown",
          data: result.data,
          timestamp
        }])
      }, 2500)

      // Add suggestions message
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 4).toString(),
          type: "bot",
          content: "suggestions",
          data: result.data,
          timestamp
        }])
      }, 3500)

      // Add improved post message
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 5).toString(),
          type: "bot",
          content: "improved",
          data: result.data,
          timestamp
        }])
        setIsAnalyzing(false)
      }, 4500)
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 2).toString(),
        type: "bot",
        content: "text",
        text: error instanceof Error ? error.message : "Network error. Please try again.",
        timestamp
      }])
      setIsAnalyzing(false)
    }
  }

  const renderMessageContent = (message: Message) => {
    if (!message.data) return null

    switch (message.content) {
      case "text":
        return <p className="text-sm">{message.text}</p>
      case "score":
        return <ScoreDisplay data={message.data} />
      case "breakdown":
        return <BreakdownCards data={message.data} />
      case "suggestions":
        return <SuggestionsList data={message.data} />
      case "improved":
        return <ImprovedPost data={message.data} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-[#fc6432]/10 flex flex-col relative overflow-hidden">
      {/* Gradient Accent Orbs */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-[#fc6432]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#fc6432]/8 rounded-full blur-3xl pointer-events-none" />

      <Header />

      {/* Chat Container */}
      <main className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 py-6 relative z-10">
        {/* Chat Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">X Post Analyzer</h1>
          <p className="text-sm text-muted-foreground mt-1">
            AI-powered analysis based on the{" "}
            <a href="https://github.com/xai-org/x-algorithm" className="text-[#fc6432] hover:underline">
              X Recommendation Algorithm
            </a>
          </p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              type={message.type}
              timestamp={message.timestamp}
            >
              {renderMessageContent(message)}
            </ChatMessage>
          ))}
          
          {isAnalyzing && (
            <ChatMessage type="bot" timestamp="">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#fc6432] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-[#fc6432] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-[#fc6432] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-sm text-muted-foreground">Analyzing...</span>
              </div>
            </ChatMessage>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent pt-4">
          <ChatInput onSend={handleSend} disabled={isAnalyzing} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
