import Link from 'next/link'

export function Header() {
    return (
        <header className="bg-blue-900 text-white">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">AI Club DAIICT</Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link href="/events" className="hover:text-blue-300">Events</Link></li>
                        <li><Link href="/team" className="hover:text-blue-300">Team</Link></li>
                        <li><Link href="/resources" className="hover:text-blue-300">Resources</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

