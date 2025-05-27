import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrustSig - Decentralized Legal Contract Management',
  description: 'The definitive platform for legally binding, self-executing contracts, underpinned by immutable blockchain technology',
  keywords: 'blockchain, smart contracts, legal tech, decentralized, arbitration, NEAR protocol',
  openGraph: {
    title: 'TrustSig - Deal with Absolute Autonomy',
    description: 'The definitive platform for legally binding, self-executing contracts',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
} 