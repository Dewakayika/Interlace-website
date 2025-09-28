import './globals.css'
import { Inter, Lexend } from 'next/font/google'
import ContactPopup from './components/ContactPopup'
import StructuredData from './components/StructuredData'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-inter',
})

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-lexend',
})

export const metadata = {
  title: 'Interlace Studies Bali - Konsultan Pendidikan & Migrasi Australia Terpercaya',
  description: 'One stop service untuk studi dan kerja di Australia. Konsultan pendidikan terpercaya di Bali dengan tim berpengalaman. Bimbingan lengkap dari pemilihan kursus, visa, hingga penempatan kerja di Australia.',
  keywords: 'konsultan pendidikan Australia, studi di Australia, kerja di Australia, visa Australia, migrasi Australia, Interlace Studies Bali, konsultan migrasi, pendidikan luar negeri, working holiday visa, student visa Australia',
  google: '_yvoOG6WHXKq8t7yi', // pastikan ini sesuai kode verifikasi dari Google
  openGraph: {
    title: 'Interlace Studies Bali - Konsultan Pendidikan & Migrasi Australia',
    description: 'One stop service untuk studi dan kerja di Australia. Konsultan pendidikan terpercaya di Bali dengan tim berpengalaman.',
    url: 'https://www.interlacestudies.id',
    siteName: 'Interlace Studies',
    images: [
      {
        url: 'https://www.interlacestudies.id/images/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Interlace Studies Bali - Konsultan Pendidikan Australia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interlace Studies Bali - Konsultan Pendidikan & Migrasi Australia',
    description: 'One stop service untuk studi dan kerja di Australia. Konsultan pendidikan terpercaya di Bali.',
    images: ['https://www.interlacestudies.id/images/logo-dark.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta
          name="google-site-verification"
          content="_yvoOG6WHXKq8t7yivEfq89Yoh_q7BdebyWrUSGqZV8"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-99XSBB3LG3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-99XSBB3LG3');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
        <ContactPopup />
      </body>
    </html>
  )
}
