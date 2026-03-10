import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

export default function Register() {
    const [status, setStatus] = useState<'' | 'success'>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('success')
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
            <Header />
            <main className="grow flex flex-col relative py-20 xl:py-32 overflow-hidden">

                {/* SUBTLE BACKGROUND ACCENT */}
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-3xl relative z-10">
                    <Reveal>
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors pt-12 mb-12 group">
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>

                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-gray-900 mb-6 tracking-tight leading-[1.1]">
                                Secure Your <span className="text-primary italic font-light">Spot.</span>
                            </h1>
                            <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto leading-[1.8]">
                                Join hundreds of builders, innovators, and creators at the Benue Fest 2025.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        {status === 'success' ? (
                            <div className="bg-white rounded-4xl p-12 text-center shadow-sm border border-gray-100 max-w-xl mx-auto">
                                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">You're on the list!</h3>
                                <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed">Check your email for your ticket confirmation and further details about the event.</p>
                                <button onClick={() => setStatus('')} className="bg-white text-gray-900 border border-gray-200 hover:border-primary hover:text-primary font-medium py-3 px-8 rounded-xl transition-all duration-300">
                                    Register Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-4xl p-8 md:p-12 xl:p-14 shadow-sm border border-gray-100 relative overflow-hidden">

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">First Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Last Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Corporate Email</label>
                                            <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Secondary Email <span className="text-gray-400 font-light">(Optional)</span></label>
                                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="john.personal@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Company</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="Acme Inc." />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Position / Job Title</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="Software Engineer" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Phone Number</label>
                                            <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="+1234567890" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">WhatsApp Number</label>
                                            <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="+1234567890" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">Industry</label>
                                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="e.g. Technology, Finance, Healthcare" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">City</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="Makurdi" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Country</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="Nigeria" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        <input required type="checkbox" id="terms" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer" />
                                        <label htmlFor="terms" className="text-gray-500 text-sm font-light">I agree to the <a href="#" className="font-medium hover:text-primary transition-colors">Terms of Service</a> & <a href="#" className="font-medium hover:text-primary transition-colors">Privacy Policy</a>.</label>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button type="submit" className="w-full bg-secondary hover:bg-primary text-white font-medium text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 group/btn cursor-pointer">
                                        Complete Registration
                                        <FaArrowLeft className="rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </Reveal>
                </div>
            </main>
            <Footer />
        </div>
    )
}
