"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { AnalysisResult } from "@/lib/types"

interface BreakdownCardsProps {
  data: AnalysisResult
}

interface ScoreItem {
  name: string
  score: number
  maxScore: number
  reason: string
}

interface BreakdownSection {
  title: string
  score: number
  maxScore: number
  items?: ScoreItem[]
  isPenalty?: boolean
}

function ProgressBar({ score, maxScore, isPenalty }: { score: number; maxScore: number; isPenalty?: boolean }) {
  const percentage = isPenalty ? 0 : (score / maxScore) * 100
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ${isPenalty ? "bg-red-500" : "bg-[#84cc16]"}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  )
}

function BreakdownCard({ section }: { section: BreakdownSection }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="bg-muted/30 border border-border rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => section.items && setIsOpen(!isOpen)}
        className="w-full p-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-medium text-foreground">{section.title}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${section.isPenalty ? "text-red-500" : "text-[#3b82f6]"}`}>
            {section.isPenalty ? section.score : `${section.score}/${section.maxScore}`}
          </span>
          {section.items && (
            isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {isOpen && section.items && (
        <div className="px-3 pb-3 space-y-3">
          {section.items.map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.score}/{item.maxScore}</span>
              </div>
              <ProgressBar score={item.score} maxScore={item.maxScore} />
              <p className="text-xs text-muted-foreground mt-2">{item.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function BreakdownCards({ data }: BreakdownCardsProps) {
  const { breakdown, penalties } = data

  // Calculate section scores
  const coreEngagementScore = 
    breakdown.replyPotential.score +
    breakdown.retweetPotential.score +
    breakdown.favoritePotential.score +
    breakdown.quotePotential.score
  const coreEngagementMax = 60

  const extendedEngagementScore =
    breakdown.dwellTime.score +
    breakdown.continuousDwellTime.score +
    breakdown.clickPotential.score +
    breakdown.photoExpand.score +
    breakdown.videoView.score +
    breakdown.quotedClick.score
  const extendedEngagementMax = 25

  const relationshipBuildingScore =
    breakdown.profileClick.score +
    breakdown.followPotential.score +
    breakdown.sharePotential.score +
    breakdown.shareViaDM.score +
    breakdown.shareViaCopyLink.score
  const relationshipBuildingMax = 15

  const totalPenalty =
    penalties.notInterested.score +
    penalties.muteRisk.score +
    penalties.blockRisk.score +
    penalties.reportRisk.score

  const breakdownData: BreakdownSection[] = [
    {
      title: "Core Engagement",
      score: coreEngagementScore,
      maxScore: coreEngagementMax,
      items: [
        {
          name: "Reply Potential",
          score: breakdown.replyPotential.score,
          maxScore: breakdown.replyPotential.max,
          reason: breakdown.replyPotential.reason,
        },
        {
          name: "Retweet Potential",
          score: breakdown.retweetPotential.score,
          maxScore: breakdown.retweetPotential.max,
          reason: breakdown.retweetPotential.reason,
        },
        {
          name: "Favorite Potential",
          score: breakdown.favoritePotential.score,
          maxScore: breakdown.favoritePotential.max,
          reason: breakdown.favoritePotential.reason,
        },
        {
          name: "Quote Potential",
          score: breakdown.quotePotential.score,
          maxScore: breakdown.quotePotential.max,
          reason: breakdown.quotePotential.reason,
        },
      ],
    },
    {
      title: "Extended Engagement",
      score: extendedEngagementScore,
      maxScore: extendedEngagementMax,
      items: [
        {
          name: "Dwell Time",
          score: breakdown.dwellTime.score,
          maxScore: breakdown.dwellTime.max,
          reason: breakdown.dwellTime.reason,
        },
        {
          name: "Continuous Dwell Time",
          score: breakdown.continuousDwellTime.score,
          maxScore: breakdown.continuousDwellTime.max,
          reason: breakdown.continuousDwellTime.reason,
        },
        {
          name: "Click Potential",
          score: breakdown.clickPotential.score,
          maxScore: breakdown.clickPotential.max,
          reason: breakdown.clickPotential.reason,
        },
        {
          name: "Photo Expand",
          score: breakdown.photoExpand.score,
          maxScore: breakdown.photoExpand.max,
          reason: breakdown.photoExpand.reason,
        },
        {
          name: "Video View",
          score: breakdown.videoView.score,
          maxScore: breakdown.videoView.max,
          reason: breakdown.videoView.reason,
        },
        {
          name: "Quoted Click",
          score: breakdown.quotedClick.score,
          maxScore: breakdown.quotedClick.max,
          reason: breakdown.quotedClick.reason,
        },
      ],
    },
    {
      title: "Relationship Building",
      score: relationshipBuildingScore,
      maxScore: relationshipBuildingMax,
      items: [
        {
          name: "Profile Click",
          score: breakdown.profileClick.score,
          maxScore: breakdown.profileClick.max,
          reason: breakdown.profileClick.reason,
        },
        {
          name: "Follow Potential",
          score: breakdown.followPotential.score,
          maxScore: breakdown.followPotential.max,
          reason: breakdown.followPotential.reason,
        },
        {
          name: "Share Potential",
          score: breakdown.sharePotential.score,
          maxScore: breakdown.sharePotential.max,
          reason: breakdown.sharePotential.reason,
        },
        {
          name: "Share Via DM",
          score: breakdown.shareViaDM.score,
          maxScore: breakdown.shareViaDM.max,
          reason: breakdown.shareViaDM.reason,
        },
        {
          name: "Share Via Copy Link",
          score: breakdown.shareViaCopyLink.score,
          maxScore: breakdown.shareViaCopyLink.max,
          reason: breakdown.shareViaCopyLink.reason,
        },
      ],
    },
    {
      title: "Penalties",
      score: totalPenalty,
      maxScore: 0,
      isPenalty: true,
      items: [
        {
          name: "Not Interested",
          score: penalties.notInterested.score,
          maxScore: 0,
          reason: penalties.notInterested.reason,
        },
        {
          name: "Mute Risk",
          score: penalties.muteRisk.score,
          maxScore: 0,
          reason: penalties.muteRisk.reason,
        },
        {
          name: "Block Risk",
          score: penalties.blockRisk.score,
          maxScore: 0,
          reason: penalties.blockRisk.reason,
        },
        {
          name: "Report Risk",
          score: penalties.reportRisk.score,
          maxScore: 0,
          reason: penalties.reportRisk.reason,
        },
      ],
    },
  ]

  return (
    <div>
      <p className="text-sm text-foreground mb-3">Here&apos;s the detailed breakdown:</p>
      {breakdownData.map((section, idx) => (
        <BreakdownCard key={idx} section={section} />
      ))}
    </div>
  )
}

