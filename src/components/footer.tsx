import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">AI Club</h3>
                        <p className="text-blue-300">Exploring the future of AI together</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-blue-300 hover:text-white">Home</Link></li>
                            <li><Link href="/events" className="text-blue-300 hover:text-white">Events</Link></li>
                            <li><Link href="/team" className="text-blue-300 hover:text-white">Team</Link></li>
                            <li><Link href="/resources" className="text-blue-300 hover:text-white">Resources</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-blue-300 mb-2">Email: <a href="mailto:ai_club@daiict.ac.in" className="hover:text-white">ai_club@daiict.ac.in</a></p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ai-club-daiict" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">GitHub</a>
                            <a href="https://www.linkedin.com/company/ai-club-daiict/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">LinkedIn</a>
                            <a href="https://www.instagram.com/aiclub_daiict/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-400">
                    <p>&copy; 2025 AI Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

