import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const font = Montserrat({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Memozone',
  description: 'Project CRUD Pemrograman Web Ghifari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
