import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded={true} data-gr-ext-installed={true} className={inter.className}>{children}</body>
    </html>
  )
}
