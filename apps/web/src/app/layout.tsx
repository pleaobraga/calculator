'use client'

import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './globals.css'

const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={roboto.className}>{children}</body>
      </QueryClientProvider>
    </html>
  )
}
