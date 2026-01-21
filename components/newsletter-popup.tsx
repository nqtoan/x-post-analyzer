"use client"

import { X } from "lucide-react"
import { useState } from "react"

interface NewsletterPopupProps {
  onClose: () => void
}

export function NewsletterPopup({ onClose }: NewsletterPopupProps) {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 bg-card border border-border shadow-lg max-w-xs w-full z-50">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <p className="text-xs text-foreground/60 uppercase tracking-wide pr-4">
            Stay up to date with product updates and insights.
          </p>
          <button 
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="border-b border-border bg-transparent text-sm py-2 flex-1 placeholder:text-foreground/40 focus:outline-none focus:border-foreground"
          />
          <button className="text-sm text-foreground hover:text-[#fc6432] whitespace-nowrap">
            [ SUBSCRIBE ]
          </button>
        </div>

        <label className="flex items-start gap-2 text-xs text-foreground/60">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            I agree to receive marketing communications from XANAI, and I consent to my personal information being processed in accordance with XANAI&apos;s{" "}
            <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
          </span>
        </label>
      </div>
    </div>
  )
}

