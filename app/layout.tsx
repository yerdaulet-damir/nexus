import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nunexusclub.com'),
  title: {
    default: "NU Nexus Club - Innovation Hub of Central Asia | Nazarbayev University",
    template: "%s | NU Nexus Club"
  },
  description: "NU Nexus Club brings the culture of entrepreneurship to Nazarbayev University students, transforming Kazakhstan into the Innovation Hub of Central Asia. Join our community of innovators, connect with mentors and investors.",
  keywords: [
    "NU Nexus Club",
    "Nazarbayev University",
    "entrepreneurship Kazakhstan",
    "startup Kazakhstan",
    "innovation hub Central Asia",
    "student entrepreneurs",
    "business club Astana",
    "mentorship program",
    "investor network Kazakhstan",
    "NU student organizations"
  ],
  authors: [{ name: "NU Nexus Club" }],
  creator: "NU Nexus Club",
  publisher: "NU Nexus Club",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nunexusclub.com',
    siteName: 'NU Nexus Club',
    title: 'NU Nexus Club - Innovation Hub of Central Asia',
    description: 'Join the leading entrepreneurship community at Nazarbayev University. Connect with brilliant minds, mentors, and investors to turn your ideas into action.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'NU Nexus Club - Together we turn ambition into action',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NU Nexus Club - Innovation Hub of Central Asia',
    description: 'Join the leading entrepreneurship community at Nazarbayev University. Connect with brilliant minds, mentors, and investors.',
    images: ['/hero.png'],
    creator: '@nunexusclub',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://nunexusclub.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0058CC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect для быстрой загрузки */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preload критичного hero изображения (LCP) */}
        <link
          rel="preload"
          as="image"
          href="/hero.png"
          type="image/png"
          fetchPriority="high"
        />
        
        {/* Structured Data for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NU Nexus Club",
              "alternateName": "Nazarbayev University Nexus Club",
              "url": "https://nunexusclub.com",
              "logo": "https://nunexusclub.com/android-chrome-512x512.png",
              "description": "NU Nexus Club brings the culture of entrepreneurship among Nazarbayev University students and transforms it into Innovation Hub of Central Asia",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Astana",
                "addressCountry": "Kazakhstan"
              },
              "sameAs": [
                "https://www.instagram.com/nunexusclub/",
                "https://www.linkedin.com/company/nunexusclub"
              ],
              "foundingDate": "2020",
              "memberOf": {
                "@type": "EducationalOrganization",
                "name": "Nazarbayev University"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

