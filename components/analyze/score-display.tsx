"use client"

import type { AnalysisResult } from "@/lib/types"

interface ScoreDisplayProps {
  data: AnalysisResult
}

export function ScoreDisplay({ data }: ScoreDisplayProps) {
  const { totalScore, grade } = data
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (totalScore / 100) * circumference

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "S": return "bg-purple-500"
      case "A": return "bg-green-500"
      case "B": return "bg-green-400"
      case "C": return "bg-yellow-500"
      case "D": return "bg-orange-500"
      case "F": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "#a855f7"
    if (score >= 80) return "#22c55e"
    if (score >= 60) return "#84cc16"
    if (score >= 40) return "#eab308"
    if (score >= 20) return "#f97316"
    return "#ef4444"
  }

  return (
    <div className="flex items-center gap-6">
      <div className="relative w-24 h-24 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="40" stroke="#e5e5e5" strokeWidth="6" fill="none" />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke={getScoreColor(totalScore)}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{totalScore}</span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">
          Your post scored <strong>{totalScore}/100</strong> for algorithm optimization.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Grade:</span>
          <span className={`${getGradeColor(grade)} text-white text-xs font-medium px-2.5 py-0.5 rounded-full`}>
            {grade}
          </span>
        </div>
      </div>
    </div>
  )
}

