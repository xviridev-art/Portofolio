import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'
import { NavbarProvider } from './contexts/NavbarContext'
import { AdminProvider } from './contexts/AdminContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oleg Zeng - Portfolio',
  description: 'Portfolio website of Oleg Zeng - Full Stack Developer',
  keywords: 'portfolio, developer, react, next.js, javascript, web development',
  authors: [{ name: 'Oleg Zeng' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <NavbarProvider>
            <AdminProvider>
              {children}
            </AdminProvider>
          </NavbarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}