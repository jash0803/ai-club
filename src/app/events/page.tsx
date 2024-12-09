import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventTimeline } from '@/components/event-timeline'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">Events</h1>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Upcoming Events</h2>
          <EventTimeline events={upcomingEvents} />
        </section>
        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Past Events</h2>
          <EventTimeline events={pastEvents} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

const upcomingEvents = [
  {
    date: '2024-11-13',
    name: 'Talk Session by Kiran Trivedi',
    description: 'Learn the basics of machine learning with hands-on sessions!',
    photoLink: 'https://drive.google.com/drive/folders/example-link-1'
  },
  {
    date: '2024-11-15',
    name: 'Prompt-a-Thon 4.0',
    description: 'Creativity at its best',
    photoLink: 'https://drive.google.com/drive/folders/example-link-2'
  }
]

const pastEvents = [
  {
    date: '2023-10-20',
    name: 'AI in Healthcare Symposium',
    description: 'Explored the latest applications of AI in the medical field.',
    photoLink: 'https://drive.google.com/drive/folders/past-event-1'
  },
  {
    date: '2023-09-05',
    name: 'Machine Learning Workshop',
    description: 'Hands-on session on building and training ML models.',
    photoLink: 'https://drive.google.com/drive/folders/past-event-2'
  }
]

