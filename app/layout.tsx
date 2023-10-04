import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Providers from './providers'
import Header from '../components/Header'
import Footer from '../components/Footer'

const oswald = Oswald({ subsets: ['latin'], variable:'--font-oswald', weight: ['200', '300','400', '500', '600', '700']  })
const inter = Inter({ subsets: ['latin'], variable:'--font-inter', weight: ['200', '300','400', '500', '600', '700']  })

export const metadata: Metadata = {
  title: 'MyTickets',
  description: 'Buy and Sell ND Tickets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        <Providers>
          <div className='h-screen flex flex-col justify-between'>
            <Header/>
              <div className='bg-white rounded-3xl shadow-lg mx-5 md:my-12 md:mx-48'>
                {children}
              </div>
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  )
}
