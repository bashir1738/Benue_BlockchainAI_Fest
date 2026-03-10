export default function Header() {
    return (
        <header className="bg-secondary text-white py-4 px-4 md:px-20 top-0 z-50 ">
            <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center">

                {/* LOGO */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-xl font-mono md:text-2xl lg:text-3xl font-black text-primary uppercase tracking-tighter leading-none ">
                        Benue Blockchain <br className="lg:hidden" /> AI Fest
                    </h1>
                    <p className="text-primary font-mono text-xs md:text-sm mt-1 tracking-widest">
                        {'{Technology Conference}'}
                    </p>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex space-x-8 items-center text-sm font-medium">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#expect" className="hover:text-primary transition-colors">What to expect</a>
                    <a href="#location" className="hover:text-primary transition-colors">Location</a>
                    <a href="#highlights" className="hover:text-primary transition-colors">Key highlights</a>
                </nav>

                {/* CTA BUTTON (DESKTOP) */}
                <div className="hidden lg:block">
                    <a href="#apply" className="bg-primary text-white font-semibold py-2.5 px-6 rounded-md text-sm hover:opacity-90 transition-opacity">
                        Apply Now
                    </a>
                </div>
            </div>
        </header>
    )
}
