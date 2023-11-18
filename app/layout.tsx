import { ModalProvider } from '@/providers/ModalProvider'
import { ToastProvider } from '@/providers/ToastProvider'
import { Urbanist } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: 'E-commerce store managaed by the ecommerce admin cms',
}


export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL!)
    const { name } = await response.json()

  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar name={name}/>
        {children}
        <Footer />
    </body>
    </html>
  )
}
