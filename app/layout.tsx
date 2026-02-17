import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import LandingPage from '@/components/landing-page'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cookbook',
  description: 'end-to-end solution for managing resturant inventory',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <SignedOut>
              <LandingPage/>
            </SignedOut>
            <SignedIn>
              <LandingPage/>
            </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}