import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Raleway, Open_Sans, Montserrat } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

config.autoAddCss = false

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'John Lomat | WordPress & WooCommerce Expert',
  description:
    'Expert WordPress developer specializing in custom websites, WooCommerce, Elementor, Divi, ACF, and SEO. Proven track record with 26 websites delivered.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`page-container ${raleway.variable} ${montserrat.variable} ${open_sans.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5G05S9L675" />
    </html>
  )
}
