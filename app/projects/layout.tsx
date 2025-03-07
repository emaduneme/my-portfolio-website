import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Emmanuel Maduneme',
  description: 'UX Research projects by Emmanuel Maduneme',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <a href="/" className="text-primary hover:underline">&larr; Back to Home</a>
      </div>
      {children}
    </div>
  )
} 