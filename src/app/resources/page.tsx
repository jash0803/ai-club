import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ResourceList } from '@/components/resource-list'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">AI Resources</h1>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-6 mb-12">
          <p>
            Welcome to our curated collection of AI resources. Here, you'll find a wealth of free courses, tutorials, and materials covering various aspects of Artificial Intelligence, Machine Learning, Data Science, and related fields.
          </p>
          <p>
            Whether you're a beginner looking to start your AI journey or an experienced practitioner seeking to expand your knowledge, these resources will help you explore the fascinating world of AI and its applications.
          </p>
          <p>
            Our collection includes courses from top universities and tech companies, helpful YouTube channels, job boards, blogs, and cheat sheets to support your learning and career development in AI.
          </p>
        </div>
        <ResourceList />
      </main>
      <Footer />
    </div>
  )
}

