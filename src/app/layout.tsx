import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mezcal Consejo - Authentic Mezcal from Oaxaca',
  description: 'Discover the finest artisanal mezcal from certified producers in Oaxaca. Premium quality, authentic taste, delivered to your door.',
  keywords: 'mezcal, oaxaca, artisanal, premium, authentic, agave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
