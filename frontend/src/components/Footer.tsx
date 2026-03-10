import { FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-secondary pt-24 pb-12 mt-auto border-t border-white/5 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl relative z-10">

                {/* TOP HEADER / BRANDING BLOCK */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                    <div className="flex flex-col">
                        <Link to="/" className="group cursor-pointer mb-6">
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2 transition-colors duration-300">
                                BENUE FEST <span className="text-primary group-hover:text-white transition-colors duration-300">2025</span>
                            </h2>
                            <p className="text-primary/70 font-mono text-xs uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                                {'{ BLOCKCHAIN & AI CONFERENCE }'}
                            </p>
                        </Link>
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                            Join us at the inaugural Benue Blockchain AI Fest. Building the next billion users through groundbreaking technology.
                        </p>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                            <FaXTwitter className="text-lg" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
                            <FaTelegramPlane className="text-lg -ml-1 mt-0.5" />
                        </a>
                    </div>
                </div>

                {/* BOTTOM LINKS & COPYRIGHT */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
                    <p className="text-white/40 text-sm font-light">
                        © {new Date().getFullYear()} Benue Blockchain AI Fest. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/#about" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">About</a>
                        <a href="/#expect" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">Schedule</a>
                        <Link to="/register" className="text-white/40 hover:text-primary text-sm font-medium transition-colors">Register</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}
