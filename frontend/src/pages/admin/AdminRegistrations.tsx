import { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface User {
    id: number
    firstName: string
    lastName: string
    corporateEmail: string
    company: string
    position: string
    phone: string
    whatsapp: string
    industry: string | null
    city: string | null
    country: string | null
    createdAt: string
}

interface Pagination {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
}

export default function AdminRegistrations() {
    const [registrations, setRegistrations] = useState<User[]>([])
    const [pagination, setPagination] = useState<Pagination | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteLoading, setDeleteLoading] = useState<number | null>(null)

    useEffect(() => {
        fetchRegistrations()
    }, [])

    const fetchRegistrations = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setError('Not authenticated')
                setLoading(false)
                return
            }

            const response = await fetch(`${API_URL}/api/admin/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/admin-login'
                    return
                }
                throw new Error('Failed to fetch registrations')
            }

            const data = await response.json()
            if (data.success) {
                setRegistrations(data.data.users)
                setPagination(data.data.pagination)
            } else {
                setError(data.message || 'Failed to fetch registrations')
            }
        } catch (err) {
            setError('Failed to connect to the server')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this registration? This action cannot be undone.')) {
            return
        }

        setDeleteLoading(id)
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setError('Not authenticated')
                return
            }

            const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/admin-login'
                    return
                }
                throw new Error('Failed to delete registration')
            }

            const data = await response.json()
            if (data.success) {
                setRegistrations(prev => prev.filter(user => user.id !== id))
                if (pagination) {
                    setPagination({ ...pagination, total: pagination.total - 1 })
                }
            } else {
                setError(data.message || 'Failed to delete registration')
            }
        } catch (err) {
            setError('Failed to delete registration')
        } finally {
            setDeleteLoading(null)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    const exportToCSV = () => {
        if (registrations.length === 0) return

        const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Company', 'Position', 'Phone', 'WhatsApp', 'Industry', 'City', 'Country', 'Registration Date']
        const rows = registrations.map(user => [
            user.id,
            user.firstName,
            user.lastName,
            user.corporateEmail,
            user.company,
            user.position,
            user.phone,
            user.whatsapp,
            user.industry || '',
            user.city || '',
            user.country || '',
            formatDate(user.createdAt),
        ])

        const csvContent = [headers.join(','), ...rows.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n')
        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `registrations-${new Date().toISOString().split('T')[0]}.csv`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    if (loading) {
        return (
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrations</h1>
                    <p className="text-gray-500">Manage all general event attendees and ticket sales.</p>
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrations</h1>
                    <p className="text-gray-500">Manage all general event attendees and ticket sales.</p>
                </div>
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
                    {error}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrations</h1>
                    <p className="text-gray-500">Manage all general event attendees and ticket sales.</p>
                    {pagination && (
                        <p className="text-sm text-gray-400 mt-1">
                            Total: {pagination.total} registrations
                        </p>
                    )}
                </div>
                <button
                    onClick={exportToCSV}
                    disabled={registrations.length === 0}
                    className="bg-primary hover:bg-green text-secondary hover:text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Export CSV
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm font-medium">
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Position</th>
                                <th className="px-6 py-4">Country</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {registrations.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{user.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{user.firstName} {user.lastName}</td>
                                    <td className="px-6 py-4">{user.corporateEmail}</td>
                                    <td className="px-6 py-4">{user.company}</td>
                                    <td className="px-6 py-4">{user.position}</td>
                                    <td className="px-6 py-4">{user.country || '-'}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(user.createdAt)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            disabled={deleteLoading === user.id}
                                            className="text-red-500 hover:text-red-600 transition-colors font-medium text-sm disabled:opacity-50"
                                            title="Delete"
                                        >
                                            {deleteLoading === user.id ? (
                                                <span className="animate-spin inline-block">⟳</span>
                                            ) : (
                                                <FaTrash />
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {registrations.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No registrations found.
                    </div>
                )}
            </div>
        </div>
    )
}
