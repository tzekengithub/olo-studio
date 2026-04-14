import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

/* ── Google Fonts ─────────────────────────── */
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
  display: 'swap',
})

/* ── Metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: 'OLO Studio — DIY Plushy & Tufting Workshops Penang',
  description:
    "Penang's #1 creative DIY workshop. Make your own plushie or tufted rug. Walk-ins welcome. Perfect for dates, families & corporate events.",
  keywords: [
    'plushy workshop Penang',
    'tufting workshop Malaysia',
    'DIY craft Penang',
    'OLO Studio',
    'George Town creative studio',
  ],
  openGraph: {
    title: 'OLO Studio — DIY Plushy & Tufting Workshops Penang',
    description:
      "Penang's #1 creative DIY workshop. Make your own plushie or tufted rug.",
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'OLO Studio workshop' }],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OLO Studio — DIY Plushy & Tufting Workshops Penang',
    images: ['/images/hero.jpg'],
  },
  themeColor: '#C8E6F5',
}

/* ── Root Layout ──────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-sky text-text-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
