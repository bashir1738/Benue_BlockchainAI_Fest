import Reveal from './Reveal'

const partners = [
    {
        name: 'Benue State Government',
        logo: '/l2.jpeg',
    },
    {
        name: 'National Brands Development - SSG Office',
        logo: '/l4.jpg',
    },
    {
        name: 'Bureau for International Cooperation and Development',
        logo: '/l3.jpg',
    },
 
    {
        name: 'Benue State Emergency Management Agency',
        logo: '/l1.jpg',
    },

]

export default function GovernmentPartners() {
    return (
        <section id="government-partners" className="bg-white pt-20 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 w-full max-w-8xl relative z-10">
                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">Official Support</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-gray-900 leading-tight mb-8 tracking-tight">
                            Backed By
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                            Proudly supported by the Benue State Government and leading institutional partners committed to fostering innovation and development across the continent.
                        </p>
                    </div>
                </Reveal>

                {/* PARTNERS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {partners.map((partner, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="group relative  rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-50">
                             
                                {/* LOGO CONTAINER */}
                                <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-6 relative">
                                    {partner.logo ? (
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                            <span className="text-gray-600 font-medium">Logo</span>
                                        </div>
                                    )}
                                </div>

                                {/* PARTNER INFO */}
                                <h3 className="text-lg   text-gray-900 mb-3 leading-snug">
                                    {partner.name}
                                </h3>
                                

                               
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* FOOTER TEXT */}
                <Reveal delay={400}>
                    <div className=" text-center">
                        <p className="text-gray-600 text-lg font-light">
                            This event is backed by the Benue State Government and leading development agencies
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
