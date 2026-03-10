import Reveal from './Reveal'

export default function About() {
    return (
        <section className="bg-white py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl relative z-10">

                {/* HEADLINE */}
                <Reveal>
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[28px] sm:text-4xl md:text-5xl font-semibold text-primary leading-[1.35] lg:leading-[1.4] tracking-tight">
                            Benue Blockchain AI Fest[2025] in its inaugural edition aims to spotlight innovation in Blockchain technology and use through groundbreaking and useful products built to onboard the next billion users!
                        </h2>
                    </div>
                </Reveal>

                {/* TWO COLUMNS AND BG MAP */}
                <div className="relative">

                    {/* BACKGROUND MAP */}
                    <div className="absolute -top-20 md:-top-32 right-[-20%] md:-right-10  w-[140%] md:w-[80%] max-w-[750px] z-0 pointer-events-none opacity-90 md:opacity-100 flex justify-end mix-blend-multiply">
                        <img
                            src="/map.png"
                            alt="Benue Map outline"
                            className="w-96 h-auto object-contain"
                        />
                    </div>

                    {/* CONTENT COLUMNS */}
                    <Reveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 relative z-10  w-full ">
                            <p className="text-[#353535] text-lg font-medium leading-[1.8] text-justify md:text-left">
                                African builders have built great products over the years, but these products are sometimes unknown, and growth is in isolation and slow-paced. Hence, the motivation to host a 'Products' 'Festival', the combination of which gives birth to "BENUE FEST".
                            </p>
                            <p className="text-[#353535] text-lg font-medium leading-[1.8] text-justify md:text-left">
                                Benue Fest will focus on the technology, its real-world use, its impact on daily lives, and its possibilities. It's not just a conference but a platform to bring your craziest ideas to life.
                            </p>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}
