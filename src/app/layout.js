import './globals.css'
import { Inter , Lexend } from 'next/font/google'
import ContactPopup from './components/ContactPopup'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-inter',
});

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

export const metadata = {
  title: 'Interlace Studies',
  description: 'Your Gateway to Global Education and Migration',
  google: '_yvoOG6WHXKq8t7yi',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body  className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <ContactPopup />
      </body>
    </html>
  )
}
