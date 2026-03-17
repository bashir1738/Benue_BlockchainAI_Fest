import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { FaUsers, FaLaptopCode, FaMicrophone, FaChalkboardTeacher, FaChartLine, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'

export default function AdminLayout() {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const menuItems = [
        { path: '/admin', label: 'Dashboard', icon: <FaChartLine /> },
        { path: '/admin/registrations', label: 'Registrations', icon: <FaUsers /> },
        { path: '/admin/hackathon', label: 'Hackathon', icon: <FaLaptopCode /> },
        { path: '/admin/showcase', label: 'Showcase', icon: <FaChalkboardTeacher /> },
        { path: '/admin/speaker', label: 'Speakers', icon: <FaMicrophone /> },
    ]

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 font-sans">

            {/* Mobile Header Menu */}
            <div className="md:hidden flex items-center justify-between bg-secondary p-4 text-white z-20">
                <h1 className="text-lg font-mono font-black text-primary uppercase tracking-tighter leading-none">
                    Benue Fest <span className="text-gray-400 text-xs font-sans tracking-normal ml-1">Admin</span>
                </h1>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl hover:text-primary transition-colors focus:outline-none">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Overlay for mobile sidebar */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-secondary text-white flex flex-col shrink-0 z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="p-6 hidden md:block">
                    <h1 className="text-lg font-mono font-black text-primary uppercase tracking-tighter leading-none mb-1">
                        Benue Fest
                    </h1>
                    <p className="text-gray-400 text-xs tracking-widest uppercase">Admin Portal</p>
                </div>

                <nav className="flex-1 py-4">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-6 py-3 transition-colors ${isActive ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        <span className={isActive ? 'text-primary' : 'text-gray-400'}>{item.icon}</span>
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => {
                            localStorage.removeItem('token')
                            window.location.href = '/admin/login'
                        }}
                        className="w-full flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <FaSignOutAlt />
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-gray-50">
                <div className="p-8 md:p-12">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
