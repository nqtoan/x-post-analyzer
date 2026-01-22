import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XANAI - AI-Powered X Post Analyzer',
  description: 'Analyze your X posts using AI and recommendation algorithm signals. Get actionable insights to optimize your content for better engagement.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/xanai-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/xanai-logo.png',
    shortcut: '/xanai-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
