import { Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react'

export function Contact() {
    return (
        <section id="contact" className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <Mail className="w-6 h-6 text-blue-600 mr-2" />
                            <a href="mailto:ai_club@daiict.ac.in" className="text-blue-600 hover:underline">ai_club@daiict.ac.in</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                            <p className="text-gray-700">DA-IICT, Gandhinagar, Gujarat, India</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ai-club-daiict" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/company/ai-club-daiict/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/aiclub_daiict/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4972049549415!2d72.62680851496818!3d23.188539984867775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

