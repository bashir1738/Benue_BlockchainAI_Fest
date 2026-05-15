import Reveal from './Reveal'

export default function EventStructure() {
    const events = [
        {
            date: 'Monday 27th - Wednesday 29th July',
            title: '72-Hour Hackathon',
            description: "'Dare to Build' - Our flagship hackathon unites 700+ Web3 and AI developers in non-stop innovation. Tackle real-world challenges in DeFi, ReFi, DePINs, RWA tokenisation, NFTs, DAOs, and decentralised AI.",
            highlights: ['72 hours of non-stop building', 'Live mentorship & support', 'Prize pools & pitching']
        },
        {
            date: '30th & 31st July',
            title: 'Conference & Festival',
            description: "The 2-day summit brings together 20+ leading Web3 & AI companies, industry experts, and 700+ builders. Discover cutting-edge products, connect with founders, and explore Africa's most innovative ecosystem.",
            highlights: ['Product exhibitions & demos', 'Fireside chats & keynotes', 'Technical workshops']
        },
        {
            date: 'August Onwards',
            title: 'Post-Festival Bootcamps',
            description: "Continuing our commitment to skill development with intensive bootcamps focused on Blockchain development, AI engineering, and technical entrepreneurship to turn inspiration into practical skills.",
            highlights: ['Specialized developer tracks', 'Industry certifications', 'Startup incubation']
        }
    ];

    return (
        <section id="expect" className="bg-background py-20 relative overflow-hidden">
            
        
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-8xl relative z-10">



                <div className="container mx-auto px-4 sm:px-6 w-full max-w-8xl relative z-10">
                    <Reveal>
                        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                            <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">Foundations</span>
                            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-white leading-tight mb-8 tracking-tight">
                            Event Structure
                            </h2    >
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                A carefully curated journey from rapid innovation to industry-wide collaboration and long-term skill development.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* REWORKED TIMELINE */}
                <div className="relative">
                    
                    {/* CENTRAL LINE (Desktop) */}
                    <div className="absolute left-[31px] md:left-1/2 top-4 bottom-12 w-px bg-white/10 hidden sm:block -translate-x-1/2">
                        <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-transparent to-transparent"></div>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-24">
                        {events.map((event, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 md:gap-16 relative group`}>
                                
                                {/* TIMELINE NODE */}
                                <div className="absolute left-[31px] md:left-1/2 top-4 md:top-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-20 -translate-x-1/2 -translate-y-1/2 hidden sm:block group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(0,218,153,0.5)]"></div>

                                {/* DATE COLUMN */}
                                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                                    <Reveal delay={i * 100}>
                                        <span className="text-primary font-mono text-sm md:text-lg mb-2 block uppercase tracking-widest">{event.date}</span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{event.title}</h3>
                                    </Reveal>
                                </div>

                                {/* CONTENT CARD */}
                                <div className="w-full md:w-1/2 pl-6 md:pl-0">
                                    <Reveal delay={i * 200}>
                                        <div className="bg-white/3 border border-white/5 p-8 md:p-10 rounded-4xl backdrop-blur-sm group-hover:bg-white/6 group-hover:border-white/10 transition-all duration-500">
                                            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                                {event.description}
                                            </p>
                                            <ul className="flex flex-col gap-4">
                                                {event.highlights.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-4 text-white/90 font-light text-base md:text-lg">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Reveal>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

               

            </div>
        </section>
    )
}

