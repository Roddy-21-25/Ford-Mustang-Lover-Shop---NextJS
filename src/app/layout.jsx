import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Shared/Navbar'
import NewsLetter from '@/components/Shared/NewsLetter'
import Footer from '@/components/Shared/Footer'

import AuthProvider from '@/context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ford Mustang Lover Shop',
  description: 'Ford Mustang Lover Shop E-Commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Home/logoSingle.png" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <NewsLetter />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}