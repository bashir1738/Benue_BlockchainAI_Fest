import { FaArrowRight } from 'react-icons/fa6'
import Reveal from './Reveal'

export default function EventStructure() {
    return (
        <section id="expect" className="bg-background py-16 md:py-24 relative overflow-hidden">

  {/* MESH GRID PATTERN */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>


            {/* FAINT VERTICAL BACKGROUND LINES */}
            <div className="absolute inset-0 pointer-events-none flex justify-between px-10 md:px-20 opacity-5 sm:opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-full w-px bg-black/60"></div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl relative z-10">

                {/* HEADER SECTION */}
                <Reveal>
                    <div className="mb-16 md:mb-24 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-primary leading-tight mb-6">
                            What to Expect in Benue
                        </h2>
                        <p className="text-white text-sm md:text-xl leading-relaxed font-light mt-6">
                            Benue Blockchain AI Fest combines a rigorous 3-day hackathon, industry-leading tech conference, and cultural immersion. Connect with 500+ builders, meet 20+ Web3 & AI companies, and experience the heart of Nigeria's innovation ecosystem.
                        </p>
                    </div>
                </Reveal>

                {/* TIMELINE SECTION */}
                <div className="relative">

                    {/* VERTICAL LINE CONNECTION */}
                    <div className="absolute left-3.75 sm:left-4.75 md:left-5.75 top-6 bottom-16 w-px bg-primary/40 hidden sm:block"></div>

                    {/* TIMELINE ITEM 1 */}
                    <Reveal delay={150}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 mb-10 md:mb-12 w-full relative">

                            <div className="flex items-center sm:items-start pt-1 md:pt-4 gap-4 w-full sm:w-32 md:w-36 shrink-0">
                                <div className="bg-primary text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_15px_rgba(0,218,153,0.3)]">
                                    <FaArrowRight className="text-sm md:text-base" />
                                </div>
                                <span className="text-white font-medium text-base md:text-lg min-w-max mt-1 md:mt-2.5">19th Aug</span>
                            </div>

                            {/* CARD */}
                            <div className="bg-secondary rounded-2xl md:rounded-3xl p-4 md:p-6 w-full md:flex-1 shadow-lg ml-auto sm:ml-0">
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">72-Hour Hackathon</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    'Dare to Build' - Our flagship hackathon unites 700+ Web3 and AI developers in non-stop innovation. Tackle real-world challenges in DeFi, ReFi, DePINs, RWA tokenisation, NFTs, DAOs, and decentralised AI. Build, compete, and showcase your breakthrough ideas.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> 72 hours of non-stop building</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Live mentorship & technical support</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Prize pools & investor pitching</li>
                                </ul>
                            </div>

                        </div>
                    </Reveal>

                    {/* TIMELINE ITEM 2 */}
                    <Reveal delay={250}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 mb-10 md:mb-12 w-full relative">

                            <div className="flex items-center sm:items-start pt-1 md:pt-4 gap-4 w-full sm:w-32 md:w-36 shrink-0">
                                <div className="bg-primary text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_15px_rgba(0,218,153,0.3)]">
                                    <FaArrowRight className="text-sm md:text-base" />
                                </div>
                                <span className="text-white font-medium text-base md:text-lg min-w-max mt-1 md:mt-2.5">22nd Aug</span>
                            </div>

                            {/* CARD */}
                            <div className="bg-secondary rounded-2xl md:rounded-3xl p-4 md:p-6 w-full md:flex-1 shadow-lg ml-auto sm:ml-0">
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">Tech Conference Summit</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    The 2-day summit brings together 20+ leading Web3 & AI companies, industry experts, and 700+ developers. Discover cutting-edge products, connect with founders and VCs, attend technical deep-dives, and explore partnership opportunities with Africa's most innovative ecosystem.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Product exhibitions & demos</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Industry fireside chats & keynotes</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Technical workshops & bootcamps</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Investor pitch & funding rounds</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Strategic partnerships & mentorship</li>
                                </ul>
                            </div>

                        </div>
                    </Reveal>

                    {/* TIMELINE ITEM 3 */}
                    <Reveal delay={350}>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 w-full relative">

                            <div className="flex items-center sm:items-start pt-1 md:pt-4 gap-4 w-full sm:w-32 md:w-36 shrink-0">
                                <div className="bg-primary text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_15px_rgba(0,218,153,0.3)]">
                                    <FaArrowRight className="text-sm md:text-base" />
                                </div>
                                <span className="text-white font-medium text-base md:text-lg min-w-max mt-1 md:mt-2.5">23rd Aug</span>
                            </div>

                            {/* CARD */}
                            <div className="bg-secondary rounded-2xl md:rounded-3xl p-4 md:p-6 w-full md:flex-1 shadow-lg ml-auto sm:ml-0">
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">Benue Experience</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    Celebrate your achievements while experiencing the warmth and culture of Nigeria. Benue, the 'Food Basket of Nigeria,' offers a unique blend of history, natural beauty, and vibrant community. Unwind with fellow innovators in an unforgettable cultural experience.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Guided cultural heritage tours</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> National Museum & historical sites</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Nature reserves & scenic parks</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Authentic Afrobeats celebration & afterparties</li>
                                </ul>
                            </div>

                        </div>
                    </Reveal>

                </div>

            </div>



        </section>
    )
}
