import React from 'react'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'

import '~/styles/tailwind.scss'

import { Providers } from '~/app/providers'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

const barlow = Barlow({ weight: '100', subsets: ['latin'] })

export const metadata: Metadata = {
  title: '帆启教育-助学金名额管理系统',
  description: '',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={barlow.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
