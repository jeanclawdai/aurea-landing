import './globals.css'
import type { Metadata } from 'next'
import { ScrollRestoration } from 'next/navigation'

export const metadata: Metadata = {
  title: 'NIGLET - Hyper Rare 1/1',
  description: 'A shiny trench-born meme with collector-grade energy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="cosmic-bg" />
        {children}
      </body>
    </html>
  )
}
