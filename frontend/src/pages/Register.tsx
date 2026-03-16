import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Common country codes with their dial codes
const countryCodes = [
    { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬' },
    { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧' },
    { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
    { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦' },
    { code: 'GH', name: 'Ghana', dial: '+233', flag: '🇬🇭' },
    { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪' },
    { code: 'UG', name: 'Uganda', dial: '+256', flag: '🇺🇬' },
    { code: 'TZ', name: 'Tanzania', dial: '+255', flag: '🇹🇿' },
    { code: 'RW', name: 'Rwanda', dial: '+250', flag: '🇷🇼' },
    { code: 'ET', name: 'Ethiopia', dial: '+251', flag: '🇪🇹' },
    { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪' },
    { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸' },
    { code: 'NL', name: 'Netherlands', dial: '+31', flag: '🇳🇱' },
    { code: 'BE', name: 'Belgium', dial: '+32', flag: '🇧🇪' },
    { code: 'CH', name: 'Switzerland', dial: '+41', flag: '🇨🇭' },
    { code: 'AT', name: 'Austria', dial: '+43', flag: '🇦🇹' },
    { code: 'SE', name: 'Sweden', dial: '+46', flag: '🇸🇪' },
    { code: 'NO', name: 'Norway', dial: '+47', flag: '🇳🇴' },
    { code: 'DK', name: 'Denmark', dial: '+45', flag: '🇩🇰' },
    { code: 'FI', name: 'Finland', dial: '+358', flag: '🇫🇮' },
    { code: 'PL', name: 'Poland', dial: '+48', flag: '🇵🇱' },
    { code: 'RU', name: 'Russia', dial: '+7', flag: '🇷🇺' },
    { code: 'CN', name: 'China', dial: '+86', flag: '🇨🇳' },
    { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
    { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵' },
    { code: 'KR', name: 'South Korea', dial: '+82', flag: '🇰🇷' },
    { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
    { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾' },
    { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩' },
    { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭' },
    { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭' },
    { code: 'VN', name: 'Vietnam', dial: '+84', flag: '🇻🇳' },
    { code: 'AE', name: 'UAE', dial: '+971', flag: '🇦🇪' },
    { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦' },
    { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬' },
    { code: 'IL', name: 'Israel', dial: '+972', flag: '🇮🇱' },
    { code: 'TR', name: 'Turkey', dial: '+90', flag: '🇹🇷' },
    { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷' },
    { code: 'AR', name: 'Argentina', dial: '+54', flag: '🇦🇷' },
    { code: 'MX', name: 'Mexico', dial: '+52', flag: '🇲🇽' },
    { code: 'CO', name: 'Colombia', dial: '+57', flag: '🇨🇴' },
    { code: 'CL', name: 'Chile', dial: '+56', flag: '🇨🇱' },
    { code: 'PE', name: 'Peru', dial: '+51', flag: '🇵🇪' },
    { code: 'OTHER', name: 'Other', dial: '', flag: '🌍' },
]

// Defined OUTSIDE the Register component so React keeps a stable reference.
// If defined inside, React treats it as a new component type on every render
// and unmounts/remounts the inputs on every keystroke — breaking focus & Reveal.
const CountryCodeSelect = ({ value, onChange }: { value: typeof countryCodes[0], onChange: (country: typeof countryCodes[0]) => void }) => (
    <select
        value={value.code}
        onChange={(e) => {
            const country = countryCodes.find(c => c.code === e.target.value)
            if (country) onChange(country)
        }}
        className="min-w-fit bg-transparent border-r border-gray-300 px-3 py-4 text-sm focus:outline-none font-medium text-gray-700 transition-all cursor-pointer hover:bg-gray-50/50 appearance-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234B5563' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            paddingRight: '24px'
        }}
    >
        {countryCodes.map(country => (
            <option key={country.code} value={country.code}>
                {country.flag} {country.dial}
            </option>
        ))}
    </select>
)

interface FormErrors {
    firstName?: string
    lastName?: string
    corporateEmail?: string
    secondaryEmail?: string
    company?: string
    position?: string
    phone?: string
    whatsapp?: string
    industry?: string
    city?: string
    country?: string
    terms?: string
}

export default function Register() {
    const [status, setStatus] = useState<'' | 'success'>('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})

    const [phoneCountry, setPhoneCountry] = useState(countryCodes[0])
    const [whatsappCountry, setWhatsappCountry] = useState(countryCodes[0])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        corporateEmail: '',
        secondaryEmail: '',
        company: '',
        position: '',
        phone: '',
        whatsapp: '',
        industry: '',
        city: '',
        country: '',
        termsAccepted: false,
    })

    const initialFormData = {
        firstName: '',
        lastName: '',
        corporateEmail: '',
        secondaryEmail: '',
        company: '',
        position: '',
        phone: '',
        whatsapp: '',
        industry: '',
        city: '',
        country: '',
        termsAccepted: false,
    }

    const validateField = (name: string, value: string | boolean): string | undefined => {
        switch (name) {
            case 'firstName': {
                const v = value as string
                if (!v.trim()) return 'First name is required'
                if (v.length > 100) return 'First name must not exceed 100 characters'
                return undefined
            }
            case 'lastName': {
                const v = value as string
                if (!v.trim()) return 'Last name is required'
                if (v.length > 100) return 'Last name must not exceed 100 characters'
                return undefined
            }
            case 'corporateEmail': {
                const v = value as string
                if (!v.trim()) return 'Corporate email is required'
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                if (!emailRegex.test(v)) return 'Please enter a valid email address'

                // Extra safety for common providers: catch typos like @gamil.com, @yaho.com, etc.
                const domain = v.split('@')[1]?.toLowerCase() || ''
                const strictCommonDomains = [
                    'gmail.com',
                    'yahoo.com',
                    'yahoo.com.ng',
                    'outlook.com',
                    'hotmail.com',
                    'yandex.com',
                    'yandex.ru',
                ]
                const commonRoots = ['gmail', 'yahoo', 'outlook', 'hotmail', 'yandex']

                const isCommonRoot = commonRoots.some(root => domain.startsWith(root))
                const isExactCommon = strictCommonDomains.includes(domain)

                if (isCommonRoot && !isExactCommon) {
                    return 'Please check your email domain (e.g. @gmail.com, @yahoo.com). It looks misspelled.'
                }
                return undefined
            }
            case 'secondaryEmail': {
                const v = value as string
                if (v && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) {
                    return 'Please enter a valid email address'
                }
                return undefined
            }
            case 'company': {
                const v = value as string
                if (!v.trim()) return 'Company name is required'
                return undefined
            }
            case 'position': {
                const v = value as string
                if (!v.trim()) return 'Position is required'
                return undefined
            }
            case 'phone': {
                const v = value as string
                if (!v.trim()) return 'Phone number is required'
                const phoneRegex = /^[0-9]{7,15}$/
                if (!phoneRegex.test(v.replace(/\D/g, ''))) return 'Please enter a valid phone number (7-15 digits)'
                return undefined
            }
            case 'whatsapp': {
                const v = value as string
                if (!v.trim()) return 'WhatsApp number is required'
                const whatsappRegex = /^[0-9]{7,15}$/
                if (!whatsappRegex.test(v.replace(/\D/g, ''))) return 'Please enter a valid WhatsApp number (7-15 digits)'
                return undefined
            }
            case 'industry': {
                const v = value as string
                if (!v.trim()) return 'Industry is required'
                return undefined
            }
            case 'city': {
                const v = value as string
                if (!v.trim()) return 'City is required'
                return undefined
            }
            case 'country': {
                const v = value as string
                if (!v.trim()) return 'Country is required'
                return undefined
            }
            case 'termsAccepted':
                if (!value) return 'You must agree to the terms to continue'
                return undefined
            default:
                return undefined
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target
        const fieldValue = type === 'checkbox' ? checked : value
        setFormData(prev => ({ ...prev, [name]: fieldValue }))

        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        let isValid = true

        Object.keys(formData).forEach(key => {
            const fieldName = key as keyof typeof formData
            const error = validateField(fieldName, formData[fieldName])
            if (error) {
                newErrors[fieldName as keyof FormErrors] = error
                isValid = false
            }
        })

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error('Agree to the terms and conditions.')
            return
        }

        setLoading(true)

        // Combine country codes with phone numbers
        const fullPhone = phoneCountry.dial + formData.phone.replace(/\D/g, '')
        const fullWhatsapp = whatsappCountry.dial + formData.whatsapp.replace(/\D/g, '')

        const {
            termsAccepted: _termsAccepted,
            ...restFormData
        } = formData

        const payload = {
            ...restFormData,
            phone: fullPhone,
            whatsapp: fullWhatsapp,
        }

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            const data = await response.json()

            if (response.ok) {
                toast.success('🎉 Registration successful! Check your email for confirmation.')
                setStatus('success')
                setFormData(initialFormData)
                setErrors({})
                window.scrollTo(0, 0)
            } else {
                const backendErrors: FormErrors = {}

                // Joi validation errors from backend
                if (response.status === 400 && Array.isArray(data.errors)) {
                    const messages: string[] = data.errors
                    messages.forEach((msg) => {
                        const lower = msg.toLowerCase()
                        if (lower.includes('first name')) backendErrors.firstName = msg
                        else if (lower.includes('last name')) backendErrors.lastName = msg
                        else if (lower.includes('corporate email')) backendErrors.corporateEmail = msg
                        else if (lower.includes('secondary email')) backendErrors.secondaryEmail = msg
                        else if (lower.includes('company')) backendErrors.company = msg
                        else if (lower.includes('position')) backendErrors.position = msg
                        else if (lower.includes('phone')) backendErrors.phone = msg
                        else if (lower.includes('whatsapp')) backendErrors.whatsapp = msg
                        else if (lower.includes('industry')) backendErrors.industry = msg
                        else if (lower.includes('city')) backendErrors.city = msg
                        else if (lower.includes('country')) backendErrors.country = msg
                    })

                    toast.error(messages[0] || 'Please correct the highlighted fields.')
                }
                // Uniqueness conflicts from backend (email / phone / whatsapp already exist)
                else if (response.status === 409 && typeof data.message === 'string') {
                    const msg: string = data.message
                    const lower = msg.toLowerCase()
                    if (lower.includes('corporate email')) backendErrors.corporateEmail = msg
                    else if (lower.includes('phone number')) backendErrors.phone = msg
                    else if (lower.includes('whatsapp')) backendErrors.whatsapp = msg

                    if (Object.keys(backendErrors).length > 0) {
                        setErrors(prev => ({ ...prev, ...backendErrors }))
                    }
                    toast.error(msg)
                } else {
                    toast.error(data.message || 'Registration failed. Please try again.')
                }
            }
        } catch (_err) {
            toast.error('❌ Failed to connect to the server. Is the backend running?')
        } finally {
            setLoading(false)
        }
    }



    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
            <Header />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                aria-label="Notifications"
            />
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
                                <button onClick={() => { setStatus(''); setFormData(initialFormData); window.scrollTo(0, 0); }} className="bg-white text-gray-900 border border-gray-200 hover:border-primary hover:text-primary font-medium py-3 px-8 rounded-xl transition-all duration-300">
                                    Register Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-4xl p-8 md:p-12 xl:p-14 shadow-sm border border-gray-100 relative overflow-hidden">

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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Corporate Email</label>
                                            <input
                                                required
                                                name="corporateEmail"
                                                value={formData.corporateEmail}
                                                onChange={handleInputChange}
                                                type="email"
                                                className={`w-full bg-gray-50 border ${errors.corporateEmail ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="john@company.com"
                                            />
                                            {errors.corporateEmail && <p className="mt-1 text-sm text-red-600">{errors.corporateEmail}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Secondary Email <span className="text-gray-400 font-light">(Optional)</span></label>
                                            <input
                                                name="secondaryEmail"
                                                value={formData.secondaryEmail}
                                                onChange={handleInputChange}
                                                type="email"
                                                className={`w-full bg-gray-50 border ${errors.secondaryEmail ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="john.personal@example.com"
                                            />
                                            {errors.secondaryEmail && <p className="mt-1 text-sm text-red-600">{errors.secondaryEmail}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Company</label>
                                            <input
                                                required
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-gray-50 border ${errors.company ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="Acme Inc."
                                            />
                                            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Position / Job Title</label>
                                            <input
                                                required
                                                name="position"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-gray-50 border ${errors.position ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="Software Engineer"
                                            />
                                            {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label className="block text-gray-700 font-medium mb-3 text-sm">Phone Number</label>
                                            <div className={`flex rounded-xl overflow-hidden border-2 transition-all duration-300 ${errors.phone ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50 group-focus-within:border-primary group-focus-within:shadow-md group-focus-within:shadow-primary/10'}`}>
                                                <CountryCodeSelect value={phoneCountry} onChange={setPhoneCountry} />
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    type="tel"
                                                    className={`flex-1 bg-transparent border-none px-5 py-4 focus:outline-none transition-all text-gray-900 placeholder-gray-400`}
                                                    placeholder="801 234 5678"
                                                />
                                            </div>
                                            {errors.phone && <p className="mt-2 text-sm text-red-600 font-medium">⚠ {errors.phone}</p>}
                                        </div>
                                        <div className="group">
                                            <label className="block text-gray-700 font-medium mb-3 text-sm">WhatsApp Number</label>
                                            <div className={`flex rounded-xl overflow-hidden border-2 transition-all duration-300 ${errors.whatsapp ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50 group-focus-within:border-green-500 group-focus-within:shadow-md group-focus-within:shadow-green-500/10'}`}>
                                                <CountryCodeSelect value={whatsappCountry} onChange={setWhatsappCountry} />
                                                <input
                                                    required
                                                    name="whatsapp"
                                                    value={formData.whatsapp}
                                                    onChange={handleInputChange}
                                                    type="tel"
                                                    className={`flex-1 bg-transparent border-none px-5 py-4 focus:outline-none transition-all text-gray-900 placeholder-gray-400`}
                                                    placeholder="801 234 5678"
                                                />
                                            </div>
                                            {errors.whatsapp && <p className="mt-2 text-sm text-red-600 font-medium">⚠ {errors.whatsapp}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">Industry</label>
                                        <input
                                            required
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleInputChange}
                                            type="text"
                                            className={`w-full bg-gray-50 border ${errors.industry ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                            placeholder="e.g. Technology, Finance, Healthcare"
                                        />
                                        {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">City</label>
                                            <input
                                                required
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-gray-50 border ${errors.city ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="Makurdi"
                                            />
                                            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2 text-sm">Country</label>
                                            <input
                                                required
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-gray-50 border ${errors.country ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                                placeholder="Nigeria"
                                            />
                                            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                                        </div>
                                    </div>

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
                                            <label htmlFor="terms" className="text-gray-500 text-sm font-light">
                                                I agree to the <a href="#" className="font-medium hover:text-primary transition-colors">Terms of Service</a> & <a href="#" className="font-medium hover:text-primary transition-colors">Privacy Policy</a>.
                                            </label>
                                        </div>
                                        {errors.terms && <p className="text-sm text-red-600">{errors.terms}</p>}
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full bg-secondary hover:bg-primary text-white font-medium text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 group/btn cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? 'Registering...' : 'Complete Registration'}
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
