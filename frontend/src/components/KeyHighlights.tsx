import Reveal from './Reveal'

export default function KeyHighlights() {
    return (
        <section className="bg-background pb-16 md:pb-24 pt-4 md:pt-12 relative overflow-hidden">

            {/* FAINT VERTICAL BACKGROUND LINES (Continued from EventStructure) */}
            <div className="absolute inset-0 pointer-events-none flex justify-between px-10 md:px-20 opacity-5 sm:opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-full w-px bg-black/60"></div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl ">
                <div className=" w-full z">

                    {/* HIGHLIGHTS HEADER BLOCK */}
                    <Reveal>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 md:mb-24 gap-10">
                            {/* TEXT */}
                            <div className="max-w-xl relative z-10 w-full md:w-1/2">
                                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-primary leading-tight mb-6 mt-10">
                                    Key Highlights
                                </h2>
                                <p className="text-white text-sm md:text-xl leading-relaxed font-light mt-6 max-w-sm">
                                    Benue Blockchain AI Fest is set to be the best and most refreshing
                                    product festival yet, know more about the event
                                    below
                                </p>
                            </div>

                            {/* SVG GRAPHIC */}
                            <div className="hidden md:flex w-1/2 justify-center lg:justify-start items-center mt-4 lg:-ml-10 pt-4">
                                <div className="w-64 md:w-80 lg:w-[450px] relative">
                                    <img
                                        src="/Union.svg"
                                        alt="Puzzle shape"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* HIGHLIGHTS CARDS - DESKTOP (Overlapping) */}
                    <Reveal delay={200}>
                        <div className="hidden md:flex flex-row items-center w-full justify-center lg:pr-10 mb-10 overflow-visible relative group/deck">
                            {[
                                { id: '01', title: 'What is Benue Fest', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '02', title: 'What to expect at Benue Fest', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '03', title: 'The Most important web3 Conference', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '04', title: 'Why Visit Benue', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                            ].map((card, i) => (
                                <div
                                    key={i}
                                    className={`
                                            relative bg-primary pb-14 rounded-lg overflow-hidden
                                            shadow-2xl
                                            w-[360px] lg:w-[460px] xl:w-[570px] 
                                            h-[300px] lg:h-[360px] xl:h-[340px] shrink-0 
                                            transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                                            hover:-translate-y-4 hover:z-50 hover:shadow-[-25px_15px_40px_rgba(0,0,0,0.25)]
                                            ${i !== 0 ? '-ml-56 lg:-ml-[280px] xl:-ml-[380px]' : ''}
                                        `}
                                >
                                    <div className="p-8 lg:p-10 xl:p-12 h-full w-[360px] lg:w-[460px] xl:w-[500px] flex flex-col justify-center">
                                        <div className="flex items-center gap-4 lg:gap-6 mb-6 mt-2">
                                            <span className="text-background  font-black text-[90px] lg:text-[120px] leading-none shrink-0 tracking-tighter">{card.id}</span>
                                            <h3 className="text-white text-xl lg:text-2xl font-semibold leading-tight whitespace-normal ">{card.title}</h3>
                                        </div>
                                        <p className="text-white text-[15px] lg:text-[17px] font-medium leading-relaxed pr-6 opacity-100">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* HIGHLIGHTS CARDS - MOBILE (Stacked) */}
                    <Reveal delay={200}>
                        <div className="flex md:hidden flex-col gap-6 w-full mb-10">
                            {[
                                { id: '01', title: 'What is Benue Fest', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '02', title: 'What to expect at Benue Fest', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '03', title: 'The Most important web3 Conference', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                                { id: '04', title: 'Why Visit Benue', text: 'Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.' },
                            ].map((card, i) => (
                                <div key={i} className="bg-primary rounded-xl p-6 shadow-xl w-full">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-background  font-black text-[60px] leading-none shrink-0 tracking-tighter">{card.id}</span>
                                        <h3 className="text-white text-[17px] font-bold leading-tight">{card.title}</h3>
                                    </div>
                                    <p className="text-white text-[14px] font-medium leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    )
}
