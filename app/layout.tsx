import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIJobHelper — Practical AI systems for landing jobs and advancing your career',
  description: 'Curated systems, prompts, and frameworks that help people use AI effectively in the job market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
