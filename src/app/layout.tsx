import './globals.css'
import type { Metadata } from 'next'
import TheHeader from '@/components/TheHeader/index'


export const metadata: Metadata = {
  title: 'Armaggedon',
  description: 'Meteorite monitoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
