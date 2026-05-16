import { FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter, FaFacebookF, FaYoutube, FaLocationDot, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: FaWhatsapp, href: 'https://chat.whatsapp.com/K0RNdkd6FPJEAEKaHTHUQ7', label: 'WhatsApp' },
        { icon: FaXTwitter, href: 'https://x.com/BBAIFestival', label: 'Twitter' },
        { icon: FaFacebookF, href: 'https://www.facebook.com/share/1B26MYg4WD/', label: 'Facebook' },
        { icon: FaYoutube, href: 'https://youtube.com/@bbaifestival', label: 'YouTube' },
    ]

    return (
        <footer className="bg-secondary backdrop-blur-sm mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-8xl py-16">
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8 mb-12 text-center md:text-left">
                    
                    {/* BRAND SECTION */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start">
                        <img src="/logo3.png" alt="Logo" className="w-20 h-16 mb-6" />
                        <p className="text-white/70 text-sm leading-relaxed">
                            The inaugural Benue Blockchain AI Fest—building the next billion users through Web3 and AI innovation.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Links</h4>
                        <nav className="space-y-3">
                            <Link to="/" className="text-white/60 hover:text-primary text-sm transition-colors">Home</Link>
                            <Link to="/register" className="text-white/60 hover:text-primary text-sm transition-colors block">Register</Link>
                            <Link to="/apply" className="text-white/60 hover:text-primary text-sm transition-colors block">Apply Speaker</Link>
                        </nav>
                    </div>

                    {/* EVENT INFO */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Event</h4>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-primary/80 text-xs font-medium mb-1">Labs</p>
                                <p className="text-white/60">TBA</p>
                            </div>
                            <div>
                                <p className="text-primary/80 text-xs font-medium mb-1">Conference</p>
                                <p className="text-white/60">TBA</p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wide">Contact</h4>
                        <div className="space-y-3 text-sm flex flex-col items-center md:items-start">
                            <a href="mailto:info@bbaifest.com" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                                <FaEnvelope className="text-primary/60 flex-shrink-0" />
                                <span>partnerships@benueblockchainfest.com</span>
                            </a>
                            <a href="tel:+2348021192934" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                                <FaPhone className="text-primary/60 flex-shrink-0" />
                                <span>+234 802 119 2934</span>
                            </a>
                            <div className="text-white/60 flex items-center gap-2">
                                <FaLocationDot className="text-primary/60 flex-shrink-0" />
                                <span className="text-xs">Fr. Alia Conference<br />Makurdi, Benue</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/5 pt-8 mb-8"></div>

                {/* BOTTOM */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
                    <p className="text-white/50 text-xs">
                        © {currentYear} Benue Blockchain AI Fest. All rights reserved.
                    </p>
                    
                    {/* SOCIALS */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, i) => {
                            const Icon = social.icon
                            return (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary hover:bg-primary/5 transition-all duration-300"
                                    title={social.label}
                                >
                                    <Icon className="text-sm" />
                                </a>
                            )
                        })}
                    </div>

                 
                </div>

            </div>
        </footer>
    )
}
 
