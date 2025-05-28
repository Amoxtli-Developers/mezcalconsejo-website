import './globals.css'
import { Fredoka } from 'next/font/google'
import Providers from './providers'

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-fredoka'
})

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
      <body className={`${fredoka.variable} font-fredoka`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
