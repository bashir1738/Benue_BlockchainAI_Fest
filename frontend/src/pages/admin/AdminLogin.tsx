import { useState, type FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface FormErrors {
    email?: string
    password?: string
}

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [errors, setErrors] = useState<FormErrors>({})
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'email': {
                if (!value.trim()) return 'Email is required'
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(value)) return 'Please enter a valid email address'
                return undefined
            }
            case 'password':
                if (!value.trim()) return 'Password is required'
                if (value.length < 6) return 'Password must be at least 6 characters'
                return undefined
            default:
                return undefined
        }
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        let isValid = true

        const emailError = validateField('email', email)
        if (emailError) {
            newErrors.email = emailError
            isValid = false
        }

        const passwordError = validateField('password', password)
        if (passwordError) {
            newErrors.password = passwordError
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        setError('')
        
        if (!validateForm()) {
            return
        }

        setLoading(true)

        try {
            const response = await fetch(`${API_URL}/api/auth/admin-login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (response.ok) {
                localStorage.setItem('token', data.token)
                navigate('/admin')
            } else {
                setError(data.message || 'Invalid credentials. Please try again.')
            }
        } catch (_err) {
            setError('Failed to connect to the server. Is the backend running?')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans text-gray-900 relative overflow-hidden">
            {/* SUBTLE BACKGROUND ACCENT */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-md px-4 sm:px-6 relative z-10 flex flex-col items-center">

                <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors mb-8 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <div className="bg-white rounded-5xl p-10 md:p-14 shadow-sm border border-gray-100 w-full flex flex-col overflow-hidden">
                    <div className="text-center mb-10 mt-2">
                        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-none mb-3">
                            Admin <span className="text-primary italic font-light">Access.</span>
                        </h1>
                        <p className="text-gray-400 font-light text-sm tracking-wide">
                            Benue Blockchain AI Fest 2025
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col grow">
                        {error && (
                            <div className="bg-red-50 text-red-500 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100 text-center animate-in fade-in slide-in-from-top-2">
                                {error}
                            </div>
                        )}

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-3 text-sm">Admin Email</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                                }}
                                className={`w-full bg-gray-50 border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                placeholder="Enter admin email..."
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            <p className="text-xs text-gray-400 mt-2 font-light">Hint: admin@benuefest.com</p>
                        </div>

                        <div className="mb-10">
                            <label className="block text-gray-700 font-medium mb-3 text-sm">Security Key</label>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    if (errors.password) setErrors(prev => ({ ...prev, password: undefined }))
                                }}
                                className={`w-full bg-gray-50 border ${errors.password ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} rounded-xl px-5 py-4 focus:outline-none focus:ring-1 transition-all text-gray-900`}
                                placeholder="Enter password..."
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                            <p className="text-xs text-gray-400 mt-2 font-light">Hint: admin123</p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-secondary hover:bg-primary text-white font-medium text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Unlocking...' : 'Unlock Portal'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
