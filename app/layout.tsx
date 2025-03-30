import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { Providers } from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Emmanuel Maduneme',
    template: '%s | Emmanuel Maduneme'
  },
  description: 'Hi I am Emmanuel, a Ph.D student in Media Psychology and UX Researcher from Eugene, Oregon',
  openGraph: {
    title: 'Emmanuel Maduneme',
    description: 'Media Psychology and UX Research Portfolio',
    siteName: 'Emmanuel Maduneme',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Maduneme',
    description: 'Media Psychology and UX Research Portfolio',
    creator: '@emmanuelmaduneme',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 