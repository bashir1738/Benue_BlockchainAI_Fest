import Reveal from './Reveal'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

export default function RegistrationCards() {
    return (
        <section className="bg-white py-24 md:py-32 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl">

                {/* HEADER SECTION */}
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-6 block">Join the movement</span>
                        <h2 className="text-[40px] md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Ready to dive in?
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-[1.8] font-light">
                            Secure your place at Benue Fest. Whether you're here to learn, network, or build the future.
                        </p>
                    </div>
                </Reveal>

                {/* CARDS */}
                <Reveal delay={150}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* Card 1 */}
                        <Link to="/register" className="bg-gray-50 rounded-4xl p-10 md:p-14 w-full flex flex-col justify-between border border-gray-100 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-gray-300 text-6xl md:text-[100px] font-black opacity-30 group-hover:text-primary group-hover:opacity-10 transition-all duration-500 leading-none">01</span>
                            </div>

                            <div className="relative z-10 flex flex-col h-full min-h-55">
                                <div className="mt-auto">
                                    <h3 className="text-gray-900 text-3xl md:text-4xl lg:text-[42px] font-medium leading-[1.2] mb-8">
                                        Register to<br />Attend Event
                                    </h3>
                                    <div className="flex items-center gap-4 text-primary font-medium group-hover:gap-6 transition-all duration-300">
                                        <span className="text-lg">Secure your ticket</span>
                                        <FaArrowRight className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/apply?type=hackathon" className="bg-background rounded-4xl p-10 md:p-14 w-full flex flex-col justify-between transform transition-all duration-500  hover:shadow-xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-white text-6xl md:text-[100px] font-black opacity-20 group-hover:opacity-30 transition-all duration-500 leading-none">02</span>
                            </div>

                            <div className="relative z-10 flex flex-col h-full min-h-55">
                                <div className="mt-auto">
                                    <h3 className="text-white text-3xl md:text-4xl lg:text-[42px] font-medium leading-[1.2] mb-8">
                                        Apply for<br />Hackathon
                                    </h3>
                                    <div className="flex items-center gap-4 text-white font-medium group-hover:gap-6 transition-all duration-300">
                                        <span className="text-lg">Enter the competition</span>
                                        <FaArrowRight className="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </Reveal>
            </div>
        </section>
    )
}
