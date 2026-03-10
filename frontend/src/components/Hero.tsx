

const PixelArrow = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className}>
        {/* Main horizontal line */}
        <rect x="4" y="18" width="28" height="4" />
        {/* Tip */}
        <rect x="32" y="18" width="4" height="4" />

        {/* Top diagonal branch */}
        <rect x="28" y="14" width="4" height="4" />
        <rect x="24" y="10" width="4" height="4" />

        {/* Bottom diagonal branch */}
        <rect x="28" y="22" width="4" height="4" />
        <rect x="24" y="26" width="4" height="4" />
    </svg>
)

import Reveal from './Reveal'

export default function Hero() {
    return (
        <section className="relative bg-secondary overflow-hidden py-16 md:py-24 border-t border-white/5 grow flex flex-col justify-center">

            {/* BACKGROUND SHAPES */}
            <img
                src="/Union.svg"
                alt=""
                className="absolute w-48 md:w-80 lg:w-96 opacity-50 -left-20 md:-left-20 top-8 md:top-48 z-0 select-none object-contain"
            />
            <img
                src="/Union.svg"
                alt=""
                className="absolute w-48 md:w-80 lg:w-96 -right-16 md:right-24 bottom-10 md:bottom-20 opacity-50 rotate-180 z-0 select-none object-contain"
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">

                {/* TEXT CONTENT */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 px-2 md:px-0">

                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-sans font-medium text-primary leading-tight md:w-1/2 tracking-tight">
                            Come Celebrate Web3 <br className="hidden md:block" /> and Have Fun doing it!
                        </h2>

                        <div className="text-white mt-2 md:mt-4 text-sm md:text-base leading-relaxed md:w-5/12 lg:w-1/3">
                            <p className="mb-4 text-white">
                                The Web3 Jos Community Conference,
                                <br className="hidden lg:block" /> Products Showcase and Hackathon
                            </p>
                            <p className="text-[13px] md:text-sm lg:text-base tracking-wide">
                                <span className="text-primary font-bold">19th - 23rd August 2025 | </span>
                                <span className="text-white font-bold ml-1">Benue, Nigeria.</span>
                            </p>
                        </div>

                    </div>
                </Reveal>

                {/* CARDS SECTION */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl p-8 flex flex-col justify-between aspect-auto h-64 md:h-72 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden">
                            <div className="flex justify-end">
                                <span className="text-secondary text-2xl lg:text-3xl  font-medium">01</span>
                            </div>
                            <div className="flex justify-between items-end mt-auto">
                                <h3 className="text-secondary text-2xl lg:text-3xl font-medium w-2/3 leading-snug">
                                    Register to <br className="hidden sm:block" /> Attend Event
                                </h3>

                                {/* PIXEL ARROW REPLICA */}
                                <div className="text-secondary text-3xl group-hover:translate-x-2 transition-transform opacity-90 pb-1">
                                    <PixelArrow className="w-8 h-8 md:w-10 md:h-10  shrink-0 group-hover:translate-x-2 transition-transform duration-300 mb-1" />
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-primary rounded-xl p-8 flex flex-col justify-between aspect-auto h-64 md:h-72 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all group relative overflow-hidden">
                            <div className="flex justify-end">
                                <span className="text-secondary text-2xl lg:text-3xl  font-medium">02</span>
                            </div>
                            <div className="flex justify-between items-end mt-auto">
                                <h3 className="text-secondary text-2xl lg:text-3xl font-medium w-2/3 leading-snug">
                                    Apply for <br className="hidden sm:block" /> Hackathon
                                </h3>

                                {/* PIXEL ARROW REPLICA */}
                                <div className="text-secondary text-3xl group-hover:translate-x-2 transition-transform opacity-90 pb-1">
                                    <PixelArrow className="w-8 h-8 md:w-10 md:h-10 text-white shrink-0 group-hover:translate-x-2 transition-transform duration-300 mb-1" />

                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
