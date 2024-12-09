import { CalendarDays, ExternalLink } from 'lucide-react'

interface Event {
    date: string;
    name: string;
    description: string;
    photoLink?: string;
}

interface EventTimelineProps {
    events: Event[];
}

export function EventTimeline({ events }: EventTimelineProps) {
    return (
        <div className="space-y-8">
            {events.map((event, index) => (
                <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                        <CalendarDays className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4 bg-white p-6 rounded-lg shadow-md flex-grow">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold text-blue-900">{event.name}</h3>
                            <span className="text-sm text-blue-600">{event.date}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                        {event.photoLink && (
                            <a
                                href={event.photoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
                            >
                                View Photos
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

