import Reveal from './Reveal'

export default function About() {
    return (
        <section id="about" className="bg-white py-24 md:py-32 xl:py-40 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl relative z-10">

                {/* BACKGROUND MAP - subtle watermark style */}
                <div className="absolute top-[-10%] right-[-5%] w-[120%] md:w-[80%] lg:w-[60%] max-w-[800px] z-0 pointer-events-none opacity-[0.04] flex justify-end">
                    <img
                        src="/map.png"
                        alt="Benue Map outline"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="flex flex-col gap-16 lg:gap-24 relative z-10">

                    {/* TOP AREA: Large Headline */}
                    <Reveal>
                        <div className="max-w-4xl">
                            <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6 block">The Genesis</span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium text-gray-900 leading-[1.1] tracking-tight">
                                Spotlighting innovation to onboard the <span className="text-primary italic">next billion.</span>
                            </h2>
                        </div>
                    </Reveal>

                    {/* BOTTOM AREA: Two Text Columns */}
                    <Reveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 w-full xl:w-10/12 xl:ml-auto">
                            <div className="flex flex-col">
                                <p className="text-gray-600 text-lg md:text-xl font-light leading-[1.8]">
                                    African builders have built great products over the years, but these products are sometimes unknown, and growth is in isolation and slow-paced. Hence, the motivation to host a 'Products' 'Festival', the combination of which gives birth to <span className="font-medium text-gray-900">BENUE FEST</span>.
                                </p>
                            </div>

                            <div className="flex flex-col justify-end">
                                <div className="border-l-[3px] border-primary pl-6">
                                    <p className="text-gray-500 text-lg font-light leading-[1.8]">
                                        Benue Fest will focus on the technology, its real-world use, its impact on daily lives, and its possibilities. It's not just a conference but a platform to bring your craziest ideas to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}
