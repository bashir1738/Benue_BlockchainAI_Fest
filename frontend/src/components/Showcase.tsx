import Reveal from './Reveal'

export default function Showcase() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-12 md:gap-24">

                    {/* LEFT COLUMN */}
                    <Reveal>
                        <div className=" flex flex-col items-start">
                            <h2 className="text-4xl md:text-5xl font-medium text-primary leading-tight mb-6">
                                Products Showcase <br className="hidden md:block" /> and Hackathon
                            </h2>
                            <p className="text-black  text-base leading-relaxed mb-12 max-w-md">
                                Benue Blockchain AI Fest 2025 in its inaugural edition aims to
                                spotlight innovation in Blockchain and AI technology and
                                use through groundbreaking and useful products
                                built to onboard the next billion users!
                            </p>

                            {/* PUZZLE SVG GRAPHIC */}
                            <div className="w-64 md:w-80 hidden md:block relative ml-4">
                                <img
                                    src="/Union.svg"
                                    alt="Puzzle shape"
                                    className="w-full object-contain md:-ml-8" // slight offset to match design
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* RIGHT COLUMN (STATS) */}
                    <Reveal delay={200}>
                        <div className="flex flex-col justify-center md:justify-start space-y-6 md:space-y-12">

                            {/* STAT 1 */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">20+ companies</h3>
                                <p className="text-primary text-sm md:text-base font-medium w-10/12 md:w-2/3">
                                    Get to meet top web3 & AI companies at the conference
                                </p>
                            </div>

                            {/* STAT 2 */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">700+</h3>
                                <p className="text-primary text-sm md:text-base font-medium w-10/12 md:w-2/3">
                                    Tech Builders in attendance
                                </p>
                            </div>

                            {/* STAT 3 */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Cultural Tour</h3>
                                <p className="text-primary text-sm md:text-base font-medium w-10/12 md:w-2/3">
                                    Explore the beauty of Benue state.
                                </p>
                            </div>

                            {/* STAT 4 */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">72 Hours</h3>
                                <p className="text-primary text-sm md:text-base font-medium w-10/12 md:w-2/3">
                                    3 days Hackathon
                                </p>
                            </div>

                        </div>
                    </Reveal>

                </div>
            </div> {/* END OF CONTAINER */}

            {/* FULL-WIDTH IMAGE GALLERY SECTION */}
            <Reveal delay={300}>
                <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full px-4 md:px-0 overflow-hidden">

                    {/* LEFT TALL IMAGE (Touches left edge on desktop) */}
                    <div className="w-full h-64 md:h-[400px] lg:h-[450px] flex">
                        <img
                            src="/Mask group (2).png"
                            alt="Speaker at event"
                            className="w-full h-full object-cover rounded-2xl md:rounded-l-none shadow-sm"
                        />
                    </div>

                    {/* MIDDLE COLUMN */}
                    <div className="flex flex-col gap-6 md:gap-8 w-full md:h-[400px] lg:h-[450px]">
                        {/* TEXT BOX */}
                        <div className="bg-background text-white rounded-2xl p-8 lg:p-10 flex items-center shadow-sm h-auto md:h-2/5">
                            <p className="text-base md:text-sm lg:text-lg leading-relaxed font-sans font-medium">
                                Benue Blockchain AI Fest 2025 in its inaugural edition aims to
                                spotlight innovation in Blockchain
                                technology and use through groundbreaking
                                and useful products
                            </p>
                        </div>

                        {/* BOTTOM IMAGE */}
                        <div className="h-64 md:h-fit flex">
                            <img
                                src="/Mask group (1).png"
                                alt="Event group"
                                className="w-full h-full object-cover rounded-2xl shadow-sm"
                            />
                        </div>
                    </div>

                    {/* RIGHT TALL IMAGE (Touches right edge on desktop) */}
                    <div className="w-full h-64 md:h-[400px] lg:h-[450px] flex">
                        <img
                            src="/Mask group.png"
                            alt="Audience at event"
                            className="w-full h-full object-cover rounded-2xl md:rounded-r-none shadow-sm"
                        />
                    </div>

                </div>
            </Reveal>
        </section>
    )
}
