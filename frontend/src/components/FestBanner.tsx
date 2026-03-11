import Reveal from './Reveal'

export default function FestBanner() {
    return (
        <section className="relative w-full py-32 md:py-48 lg:py-60 bg-primary overflow-hidden flex flex-col items-center justify-center ">

            {/* ABSTRACT BACKGROUND ARTWORK */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* Darker primary Top Left */}
                <div className="absolute top-0 left-0 w-[60%] h-[110%] bg-background rounded-br-[40%] opacity-90 mix-blend-multiply"></div>

                {/* Large Subtle Letters/Shapes */}
                <div className="absolute -top-20 -left-10 text-[600px] font-black leading-none text-primary opacity-30 blur-[2px]">B</div>
                <div className="absolute bottom-25 right-[10%] text-[400px] font-black leading-none text-secondary opacity-20 rotate-12">F</div>

                <div className="absolute top-1/4 right-[5%] w-125 h-125 bg-background rounded-[80px] rotate-25 opacity-50 mix-blend-color-burn blur-xs"></div>

                {/* Geometrical Square/Rect blocks matching the reference */}
                <div className="absolute top-[10%] left-[45%] w-32 h-32 bg-primary rounded-3xl opacity-70"></div>
                <div className="absolute top-[25%] left-[25%] w-16 h-16 bg-primary rounded-xl opacity-90 scale-125"></div>
                <div className="absolute bottom-[35%] right-[40%] w-40 h-20 bg-secondary rounded-2xl opacity-40"></div>
                <div className="absolute bottom-[10%] right-[30%] w-60 h-40 bg-primary rounded-3xl opacity-60"></div>
                <div className="absolute top-[60%] left-[10%] w-24 h-48 bg-secondary rounded-r-3xl opacity-50"></div>

                {/* Large Wavy Dark Overlay */}
                <svg className="absolute top-1/2 left-0 w-[200%] md:w-[150%] h-auto min-w-350 -translate-y-1/2 text-secondary opacity-70 mix-blend-multiply" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,213.3C672,203,768,117,864,101.3C960,85,1056,139,1152,176C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="currentColor" fillOpacity="0.6" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                {/* Solid 'T' Shape on Bottom Right */}
                <div className="absolute -bottom-2 right-[8%] flex flex-col items-center opacity-90 z-10">
                    <div className="w-45 h-12.5 md:h-17.5 bg-primary rounded-t-lg"></div>
                    <div className="w-10 md:w-15 h-62.5 bg-primary"></div>
                </div>
            </div>

            {/* FOREGROUND CONTENT */}
            <Reveal delay={200}>
                <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mix-blend-normal mt-10 md:mt-16">

                    {/* BIG TEXT: BENUEFEST */}
                    <div className="relative">
                        <h2
                            className="text-white text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] drop-shadow-2xl flex flex-wrap justify-center gap-2 md:gap-4"
                            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                        >
                            <span>BENUE</span>
                            <span>FEST</span>
                        </h2>

                        {/* Faux letter cutouts for custom geometric logo look */}
                        <div className="absolute top-[40%] left-[8%] w-[5%] h-[20%] bg-primary rounded-sm mix-blend-color hidden md:block opacity-60"></div>
                    </div>

                    {/* SUBTITLE: {Blockchain AI Conference} */}
                    <div className="relative mt-8 md:mt-12 group z-30">
                        <div className="bg-primary border-2 md:border-4 border-white px-6 py-2 md:px-12 md:py-4 lg:px-16 lg:py-5 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:scale-105 hover:opacity-90">
                            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold font-mono tracking-widest whitespace-nowrap">
                                {'{Blockchain AI Conference}'}
                            </span>
                        </div>
                    </div>

                </div>
            </Reveal>

        </section>
    )
}
