import { Button } from '@/components/ui/button'

export function Hero() {
    return (
        <section className="bg-blue-800 text-white py-20">
            <div className="container flex flex-col mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6">Welcome to AI Club DAIICT</h1>
                <p className="text-xl mb-8"></p> Where innovation, curiosity, and creativity intersect in the world of Artificial Intelligence
                <Button
                    className="bg-white text-blue-800 hover:bg-blue-100 w-fit mx-auto"
                    // onClick={() => window.open('https://forms.gle/your-google-form-link', '_blank')}
                >
                    Join Us
                </Button>
            </div>
        </section>
    )
}