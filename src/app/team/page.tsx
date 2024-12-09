import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamGrid } from '@/components/team-grid'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Team</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">New Leadership Announcement</h2>
          <p className="text-gray-700 mb-4">
            The past few years have seen tremendous developments in the field of AI. From Quill bot to Grammarly to getting assignments done with ChatGPT, the horizon of machine learning has expanded. And to bring about change, the old has to pave the way for the new.
          </p>
          <p className="text-gray-700 mb-4">
            It's time we introduce you to the new AI Club! We are confident that each member will bring something unique to the table, and we look forward to seeing the contributions and innovations they'll make within the AI Club.
          </p>
          <p className="text-gray-700 italic">
            For the AI Club,<br />
            Dhruv Shah (Ex Convenor) & Aayush Patel (Ex Dy. Convenor)
          </p>
        </div>
        <TeamGrid />
      </main>
      <Footer />
    </div>
  )
}

