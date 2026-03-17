import { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface ProductShowcase {
    id: number
    firstName: string
    lastName: string
    email: string
    productLink: string | null
    projectDescription: string
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

export default function AdminShowcase() {
    const [applications, setApplications] = useState<ProductShowcase[]>([])
    const [pagination, setPagination] = useState<Pagination | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteLoading, setDeleteLoading] = useState<number | null>(null)

    useEffect(() => {
        fetchApplications()
    }, [])

    const fetchApplications = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setError('Not authenticated')
                setLoading(false)
                return
            }

            const response = await fetch(`${API_URL}/api/product-showcase/registrations`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/admin/login'
                    return
                }
                throw new Error('Failed to fetch showcase registrations')
            }

            const data = await response.json()
            if (data.success) {
                setApplications(data.data.showcases)
                setPagination(data.data.pagination)
            } else {
                setError(data.message || 'Failed to fetch applications')
            }
        } catch (_err) {
            setError('Failed to connect to the server')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this product showcase registration? This action cannot be undone.')) {
            return
        }

        setDeleteLoading(id)
        try {
            const token = localStorage.getItem('token')
            if (!token) {
                setError('Not authenticated')
                return
            }

            const response = await fetch(`${API_URL}/api/product-showcase/registrations/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('token')
                    window.location.href = '/admin/login'
                    return
                }
                throw new Error('Failed to delete registration')
            }

            const data = await response.json()
            if (data.success) {
                setApplications(prev => prev.filter(app => app.id !== id))
                if (pagination) {
                    setPagination({ ...pagination, total: pagination.total - 1 })
                }
            } else {
                setError(data.message || 'Failed to delete registration')
            }
        } catch (_err) {
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
        if (applications.length === 0) return

        const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Product Link', 'Project Description', 'Registration Date']
        const rows = applications.map(app => [
            app.id,
            app.firstName,
            app.lastName,
            app.email,
            app.productLink || '',
            app.projectDescription,
            formatDate(app.createdAt),
        ])

        const csvContent = [headers.join(','), ...rows.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n')
        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `showcase-registrations-${new Date().toISOString().split('T')[0]}.csv`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    if (loading) {
        return (
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Showcase Applications</h1>
                    <p className="text-gray-500">Review startups and projects requesting exhibition space.</p>
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Showcase Applications</h1>
                    <p className="text-gray-500">Review startups and projects requesting exhibition space.</p>
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Showcase Applications</h1>
                    <p className="text-gray-500">Review startups and projects requesting exhibition space.</p>
                    {pagination && (
                        <p className="text-sm text-gray-400 mt-1">
                            Total: {pagination.total} applications
                        </p>
                    )}
                </div>
                <button
                    onClick={exportToCSV}
                    disabled={applications.length === 0}
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
                                <th className="px-6 py-4 hidden lg:table-cell">Product Link</th>
                                <th className="px-6 py-4 hidden xl:table-cell">Description</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{app.id}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{app.firstName} {app.lastName}</p>
                                    </td>
                                    <td className="px-6 py-4">{app.email}</td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        {app.productLink ? (
                                            <a href={app.productLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm truncate block max-w-50">
                                                {app.productLink}
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                    <td className="px-6 py-4 hidden xl:table-cell">
                                        <p className="text-sm text-gray-500 line-clamp-2 max-w-xs" title={app.projectDescription}>
                                            {app.projectDescription}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(app.createdAt)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(app.id)}
                                            disabled={deleteLoading === app.id}
                                            className="text-red-500 hover:text-red-600 transition-colors font-medium text-sm disabled:opacity-50"
                                            title="Delete"
                                        >
                                            {deleteLoading === app.id ? (
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

                {applications.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No applications found.
                    </div>
                )}
            </div>
        </div>
    )
}
