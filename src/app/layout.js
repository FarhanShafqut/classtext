import { Inter } from 'next/font/google'
import './globals.css'
import Fotter from "./(components)/Fotter"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'doctor app',
  description: 'Generated by marsad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Fotter/>
      </body>
    </html>
  )
}
