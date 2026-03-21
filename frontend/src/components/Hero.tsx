import Reveal from './Reveal'
import Countdown from './Countdown'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="relative bg-secondary min-h-[90vh] flex flex-col justify-center overflow-hidden pt-30 pb-24 lg:pt-32 border-t border-white/5">


            {/* MESH GRID PATTERN */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* LEFT CONTENT BLOCK */}
                <div className="w-full lg:w-[55%] flex flex-col relative">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-fit mb-8 backdrop-blur-md">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-white text-xs md:text-sm font-medium tracking-wider uppercase">Benue, Nigeria • JUN 17-21, 2026</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl  lg:text-[75px] font-bold text-white leading-[1.05] tracking-tighter mb-8 max-w-2xl">
                            BLOCKCHAIN &<br />
                            <span className="text-transparent bg-clip-text bg-primary">AI UNLEASHED</span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                            Benue's premier event bringing together AI researchers, blockchain developers, and tech entrepreneurs. Experience a 72-hour Hackathon, cutting-edge Product Showcase, and expert-led conference on Web3 and AI technologies shaping Africa's future.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                to="/register"
                                className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-medium text-lg py-4 px-10 text-center rounded-xl transition-all duration-300  hover:-translate-y-1"
                            >
                                Secure Your Ticket
                            </Link>

                            <Link
                                to="/apply?type=hackathon"
                                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium text-lg py-4 px-10 rounded-xl transition-all duration-300 backdrop-blur-sm"
                            >
                                Enter Hackathon
                                <FaArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* RIGHT VISUAL BLOCK */}
                <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
                    <Reveal delay={300}>
                        {/* 3D FLOATING CARDS EFFECT */}
                        <div className="relative w-full aspect-square max-w-125 mx-auto">

                            {/* Card 1: Back/Blurred */}
                            <div className="absolute top-10 right-0 w-[70%] aspect-4/5 bg-background border border-white/10 rounded-3xl backdrop-blur-xl rotate-12 origin-bottom-left shadow-2xl p-6 flex flex-col justify-between transform transition-all hover:rotate-16 active:rotate-16 hover:-translate-y-2 active:-translate-y-2 duration-500 hover:z-30 active:z-30">
                                <div className="self-end w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold opacity-80">03</span>
                                </div>
                                <div>
                                    <div className="text-white/60 font-mono text-sm mb-1">{' BLOCKCHAIN & AI EXPERTS'}</div>
                                    <h3 className="text-xl font-bold text-white leading-tight">Africa's Top Minds</h3>
                                </div>
                            </div>

                            {/* Card 2: Middle/Accent */}
                            <div className="absolute -left-4 top-20 w-[65%] aspect-square bg-linear-to-br from-primary/80 to-blue-500/80 rounded-3xl backdrop-blur-md -rotate-6 origin-bottom-right shadow-[0_20px_50px_rgba(56,189,248,0.3)] p-6 flex flex-col justify-between transform transition-all hover:-translate-y-4 active:-translate-y-4 hover:-rotate-12 active:-rotate-12 duration-500 z-10 hover:z-30 active:z-30">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">02</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white leading-tight mb-2">AI & Web3 Showcase</h3>
                                    <p className="text-white/80 text-sm font-medium">Revolutionary tech solutions.</p>
                                </div>
                            </div>

                            {/* Card 3: Front/Main */}
                            <div className="absolute bottom-10 left-10 w-[75%] aspect-4/3 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between transform transition-all hover:scale-105 active:scale-105 duration-500 z-20 hover:z-30 active:z-30">
                                <div className="flex justify-between items-start">
                                    <div className="bg-secondary/5 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Build the Future
                                    </div>
                                    <span className="text-primary text-4xl font-black opacity-20">01</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-secondary  leading-none mb-6">72-Hour <br /> Hackathon</h3>
                                    
                                    <div className="mb-6">
                                        <Countdown />
                                    </div>

                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-4">
                                        <div className="w-[85%] h-full bg-primary rounded-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-2 text-xs font-bold text-gray-400">
                                        <span>Capacity</span>
                                        <span className="text-secondary">85% Filled</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    )
}
