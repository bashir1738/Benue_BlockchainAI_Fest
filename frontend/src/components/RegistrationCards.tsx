
import Reveal from './Reveal'

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

export default function RegistrationCards() {
    return (
        <section className="bg-secondary py-20 md:py-32 relative overflow-hidden">
            {/* Background Decorative Blocks */}
            <div className="absolute -left-20 bottom-0 pointer-events-none z-0">
                <img src="/Union.svg" alt="Decorative background shape" className="w-[240px] md:w-[380px]  object-contain" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl relative z-10">
                <Reveal delay={150}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 w-full min-h-[250px] md:min-h-[320px] flex flex-col justify-between shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full flex justify-end">
                                <span className="text-primary text-2xl md:text-[28px] font-medium">01</span>
                            </div>
                            <div className="w-full flex justify-between items-end gap-2">
                                <h3 className="text-primary text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-medium leading-tight">
                                    Register to<br />Attend Event
                                </h3>
                                <PixelArrow className="w-8 h-8 md:w-10 md:h-10 text-primary shrink-0 group-hover:translate-x-2 transition-transform duration-300 mb-1" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-10 w-full min-h-[250px] md:min-h-[320px] flex flex-col justify-between shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 group cursor-pointer">
                            <div className="w-full flex justify-end">
                                <span className="text-white text-2xl md:text-[28px] font-medium">02</span>
                            </div>
                            <div className="w-full flex justify-between items-end gap-2">
                                <h3 className="text-white text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-medium leading-tight">
                                    Apply for<br />Hackathon
                                </h3>
                                <PixelArrow className="w-8 h-8 md:w-10 md:h-10 text-white shrink-0 group-hover:translate-x-2 transition-transform duration-300 mb-1" />
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    )
}
