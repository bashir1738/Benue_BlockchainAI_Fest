import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { FaArrowLeft } from 'react-icons/fa6'

export default function Apply() {
    const [searchParams] = useSearchParams()
    const initialType = searchParams.get('type') || 'hackathon'

    const [status, setStatus] = useState<'' | 'success'>('')
    const [applyType, setApplyType] = useState(initialType)

    useEffect(() => {
        if (searchParams.get('type')) {
            setApplyType(searchParams.get('type')!)
        }
    }, [searchParams])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('success')
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
            <Header />
            <main className="grow flex flex-col relative py-20 xl:py-32 overflow-hidden">

                <div className="container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-4xl relative z-10">
                    <Reveal>
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium pt-12 hover:text-secondary transition-colors mb-12 group">
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </Link>

                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-gray-900 mb-6 tracking-tight leading-[1.1]">
                                Welcome. <br className="hidden sm:block" /> <span className="text-gray-400 italic font-light">Join the movement.</span>
                            </h1>
                            <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-[1.8]">
                                Whether you're building, showcasing, or speaking, join the ecosystem at Benue Fest 2025.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        {status === 'success' ? (
                            <div className="bg-white rounded-4xl p-12 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto">
                                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Application Received!</h3>
                                <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed">Our team will review your submission and get back to you shortly with next steps.</p>
                                <button onClick={() => setStatus('')} className="bg-white text-gray-900 border border-gray-200 hover:border-primary hover:text-primary font-medium py-3 px-8 rounded-xl transition-all duration-300">
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-4xl p-8 md:p-12 xl:p-16 shadow-sm border border-gray-100 relative overflow-hidden group">

                                {/* ROLE SELECTOR */}
                                <div className="mb-12">
                                    <label className="block text-gray-900 font-medium mb-6 text-center text-lg tracking-tight">Select your track:</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setApplyType('hackathon')}
                                            className={`py-4 px-4 rounded-2xl font-medium border transition-all duration-300 ${applyType === 'hackathon' ? 'border-secondary bg-secondary text-white shadow-lg  hover:-translate-y-1' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
                                        >
                                            Hackathon
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setApplyType('showcase')}
                                            className={`py-4 px-4 rounded-2xl font-medium border transition-all duration-300 ${applyType === 'showcase' ? 'border-secondary bg-secondary text-white shadow-lg shadow-secondary/20 hover:-translate-y-1' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
                                        >
                                            Product Showcase
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setApplyType('speaker')}
                                            className={`py-4 px-4 rounded-2xl font-medium border transition-all duration-300 ${applyType === 'speaker' ? 'border-primary bg-secondary text-white shadow-lg shadow-secondary/20 hover:-translate-y-1' : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'}`}
                                        >
                                            Speaker
                                        </button>
                                    </div>
                                </div>

                                {/* FORM FIELDS */}
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

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="john@example.com" />
                                    </div>

                                    {/* CONDITIONAL FIELDS */}
                                    {applyType === 'hackathon' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">GitHub / Portfolio Link</label>
                                            <input required type="url" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="https://github.com/..." />
                                        </div>
                                    )}

                                    {applyType === 'showcase' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Product Live Link / Pitch Deck</label>
                                            <input required type="url" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="https://myproduct.com" />
                                        </div>
                                    )}

                                    {applyType === 'speaker' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">LinkedIn / Previous Talks</label>
                                            <input required type="url" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900" placeholder="https://linkedin.com/in/..." />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">Tell us more details</label>
                                        <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900 resize-none" placeholder="Share a few specifics..."></textarea>
                                    </div>

                                    {/* CHECKBOX */}
                                    <div className="flex items-center gap-4 pt-4">
                                        <input required type="checkbox" id="terms" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer" />
                                        <label htmlFor="terms" className="text-gray-500 text-sm font-light">I agree to the <a href="#" className="font-medium hover:text-primary transition-colors">Terms of Service</a> & <a href="#" className="font-medium hover:text-primary transition-colors">Privacy Policy</a>.</label>
                                    </div>

                                </div>

                                {/* SUBMIT BTN */}
                                <div className="mt-12">
                                    <button type="submit" className="w-full bg-secondary hover:bg-primary text-white font-medium text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 group/btn cursor-pointer">
                                        Submit Application
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
