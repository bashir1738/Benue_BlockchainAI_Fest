import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { FaArrowLeft } from 'react-icons/fa6'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

type ApplyType = 'hackathon' | 'showcase' | 'speaker'

interface FormErrors {
    firstName?: string
    lastName?: string
    email?: string
    githubPortfolio?: string
    productLink?: string
    linkedinLink?: string
    projectDescription?: string
    expertiseDescription?: string
    termsAccepted?: string
}

export default function Apply() {
    const [searchParams] = useSearchParams()
    const initialType = searchParams.get('type') || 'hackathon'

    const [status, setStatus] = useState<'' | 'success'>('')
    const [applyType, setApplyType] = useState<ApplyType>(initialType as ApplyType)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [errors, setErrors] = useState<FormErrors>({})

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        githubPortfolio: '',
        productLink: '',
        linkedinLink: '',
        projectDescription: '',
        expertiseDescription: '',
        termsAccepted: false,
    })

    useEffect(() => {
        const typeParam = searchParams.get('type')
        if (typeParam && (typeParam === 'hackathon' || typeParam === 'showcase' || typeParam === 'speaker')) {
            setApplyType(typeParam)
        }
    }, [searchParams])

    const validateField = (name: string, value: string | boolean): string | undefined => {
        switch (name) {
            case 'firstName': {
                const v = value as string
                if (!v.trim()) return 'First name is required'
                return undefined
            }
            case 'lastName': {
                const v = value as string
                if (!v.trim()) return 'Last name is required'
                return undefined
            }
            case 'email': {
                const v = value as string
                if (!v.trim()) return 'Email is required'
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(v)) return 'Please enter a valid email address'
                return undefined
            }
            case 'githubPortfolio': {
                const v = value as string
                if (applyType === 'hackathon' && !v.trim()) return 'GitHub/Portfolio link is required'
                if (v && !v.startsWith('http')) return 'Please enter a valid URL starting with http:// or https://'
                return undefined
            }
            case 'productLink': {
                const v = value as string
                if (applyType === 'showcase' && !v.trim()) return 'Product link is required'
                if (v && !v.startsWith('http')) return 'Please enter a valid URL starting with http:// or https://'
                return undefined
            }
            case 'linkedinLink': {
                const v = value as string
                if (applyType === 'speaker' && !v.trim()) return 'LinkedIn/Previous talks link is required'
                if (v && !v.startsWith('http')) return 'Please enter a valid URL starting with http:// or https://'
                return undefined
            }
            case 'projectDescription': {
                const v = value as string
                if ((applyType === 'hackathon' || applyType === 'showcase') && !v.trim()) return 'Project description is required'
                return undefined
            }
            case 'expertiseDescription': {
                const v = value as string
                if (applyType === 'speaker' && !v.trim()) return 'Expertise description is required'
                return undefined
            }
            case 'termsAccepted':
                if (!value) return 'You must agree to the terms to continue'
                return undefined
            default:
                return undefined
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target
        const value = type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : e.target.value
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        let isValid = true

        // Common required fields
        const requiredFields: (keyof typeof formData)[] = ['firstName', 'lastName', 'email']
        requiredFields.forEach(field => {
            const error = validateField(field, formData[field])
            if (error) {
                newErrors[field as keyof FormErrors] = error
                isValid = false
            }
        })

        // Conditional required fields based on application type
        if (applyType === 'hackathon') {
            if (!formData.githubPortfolio.trim()) {
                newErrors.githubPortfolio = 'GitHub/Portfolio link is required'
                isValid = false
            }
            if (!formData.projectDescription.trim()) {
                newErrors.projectDescription = 'Project description is required'
                isValid = false
            }
        } else if (applyType === 'showcase') {
            if (!formData.productLink.trim()) {
                newErrors.productLink = 'Product link is required'
                isValid = false
            }
            if (!formData.projectDescription.trim()) {
                newErrors.projectDescription = 'Project description is required'
                isValid = false
            }
        } else if (applyType === 'speaker') {
            if (!formData.linkedinLink.trim()) {
                newErrors.linkedinLink = 'LinkedIn/Previous talks link is required'
                isValid = false
            }
            if (!formData.expertiseDescription.trim()) {
                newErrors.expertiseDescription = 'Expertise description is required'
                isValid = false
            }
        }

        // URL validation for link fields
        if (formData.githubPortfolio && !formData.githubPortfolio.startsWith('http')) {
            newErrors.githubPortfolio = 'Please enter a valid URL starting with http:// or https://'
            isValid = false
        }
        if (formData.productLink && !formData.productLink.startsWith('http')) {
            newErrors.productLink = 'Please enter a valid URL starting with http:// or https://'
            isValid = false
        }
        if (formData.linkedinLink && !formData.linkedinLink.startsWith('http')) {
            newErrors.linkedinLink = 'Please enter a valid URL starting with http:// or https://'
            isValid = false
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)
        
        if (!validateForm()) {
            return
        }

        setLoading(true)

        let endpoint = ''
        const payload: {
            firstName: string;
            lastName: string;
            email: string;
            githubPortfolio?: string;
            projectDescription?: string;
            productLink?: string;
            linkedinLink?: string;
            expertiseDescription?: string;
        } = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
        }

        if (applyType === 'hackathon') {
            endpoint = '/api/hackathon/register'
            payload.githubPortfolio = formData.githubPortfolio
            payload.projectDescription = formData.projectDescription
        } else if (applyType === 'showcase') {
            endpoint = '/api/product-showcase/register'
            payload.productLink = formData.productLink
            payload.projectDescription = formData.projectDescription
        } else if (applyType === 'speaker') {
            endpoint = '/api/speaker-application/register'
            payload.linkedinLink = formData.linkedinLink
            payload.expertiseDescription = formData.expertiseDescription
        }

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    githubPortfolio: '',
                    productLink: '',
                    linkedinLink: '',
                    projectDescription: '',
                    expertiseDescription: '',
                    termsAccepted: false,
                })
                setErrors({})
                window.scrollTo(0, 0)
            } else {
                const backendErrors: FormErrors = {}

                if (response.status === 400 && Array.isArray(data.errors)) {
                    const messages: string[] = data.errors
                    messages.forEach((msg) => {
                        const lower = msg.toLowerCase()
                        if (lower.includes('first name')) backendErrors.firstName = msg
                        else if (lower.includes('last name')) backendErrors.lastName = msg
                        else if (lower.includes('email')) backendErrors.email = msg
                        else if (lower.includes('github') || lower.includes('portfolio')) backendErrors.githubPortfolio = msg
                        else if (lower.includes('product link')) backendErrors.productLink = msg
                        else if (lower.includes('linkedin')) backendErrors.linkedinLink = msg
                        else if (lower.includes('project description')) backendErrors.projectDescription = msg
                        else if (lower.includes('expertise description')) backendErrors.expertiseDescription = msg
                    })
                    setErrors(prev => ({ ...prev, ...backendErrors }))
                    setError(messages[0] || 'Please correct the highlighted fields.')
                } else if (response.status === 409 && typeof data.message === 'string') {
                    const msg: string = data.message
                    const lower = msg.toLowerCase()
                    if (lower.includes('email')) {
                        backendErrors.email = msg
                        setErrors(prev => ({ ...prev, ...backendErrors }))
                        setError(msg)
                    } else {
                        setError(msg)
                    }
                } else {
                    setError(data.message || 'Something went wrong. Please try again.')
                }
            }
        } catch (_err) {
            setError('Failed to connect to the server. Is the backend running?')
        } finally {
            setLoading(false)
        }
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
                        {error && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center animate-in fade-in slide-in-from-top-2">
                                {error}
                            </div>
                        )}
                        {status === 'success' ? (
                            <div className="bg-white rounded-4xl p-12 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto">
                                <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Application Received!</h3>
                                <p className="text-gray-500 text-lg mb-10 font-light leading-relaxed">Our team will review your submission and get back to you shortly with next steps.</p>
                                <button onClick={() => { setStatus(''); setFormData({ firstName: '', lastName: '', email: '', githubPortfolio: '', productLink: '', linkedinLink: '', projectDescription: '', expertiseDescription: '', termsAccepted: false }); window.scrollTo(0, 0); }} className="bg-white text-gray-900 border border-gray-200 hover:border-primary hover:text-primary font-medium py-3 px-8 rounded-xl transition-all duration-300">
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
                                            <input 
                                                required 
                                                name="firstName" 
                                                value={formData.firstName} 
                                                onChange={handleInputChange} 
                                                type="text" 
                                                className={`w-full bg-gray-50 border ${errors.firstName ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                                placeholder="John" 
                                            />
                                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Last Name</label>
                                            <input 
                                                required 
                                                name="lastName" 
                                                value={formData.lastName} 
                                                onChange={handleInputChange} 
                                                type="text" 
                                                className={`w-full bg-gray-50 border ${errors.lastName ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                                placeholder="Doe" 
                                            />
                                            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                                        <input 
                                            required 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleInputChange} 
                                            type="email" 
                                            className={`w-full bg-gray-50 border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                            placeholder="john@example.com" 
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* CONDITIONAL FIELDS */}
                                    {applyType === 'hackathon' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">GitHub / Portfolio Link</label>
                                            <input 
                                                required 
                                                name="githubPortfolio" 
                                                value={formData.githubPortfolio} 
                                                onChange={handleInputChange} 
                                                type="url" 
                                                className={`w-full bg-gray-50 border ${errors.githubPortfolio ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                                placeholder="https://github.com/..." 
                                            />
                                            {errors.githubPortfolio && <p className="mt-1 text-sm text-red-600">{errors.githubPortfolio}</p>}
                                        </div>
                                    )}

                                    {applyType === 'showcase' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Product Live Link / Pitch Deck</label>
                                            <input 
                                                required 
                                                name="productLink" 
                                                value={formData.productLink} 
                                                onChange={handleInputChange} 
                                                type="url" 
                                                className={`w-full bg-gray-50 border ${errors.productLink ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                                placeholder="https://myproduct.com" 
                                            />
                                            {errors.productLink && <p className="mt-1 text-sm text-red-600">{errors.productLink}</p>}
                                        </div>
                                    )}

                                    {applyType === 'speaker' && (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">LinkedIn / Previous Talks</label>
                                            <input 
                                                required 
                                                name="linkedinLink" 
                                                value={formData.linkedinLink} 
                                                onChange={handleInputChange} 
                                                type="url" 
                                                className={`w-full bg-gray-50 border ${errors.linkedinLink ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`} 
                                                placeholder="https://linkedin.com/in/..." 
                                            />
                                            {errors.linkedinLink && <p className="mt-1 text-sm text-red-600">{errors.linkedinLink}</p>}
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                                            {applyType === 'speaker' ? 'Tell us more about your expertise' : 'Tell us more about your project'}
                                        </label>
                                        <textarea
                                            required
                                            name={applyType === 'speaker' ? "expertiseDescription" : "projectDescription"}
                                            value={applyType === 'speaker' ? formData.expertiseDescription : formData.projectDescription}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className={`w-full bg-gray-50 border ${(applyType === 'speaker' ? errors.expertiseDescription : errors.projectDescription) ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900 resize-none`}
                                            placeholder="Share a few specifics..."
                                        ></textarea>
                                        {(applyType === 'speaker' ? errors.expertiseDescription : errors.projectDescription) && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {applyType === 'speaker' ? errors.expertiseDescription : errors.projectDescription}
                                            </p>
                                        )}
                                    </div>

                                    {/* CHECKBOX */}
                                    <div className="flex flex-col gap-2 pt-4">
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                name="termsAccepted"
                                                checked={formData.termsAccepted}
                                                onChange={handleInputChange}
                                                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                                            />
                                            <label htmlFor="terms" className="text-black text-sm font-medium">
                                                I agree to the <a href="#" className="font-medium hover:text-primary transition-colors">Terms of Service</a> & <a href="#" className="font-medium hover:text-primary transition-colors">Privacy Policy</a>.
                                            </label>
                                        </div>
                                        {errors.termsAccepted && (
                                            <p className="text-sm text-red-600">{errors.termsAccepted}</p>
                                        )}
                                    </div>

                                </div>

                                {/* SUBMIT BTN */}
                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full bg-secondary hover:bg-primary text-white font-medium text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 group/btn cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? 'Submitting...' : 'Submit Application'}
                                        <FaArrowLeft className={`rotate-180 transition-transform ${loading ? '' : 'group-hover/btn:translate-x-1'}`} />
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
