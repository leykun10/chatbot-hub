import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
export const metadata = {
  title: 'Chatbot hub',
  description: 'A place to explore knowledge base based chatbots',
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
