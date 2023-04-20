import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
export const metadata = {
  title: 'AI Chatbots',
  description: 'A place to easily explore and test fine tuned with openai domain specific ai chatbots. It also enables you to create your own chatbots and share them with the world.',
  icons: {
    icon: [{ url: '/favicon.ico' }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col">
        <Navbar/>
        <main className='flex flex-1' >
        {children} </main>
        <Footer />
        </body>
    </html>
  )
}
