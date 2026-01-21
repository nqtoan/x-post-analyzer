"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { AnalysisResult } from "@/lib/types"

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

interface ScoreBreakdownProps {
  data: AnalysisResult
}

function ProgressBar({ score, maxScore, isPenalty }: { score: number; maxScore: number; isPenalty?: boolean }) {
  const percentage = isPenalty ? 0 : (score / maxScore) * 100
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ${isPenalty ? 'bg-red-500' : 'bg-[#84cc16]'}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  )
}

function ScoreItemRow({ item }: { item: ScoreItem }) {
  return (
    <div className="py-4 border-b border-border last:border-b-0">
      <div className="grid grid-cols-12 gap-4 items-start">
        <div className="col-span-3">
          <span className="text-sm text-foreground">{item.name}</span>
        </div>
        <div className="col-span-3 flex items-center gap-2">
          <div className="flex-1">
            <ProgressBar score={item.score} maxScore={item.maxScore} />
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {item.score}/{item.maxScore}
          </span>
        </div>
        <div className="col-span-6">
          <p className="text-xs text-muted-foreground leading-relaxed">{item.reason}</p>
        </div>
      </div>
    </div>
  )
}

function BreakdownAccordion({ section }: { section: BreakdownSection }) {
  const [isOpen, setIsOpen] = useState(section.title === "Core Engagement")

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between hover:bg-muted/50 transition-colors px-4"
      >
        <span className="text-sm font-medium text-foreground">{section.title}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${section.isPenalty ? 'text-red-500' : 'text-[#3b82f6]'}`}>
            {section.isPenalty ? section.score : `${section.score}/${section.maxScore}`}
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
      </button>
      
      {isOpen && section.items && (
        <div className="px-4 pb-4">
          <div className="bg-muted/30 border border-border">
            <div className="grid grid-cols-12 gap-4 px-4 py-2 border-b border-border text-xs text-muted-foreground font-medium">
              <div className="col-span-3">Item</div>
              <div className="col-span-3">Score</div>
              <div className="col-span-6">Reason</div>
            </div>
            {section.items.map((item, index) => (
              <ScoreItemRow key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function ScoreBreakdown({ data }: ScoreBreakdownProps) {
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
    <div className="mb-8">
      <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-4">Score Breakdown</h2>
      <div className="border border-border bg-card">
        {breakdownData.map((section, index) => (
          <BreakdownAccordion key={index} section={section} />
        ))}
      </div>
    </div>
  )
}

