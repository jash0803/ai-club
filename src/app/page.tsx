import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Activities } from '@/components/activities'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

