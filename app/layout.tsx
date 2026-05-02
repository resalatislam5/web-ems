import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientSide from './ClientSide';
import { siteInfo } from '@/common/utils/siteInfo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.baseUrl),

  title: {
    default: siteInfo.name,
    template: `${siteInfo.name}`,
  },

  description: siteInfo.description,

  applicationName: siteInfo.name,

  keywords: [
    'course management software',
    'student enrollment system',
    'saas education platform',
    'training management system',
  ],

  authors: [{ name: siteInfo.company_name, url: siteInfo.company_url }],
  creator: siteInfo.company_name,
  publisher: siteInfo.company_name,

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'bn-BD': '/bn-BD',
    },
  },

  openGraph: {
    title: siteInfo.name,
    description: siteInfo.description,
    url: siteInfo.baseUrl,
    siteName: siteInfo.name,
    images: [
      {
        url: `${siteInfo.baseUrl}/ems-logo.png`,
        width: 1200,
        height: 630,
        alt: siteInfo.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: siteInfo.name,
    description: siteInfo.description,
    images: [`${siteInfo.baseUrl}/ems-logo.png`],
    creator: siteInfo.company_name,
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
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  verification: {
    google: 'your-google-site-verification-code',
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ClientSide>
        <body className='min-h-full flex flex-col'>{children}</body>
      </ClientSide>
    </html>
  );
}
