import { useState, useEffect } from 'react'
import { FaUsers, FaLaptopCode, FaMicrophone, FaChalkboardTeacher } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface Stats {
    totalRegistrations: number
    hackathonCount: number
    showcaseCount: number
    speakerCount: number
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setError('Not authenticated')
                setLoading(false)
                return
            }

            const [usersRes, hackathonRes, showcaseRes, speakerRes] = await Promise.all([
                fetch(`${API_URL}/api/admin/users?limit=1`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch(`${API_URL}/api/hackathon/registrations?limit=1`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch(`${API_URL}/api/product-showcase/registrations?limit=1`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch(`${API_URL}/api/speaker-application/applications?limit=1`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
            ])

            if (!usersRes.ok || !hackathonRes.ok || !showcaseRes.ok || !speakerRes.ok) {
                if (usersRes.status === 401 || hackathonRes.status === 401 || showcaseRes.status === 401 || speakerRes.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/admin-login'
                    return
                }
                throw new Error('Failed to fetch stats')
            }

            const [usersData, hackathonData, showcaseData, speakerData] = await Promise.all([
                usersRes.json(),
                hackathonRes.json(),
                showcaseRes.json(),
                speakerRes.json(),
            ])

            setStats({
                totalRegistrations: usersData.data?.pagination?.total || 0,
                hackathonCount: hackathonData.data?.pagination?.total || 0,
                showcaseCount: showcaseData.data?.pagination?.total || 0,
                speakerCount: speakerData.data?.pagination?.total || 0,
            })
        } catch (err) {
            setError('Failed to load dashboard stats')
        } finally {
            setLoading(false)
        }
    }

    const statItems = [
        { label: 'Total Registrations', value: stats?.totalRegistrations || 0, icon: <FaUsers />, color: 'bg-blue-50 text-blue-600' },
        { label: 'Hackathon Registrations', value: stats?.hackathonCount || 0, icon: <FaLaptopCode />, color: 'bg-green-50 text-green-600' },
        { label: 'Showcase Registrations', value: stats?.showcaseCount || 0, icon: <FaChalkboardTeacher />, color: 'bg-orange-50 text-orange-600' },
        { label: 'Speaker Applications', value: stats?.speakerCount || 0, icon: <FaMicrophone />, color: 'bg-purple-50 text-purple-600' },
    ]

    if (loading) {
        return (
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                    <p className="text-gray-500">Welcome to the Benue Blockchain AI Fest admin portal.</p>
                </div>
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                    <p className="text-gray-500">Welcome to the Benue Blockchain AI Fest admin portal.</p>
                </div>
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
                    {error}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome to the Benue Blockchain AI Fest admin portal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statItems.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="text-gray-500 text-center py-4">Dashboard loaded successfully. Navigate to specific sections to view detailed data.</div>
            </div>
        </div>
    )
}
