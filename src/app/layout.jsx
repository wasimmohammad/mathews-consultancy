import clsx from 'clsx'

import '@/styles/tailwind.css'
import { JsonLd } from '@/components/JsonLd'

export const metadata = {
  metadataBase: new URL('https://mathewsconsultancy.com'),
  title: {
    template: '%s | Mathews Consultancy - Mathews Consulting',
    default: 'Mathews Consultancy | Mathews Consulting – Accounting, Tax & Advisory Services',
  },
  description:
    'Mathews Consultancy (Mathews Consulting) provides trusted accounting, tax compliance, bookkeeping, and cross-border advisory services for individuals and businesses across the US, UK, and India.',
  keywords: [
    'Mathews Consultancy',
    'Mathews Consulting',
    'Mathews Consultancy accounting',
    'Mathews Consulting tax advisory',
    'Mathews Consulting Group',
    'Mathews Consultancy US UK India',
    'US UK India accounting firm',
    'cross border tax consultant',
    'expat tax advisory US India',
    'NRI tax planning India UK',
    'Virtual CFO services',
    'international payroll management',
    'cross border financial advisory',
  ],
  authors: [{ name: 'Mathews Consultancy', url: 'https://mathewsconsultancy.com' }],
  creator: 'Mathews Consultancy',
  publisher: 'Mathews Consultancy',
  applicationName: 'Mathews Consultancy',
  alternates: {
    canonical: 'https://mathewsconsultancy.com',
  },
  openGraph: {
    title: 'Mathews Consultancy | Mathews Consulting – Accounting, Tax & Advisory',
    description:
      'Mathews Consultancy (Mathews Consulting) provides trusted accounting, tax compliance, payroll, and cross-border advisory across the US, UK, and India.',
    url: 'https://mathewsconsultancy.com',
    siteName: 'Mathews Consultancy | Mathews Consulting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1456,
        height: 768,
        alt: 'Mathews Consultancy - Mathews Consulting Accounting and Tax Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathews Consultancy | Mathews Consulting – Accounting & Tax Advisory',
    description:
      'Mathews Consultancy (Mathews Consulting) provides premier accounting, tax, and cross-border financial advisory across the US, UK, and India.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/mathews-favicon.ico?v=4' },
      { url: '/favicon.ico' },
    ],
    apple: '/mathews-favicon.ico?v=4',
  },
  category: 'finance',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth bg-white antialiased font-sans"
    >
      <head>
        <JsonLd />
      </head>
      <body className="flex h-full flex-col font-sans">{children}</body>
    </html>
  )
}
