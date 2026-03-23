import Reveal from './Reveal'

export default function KeyHighlights() {
    const highlights = [
        { id: '01', title: 'What is Benue Fest', text: 'Africa\'s premier Blockchain & AI festival. An inaugural 5-day celebration of innovation, featuring a non-stop hackathon, industry conference, and immersive cultural experiences in Nigeria\'s historic Benue state.' },
        { id: '02', title: 'What to expect at Benue Fest', text: '700+ talented developers, 20+ leading Web3 & AI companies, 72-hour intensive hackathon, keynote speakers, technical workshops, investor pitching rounds, and unparalleled networking opportunities.' },
        { id: '03', title: 'The Most important web3 Conference', text: 'World-class 2-day summit featuring product showcases, fireside chats with industry leaders, bootcamps, panel discussions on blockchain & AI, strategic partnerships, mentorship opportunities, and live funding pitches.' },
        { id: '04', title: 'Why Visit Benue', text: 'Experience Nigeria\'s unique cultural heritage, natural attractions, and warm hospitality. From guided cultural tours to the National Museum, nature reserves, Benue offers unforgettable memories beyond the conference.', },
    ];

    return (
        <section id="highlights" className="bg-white py-24 md:py-32 relative overflow-hidden">
            
            {/* AMBIENT BACKGROUND DECORATION */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/3 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-8xl relative z-10">
                
                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">Foundations</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-background leading-tight mb-8 tracking-tight">
                        Key Highlights
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                             Discover the pillars that make Benue Blockchain AI Fest the most refreshing and impactful technology gathering in the region.
                        </p>
                    </div>
                </Reveal>


                {/* DESKTOP STACKED DECK */}
                <div className="hidden lg:flex flex-row items-center w-full justify-center lg:pr-10 mb-20 overflow-visible relative group/deck pt-10">
                    {highlights.map((card, i) => (
                        <Reveal key={i} delay={i * 100} className="hover:z-50 hover:relative transition-all duration-300">
                            <div
                                className={`
                                    relative bg-white border border-black/5 rounded-[2.5rem] p-10 lg:p-14 
                                    shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                                    w-[320px] lg:w-[520px] xl:w-[620px] 
                                    h-[400px] lg:h-[480px] shrink-0 
                                    transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                    hover:-translate-y-8 hover:bg-white hover:border-primary/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
                                    ${i !== 0 ? '-ml-[150px] lg:-ml-[260px] xl:-ml-[330px]' : ''}
                                `}
                            >
                                <div className="absolute top-8 left-12 text-background/30 font-bold text-[120px] leading-none select-none group-hover:text-primary/10 transition-colors pointer-events-none">
                                    {card.id}
                                </div>
                                <div className="h-full flex flex-col justify-end relative z-10">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-background mb-6 leading-tight max-w-[80%]">{card.title}</h3>
                                    <div className="w-12 h-1 bg-red mb-8 group-hover:w-full transition-all duration-700"></div>
                                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-light">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* MOBILE HORIZONTAL SCROLL - IMPROVED POSITIONING */}
                <Reveal delay={200}>
                    <div className="flex lg:hidden overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-none -mx-4 px-4 gap-5 pb-12">
                        {/* START PADDING */}
                        <div className="shrink-0 w-0"></div>
                        
                        {highlights.map((card, i) => (
                            <div key={i} className="shrink-0 w-[280px] snap-start">
                                <div className="bg-white border border-black/5 rounded-3xl p-8 h-[380px] flex flex-col justify-end relative overflow-hidden group shadow-sm">
                                    <span className="absolute -top-4 -left-4 text-background/30 font-black text-7xl leading-none select-none group-hover:text-primary/10 transition-colors">
                                        {card.id}
                                    </span>
                                    <div className="relative z-10 uppercase tracking-[0.2em] text-primary/40 font-mono text-[10px] mb-2">Foundation {card.id}</div>
                                    <h3 className="text-xl font-bold text-background mb-4 relative z-10 leading-tight">{card.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-light relative z-10">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* END PADDING */}
                        <div className="shrink-0 w-4"></div>
                    </div>
                </Reveal>

              
            </div>
        </section>
    )
}

