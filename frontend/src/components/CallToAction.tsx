import Reveal from './Reveal'

export default function CallToAction() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl">
                <Reveal delay={100}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-stretch">

                        {/* Apply to Showcase Card */}
                        <div className="flex flex-col ">
                            <div className="w-full aspect-4/5  sm:aspect-square md:aspect-5/6 lg:aspect-square mb-8 rounded-4xl overflow-hidden shrink-0">
                                <img
                                    src="/showcase.png"
                                    alt="Phone UI showcasing app"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-medium text-primary mb-5 leading-tight tracking-tight">
                                Apply to Showcase
                            </h2>
                            <p className="text-[#353535] text-lg font-normal leading-relaxed mb-5 md:pr-10 grow">
                                Show us what you have built and talk to us about why you built it. Get feedback from users and partners on areas of growth.
                            </p>
                            <div>
                                <button className="bg-green hover:bg-green/80 text-white font-medium py-[10px] lg:py-[9px] px-8 lg:px-9 cursor-pointer rounded-lg transition-all hover:-translate-y-0.5">
                                    Apply Now
                                </button>
                            </div>
                        </div>

                        {/* Apply as Speaker Card */}
                        <div className="flex flex-col">
                            <div className="w-full aspect-4/5 sm:aspect-square md:aspect-5/6 lg:aspect-square mb-8 rounded-4xl overflow-hidden shrink-0">
                                <img
                                    src="/speaker.png"
                                    alt="Speaker speaking to crowd"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-medium text-primary mb-5 leading-tight tracking-tight">
                                Apply as Speaker
                            </h2>
                            <p className="text-[#353535] text-lg font-normal leading-relaxed mb-5 md:pr-10 grow">
                                Share your expertise, insights, and experiences with the Web3 community. Join our technical workshops and panel discussions.
                            </p>
                            <div>
                                <button className="bg-green hover:bg-green/80 text-white font-medium py-[14px] lg:py-[9px] px-8 lg:px-9 cursor-pointer rounded-lg transition-all hover:-translate-y-0.5">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
