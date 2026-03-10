import Reveal from './Reveal'
import { Link } from 'react-router-dom'

export default function CallToAction() {
    return (
        <section className="bg-gray-50 py-24 md:py-32 xl:py-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl">

                {/* HEADER SECTION */}
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6 block">Get Involved</span>
                        <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Take the Stage.
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-[1.8] font-light">
                            Whether you want to showcase your latest product or share your insights with the community, Benue Fest is your platform.
                        </p>
                    </div>
                </Reveal>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

                    {/* SHOWCASE CARD */}
                    <Reveal delay={150}>
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full group">
                            <div className="h-64 sm:h-80 md:h-96 w-full bg-gray-100 overflow-hidden relative">
                                <img
                                    src="/showcase.png"
                                    alt="Showcase App UI"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col grow">
                                <h3 className="text-2xl md:text-3xl lg:text-[32px] font-medium text-gray-900 mb-4 tracking-tight">
                                    Apply to Showcase
                                </h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 grow">
                                    Show us what you have built and talk to us about why you built it. Get feedback from users and partners on areas of growth.
                                </p>
                                <div>
                                    <Link
                                        to="/apply?type=showcase"
                                        className="inline-block bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white font-medium py-3 px-8 rounded-xl transition-colors duration-300 w-full sm:w-auto text-center"

                                    >
                                        Submit Showcase App
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* SPEAKER CARD */}
                    <Reveal delay={250}>
                        <div className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full group">
                            <div className="h-64 sm:h-80 md:h-96 w-full bg-gray-100 overflow-hidden relative">
                                <img
                                    src="/speaker.png"
                                    alt="Speaker on Stage"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col grow">
                                <h3 className="text-2xl md:text-3xl lg:text-[32px] font-medium text-gray-900 mb-4 tracking-tight">
                                    Apply as Speaker
                                </h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 grow">
                                    Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.
                                </p>
                                <div>
                                    <Link
                                        to="/apply?type=speaker"
                                        className="inline-block bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white font-medium py-3 px-8 rounded-xl transition-colors duration-300 w-full sm:w-auto text-center"
                                    >
                                        Apply for Speaking Slot
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}
