import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meher Ali Tent & Pakwan Center - Complete Catering Services in Chakwal",
  description:
    "Professional catering and event services in Chakwal, Pakistan. Complete solutions for weddings, events, and gatherings with authentic Pakistani cuisine and decoration.",
  keywords:
    "catering Chakwal, Pakistani catering, wedding catering, event services, tent services, Meher Ali, Pakwan Center",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
