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
                            Event Structure
                        </h2>
                        <p className="text-white text-sm md:text-xl leading-relaxed font-light mt-6">
                            This event merges a high-impact Hackathon, a premier product
                            showcase, creating an ecosystem where emerging talent
                            meets real-world blockchain applications and network.
                        </p>
                    </div>
                </Reveal>

                {/* TIMELINE SECTION */}
                <div className="relative">

                    {/* VERTICAL LINE CONNECTION */}
                    <div className="absolute left-[15px] sm:left-[19px] md:left-[23px] top-6 bottom-16 w-px bg-primary/40 hidden sm:block"></div>

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
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">Hackathon</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    The Hackathon 'Dare to Build' will bring together Web3 and AI developers to work on challenges centred around DeFi, ReFi, DePINs, RWA tokenisation, NFTs, DAOs, and other decentralised AI applications.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Innovation & Development</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Product Showcase</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Networking & Collaboration</li>
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
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">Conference</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    The Summit is a curated 2-day conference and product showcase designed to highlight groundbreaking Web3 and AI applications built by startups, independent builders, and teams from the Benue Blockchain AI Fest community and the wider ecosystem.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Product exhibition</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Fireside chats</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Technical workshops</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Panel discussions</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Strategic partnerships, mentorship and funding.</li>
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
                                <h3 className="text-2xl md:text-3xl font-medium text-primary mb-4 md:mb-6">The Adventure</h3>
                                <p className="text-white text-lg md:text-lg leading-relaxed mb-6 font-light">
                                    As a renowned tourism state, Benue offers the perfect backdrop for attendees to unwind and immerse themselves in local culture and natural attractions. This curated experience includes a guided tour, and an authentic Afrobeats Afterparty.
                                </p>
                                <ul className="flex flex-wrap gap-y-4 gap-x-8">
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Cultural Guided Tour</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> National Museum Tour</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Park Visit</li>
                                    <li className="text-white text-lg sm:text-lg flex items-center gap-2.5 font-light"><div className="w-1 h-1 bg-white rounded-full"></div> Afrobeats Afterparty</li>
                                </ul>
                            </div>

                        </div>
                    </Reveal>

                </div>

            </div>



        </section>
    )
}
