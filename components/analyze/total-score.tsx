import type { AnalysisResult } from "@/lib/types"

interface TotalScoreProps {
  data: AnalysisResult
}

export function TotalScore({ data }: TotalScoreProps) {
  const { totalScore, grade } = data
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (totalScore / 100) * circumference

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "S":
        return "bg-purple-500"
      case "A":
        return "bg-green-500"
      case "B":
        return "bg-green-400"
      case "C":
        return "bg-yellow-500"
      case "D":
        return "bg-orange-500"
      case "F":
        return "bg-red-500"
      default:
        return "bg-gray-500"
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
    <div className="border border-border bg-card p-8 mb-8">
      <h2 className="text-lg font-bold text-foreground text-center mb-6">Total Score</h2>
      
      <div className="flex flex-col items-center">
        {/* Circular Progress */}
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke="#e5e5e5"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r="45"
              stroke={getScoreColor(totalScore)}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500"
            />
          </svg>
          {/* Score text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{totalScore}</span>
            <span className="text-sm text-muted-foreground">/ 100</span>
          </div>
        </div>

        {/* Grade */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Grade:</span>
          <span className={`${getGradeColor(grade)} text-white text-sm font-medium px-3 py-0.5 rounded-full`}>
            {grade}
          </span>
        </div>
      </div>
    </div>
  )
}

