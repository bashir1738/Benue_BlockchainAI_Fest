import { FaXTwitter, FaFacebookF, FaYoutube, FaTelegram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-secondary pt-24 pb-12 mt-auto border-t border-white/5 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-8xl relative z-10">

                {/* TOP HEADER / BRANDING BLOCK */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-10">
                    <div className="flex flex-col items-center md:items-start md:text-left text-center">
                        <img src="/logo3.png" alt="Logo" className="w-24 h-20 mb-5" />
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                            Join us at the inaugural Benue Blockchain AI Fest. Building the next billion users through groundbreaking technology.
                        </p>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://t.me/BenueBlockchainAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <FaTelegram className="text-lg" />
                        </a>
                        <a
                            href="https://x.com/BBAIFestival"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <FaXTwitter className="text-lg" />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1B26MYg4WD/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a
                            href="https://youtube.com/@bbaifestival"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <FaYoutube className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* BOTTOM LINKS & COPYRIGHT */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left pt-8 border-t border-white/10 gap-6">
                    <p className="text-white/40 text-sm font-light">
                        © {new Date().getFullYear()} Benue Blockchain AI Fest. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/#about" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">About</a>
                        <a href="/#sponsor" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">Sponsor</a>
                        <Link to="/register" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">Register</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}
