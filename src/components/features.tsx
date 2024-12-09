import { Brain, Users, Calendar, BookOpen } from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'Cutting-edge AI Topics',
        description: 'Stay updated with the latest advancements in AI technology.'
    },
    {
        icon: Users,
        title: 'Networking Opportunities',
        description: 'Connect with like-minded individuals passionate about AI.'
    },
    {
        icon: Calendar,
        title: 'Regular Workshops',
        description: 'Participate in hands-on workshops and learning sessions.'
    },
    {
        icon: BookOpen,
        title: 'Resource Library',
        description: 'Access a curated collection of AI resources and materials.'
    }
]

export function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

