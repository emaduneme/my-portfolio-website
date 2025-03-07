'use client'

import { ThemeProvider } from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className="text-primary hover:underline">&larr; Back to Home</a>
          <ThemeToggle />
        </div>
        {children}
      </div>
    </ThemeProvider>
  )
} 