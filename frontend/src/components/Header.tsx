import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', path: '/#about' },
        { name: 'What to expect', path: '/#expect' },
        { name: 'Location', path: '/#location' },
        { name: 'Key highlights', path: '/#highlights' },
        { name: 'Sponsor', path: '/#sponsor' },
        { name: 'Community partners', path: '/#partners' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 
            ${isScrolled || mobileMenuOpen ? 'py-3' : 'py-5'}`}
        >
            <div className={`mx-auto max-w-[1500px] transition-all duration-500 overflow-hidden border border-white/5 bg-secondary/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                ${mobileMenuOpen ? 'rounded-3xl' : 'rounded-2xl md:rounded-full'}
                `}>
                <div className="flex items-center justify-between px-10 py-3 relative z-10">
                    {/* LOGO */}
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex flex-col group relative z-50 shrink-0">
                        <img src="/logo.png" alt="Logo" className="w-24 h-16" />
                    </Link>

                    {/* DESKTOP NAV (PILL SHAPE) */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 mx-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-primary hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA BUTTONS */}
                    <div className="hidden lg:flex items-center gap-5 shrink-0">
                        <Link
                            to="/apply"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                            Apply Now
                        </Link>
                        <Link
                            to="/register"
                            className="relative group overflow-hidden bg-primary/10 border border-primary text-primary font-bold py-2.5 px-7 rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                        >
                            <span className="relative z-10 group-hover:text-secondary transition-colors duration-300">Register</span>
                            <div className="absolute inset-0 h-full w-full bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 mix-blend-normal"></div>
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="lg:hidden text-white text-2xl p-2 relative z-50 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* IN-HEADER EXPANDING MOBILE MENU */}
                <div
                    className={`lg:hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${mobileMenuOpen ? 'max-h-125 opacity-100 pb-6' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <nav className="flex flex-col gap-5 px-6 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px w-full bg-white/10 my-1"></div>
                        <Link
                            to="/apply"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Apply to Speak / Showcase
                        </Link>
                        <Link
                            to="/register"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-primary hover:bg-white text-secondary font-bold py-3.5 px-6 rounded-xl text-center shadow-lg transition-all duration-300 inline-block mt-2 font-mono"
                        >
                            Secure Ticket
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
