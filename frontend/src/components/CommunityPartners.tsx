import Reveal from './Reveal';

const partners = [
    { name: 'Partner 1', logo: '/p1.png' },
    { name: 'Partner 4', logo: '/p4.jpeg' },
    { name: 'Partner 7', logo: '/p7.jpeg' },
    { name: 'Partner 5', logo: '/p5.jpeg' },
    { name: 'Partner 6', logo: '/p6.jpeg' },
    { name: 'Partner 8', logo: '/p8.png' },
    { name: 'Partner 2', logo: '/p2.jpeg' },
    { name: 'Partner 3', logo: '/p3.jpeg' },
    { name: 'Partner 9', logo: '/p9.jpeg' },
];

export default function CommunityPartners() {
    return (
        <section id="partners" className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 w-full max-w-8xl">
                <Reveal>
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6">Our Network</span>
                        <h2 className="text-[32px] md:text-5xl font-medium text-gray-900 leading-tight mb-8 tracking-tight">
                            Community Partners
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                            Proudly collaborating with forward-thinking organizations to foster innovation and growth within the Benue tech ecosystem.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
                        {partners.map((partner, i) => (
                            <div 
                                key={i} 
                                className="w-full max-w-[180px]  transition-all duration-500  transform hover:scale-120"
                            >
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    className="w-full h-auto object-contain max-h-40"
                                />
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-secondary flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/30 transition-colors duration-700" />
                        
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-white text-2xl md:text-3xl font-medium mb-4">Become a Community Partner</h3>
                            <p className="text-gray-400 text-lg font-light">Join us in shaping the future of Blockchain and AI in Benue.</p>
                        </div>
                        
                            <a  
                                href="mailto:bbaifestival@gmail.com"
                            className="relative z-10 bg-primary hover:bg-white text-secondary font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Partner with Us
                            </a>
                        </div>
                </Reveal>
            </div>
        </section>
    );
}
