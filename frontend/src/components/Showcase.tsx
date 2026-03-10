import Reveal from './Reveal'

export default function Showcase() {
    return (
        <section id="location" className="bg-white py-24 md:py-32 xl:py-40">
            <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">

                {/* TOP HEADER & STATS */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-24">

                    {/* LEFT COLUMN: Clean, minimalist typography */}
                    <Reveal>
                        <div className="flex flex-col items-start lg:max-w-xl">
                            <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">The Experience</span>
                            <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] mb-8 tracking-tight">
                                Products Showcase <br className="hidden md:block" /> & Hackathon
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl leading-[1.8] font-light">
                                Benue Blockchain AI Fest 2025 in its inaugural edition aims to
                                spotlight innovation in Blockchain and AI technology and
                                use through groundbreaking and useful products
                                built to onboard the next billion users.
                            </p>
                        </div>
                    </Reveal>

                    {/* RIGHT COLUMN: Minimal Borders for stats */}
                    <Reveal delay={200}>
                        <div className="w-full lg:min-w-[400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-12">

                            {[
                                { val: '20+', title: 'Web3 & AI companies', desc: 'Meet industry leaders.' },
                                { val: '700+', title: 'Tech Builders', desc: 'A massive developer turnout.' },
                                { val: 'Tour', title: 'Cultural Heritage', desc: 'Explore the beauty of Benue.' },
                                { val: '72hr', title: 'Live Hackathon', desc: 'Non-stop building.' },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col border-l-[3px] border-gray-100 pl-6 hover:border-primary transition-colors duration-500 py-1">
                                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{stat.val}</h3>
                                    <h4 className="text-lg font-medium text-gray-800 mb-1">{stat.title}</h4>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed">{stat.desc}</p>
                                </div>
                            ))}

                        </div>
                    </Reveal>
                </div>

                {/* BOTTOM: ELEGANT IMAGE GALLERY WITH WHITE SPACING */}
                <Reveal delay={300}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">

                        {/* LEFT TALL IMAGE */}
                        <div className="md:col-span-5 h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl bg-gray-50">
                            <img
                                src="/Mask group (2).png"
                                alt="Speaker at event"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            />
                        </div>

                        {/* RIGHT COLUMNS */}
                        <div className="md:col-span-7 flex flex-col gap-6 md:gap-8 h-auto md:h-[600px] lg:h-[700px]">

                            {/* TOP IMAGE AND QUOTE */}
                            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 h-auto md:h-1/2">
                                <div className="w-full sm:w-1/2 h-[250px] md:h-full overflow-hidden rounded-2xl bg-gray-50">
                                    <img
                                        src="/Mask group (1).png"
                                        alt="Event group"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 h-[250px] md:h-full bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col justify-center border border-gray-100">
                                    <p className="text-xl lg:text-2xl font-light text-gray-800 leading-[1.6] italic">
                                        "Spotlighting genuine innovation through groundbreaking and useful products."
                                    </p>
                                </div>
                            </div>

                            {/* BOTTOM WIDE IMAGE */}
                            <div className="w-full h-[250px] md:h-1/2 overflow-hidden rounded-2xl bg-gray-50">
                                <img
                                    src="/Mask group.png"
                                    alt="Audience at event"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </div>

                        </div>

                    </div>
                </Reveal>

            </div>
        </section>
    )
}
