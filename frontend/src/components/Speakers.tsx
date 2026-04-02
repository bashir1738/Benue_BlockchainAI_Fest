import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const speakers = [
    {
        name: 'Rev. Fr. Dr. Hyacinth Iormem Alia',
        role: 'Executive Governor',
        company: 'Benue State',
        photo: '/Governor Hyacinth Alia .jpg'
    },
    {
        name: 'Barr. Dr. Sam Ode',
        role: 'Deputy Governor',
        company: 'Benue State',
        photo: '/Deputy Gov Dr Sam Ode.jpg.jpeg'
    },

    {
        name: 'Hon. Kwaghgba Amande',
        role: 'Hon. Commissioner for Communications, Innovation, and Digital Economy',
        company: 'Benue State',
        photo: '/Hon. Kwaghgba Amande.png'
    },
    {
        name: ' Hon. Terwase Gbande-Hembaor (also referred to as Gbande Hembaor Terwase)',
        role: 'Director General/CEO',
        company: 'Benue Digital Infrastructure Company (BDIC)',
        photo: '/Hon. Terwase Gbande-Hembaor.jpeg'
    },
    
    
];

export default function Speakers() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="speakers" className="bg-background py-24 md:py-32 relative overflow-hidden">
            {/* MESH GRID PATTERN */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 w-full max-w-8xl relative z-10">
                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">World-Class Insights</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-white leading-tight mb-8 tracking-tight">
                            Meet Our Stakeholders
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                            We're bringing together the brightest minds in Blockchain and AI to share their knowledge and vision for the future of Africa.
                        </p>
                    </div>
                </Reveal>

                <div className="flex md:grid overflow-x-auto md:overflow-hidden flex-nowrap md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 pb-8 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
                    {speakers.map((speaker, i) => {
                        const cardContent = (
                            <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 mr-2 md:mr-0 grow flex flex-col">
                                {/* IMAGE OR PLACEHOLDER */}
                                <div className="aspect-4/5 sm:aspect-3/4 bg-white/5 relative flex items-center justify-center overflow-hidden">
                                    {speaker.photo ? (
                                        <img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                                    ) : (
                                        <div className="relative z-20 w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center transition-colors duration-500">
                                            <div className="w-10 h-10 bg-white/10 rounded-full animate-pulse"></div>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6 sm:p-8 relative z-20 grow flex flex-col">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 transition-colors">{speaker.name}</h3>
                                    <div className="flex flex-col gap-1 mt-auto">
                                        <span className="text-primary font-medium text-xs sm:text-sm tracking-wide uppercase">{speaker.role}</span>
                                        <span className="text-gray-400 font-light text-sm sm:text-base">{speaker.company}</span>
                                    </div>
                                </div>
                            </div>
                        );

                        return isMobile ? (
                            <div key={i} className="shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-center flex flex-col">
                                {cardContent}
                            </div>
                        ) : (
                            <Reveal key={i} delay={i * 100} className="shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-center flex flex-col">
                                {cardContent}
                            </Reveal>
                        );
                    })}
                </div>

                
               
            </div>
        </section>
    );
}
