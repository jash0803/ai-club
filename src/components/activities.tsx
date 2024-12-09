
import { Code, Users, Zap, Lightbulb } from 'lucide-react'

const activities = [
    {
        icon: Code,
        title: 'Workshops and Tutorials',
        description: 'Interactive sessions led by students and industry experts to cover foundational and advanced topics.'
    },
    {
        icon: Zap,
        title: 'Hackathons and Competitions',
        description: 'Opportunities to apply AI knowledge in real-world scenarios and compete with peers.'
    },
    {
        icon: Users,
        title: 'Projects and Research Initiatives',
        description: 'Collaborations on projects that solve real-world problems, from healthcare to finance.'
    },
    {
        icon: Lightbulb,
        title: 'Guest Lectures and Seminars',
        description: 'Insights and experiences from industry leaders and researchers in the AI field.'
    }
]

export function Activities() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <activity.icon className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{activity.title}</h3>
                            <p className="text-gray-600">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

