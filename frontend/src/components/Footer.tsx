import { FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-white py-12 mt-auto">
            <div className="container mx-auto flex flex-col items-center px-4">

                {/* LOGO SECTION */}
                <div className="flex flex-col items-center mb-6 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-300 uppercase tracking-tighter leading-none font-mono">
                        Benue Blockchain <br className="md:hidden" /> AI Fest
                    </h2>
                    <p className="text-gray-300 font-mono text-sm md:text-lg mt-3 md:mt-1 tracking-widest">
                        {'{Technology Conference}'}
                    </p>
                </div>

                {/* HEADER / BODY TEXT */}
                <p className="font-mono text-center text-gray-800 text-sm md:text-base max-w-2xl mb-8 leading-relaxed px-2">
                    Join us at the inaugural Benue Blockchain AI Fest as we showcase innovation in<br className="hidden md:block" /> Blockchain and AI technology
                </p>

                {/* DIVIDER */}
                <div className="w-full max-w-3xl border-t border-gray-100 mb-8"></div>

                {/* SOCIAL ICONS */}
                <div className="flex items-center space-x-12">
                    <a
                        href="#"
                        className="bg-black text-white w-12 h-12 rounded-full flex flex-col justify-center items-center hover:bg-gray-800 transition-colors"
                    >
                        <FaXTwitter className="text-xl" />
                    </a>
                    <a
                        href="#"
                        className="bg-black text-white w-12 h-12 rounded-full flex flex-col justify-center items-center hover:bg-gray-800 transition-colors"
                    >
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a
                        href="#"
                        className="bg-black text-white w-12 h-12 rounded-full flex flex-col justify-center items-center hover:bg-gray-800 transition-colors"
                    >
                        <FaTelegramPlane className="text-xl -ml-1 mt-1" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
