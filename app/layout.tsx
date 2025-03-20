import type { Metadata } from 'next'
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

const ovo = Ovo({ subsets: ['latin'], weight: ["400"] })


export const metadata: Metadata = {
  title: 'Personal Portfolio - Aditya Pradhan',
  description: 'personal portfolio',
  icons: {
    icon: [
       { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${outfit.className} ${ovo.className} leading-12 overflow-x-hidden`}>{children}</body>
    </html>
  )
}
