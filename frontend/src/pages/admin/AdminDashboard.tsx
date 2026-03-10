import { FaUsers, FaLaptopCode, FaMicrophone, FaChalkboardTeacher } from 'react-icons/fa'

export default function AdminDashboard() {
    const stats = [
        { label: 'Total Registrations', value: '0', icon: <FaUsers />, color: 'bg-blue-50 text-blue-600' },
        { label: 'Hackathon Registrations', value: '0', icon: <FaLaptopCode />, color: 'bg-green-50 text-green-600' },
        { label: 'Showcase Registrations', value: '0', icon: <FaChalkboardTeacher />, color: 'bg-orange-50 text-orange-600' },
        { label: 'Speaker Registrations', value: '0', icon: <FaMicrophone />, color: 'bg-purple-50 text-purple-600' },
    ]

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome to the Benue Blockchain AI Fest admin portal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
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
                <div className="space-y-6">
                    {([] as { name: string, action: string, time: string }[]).map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                {activity.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-gray-900 font-medium tracking-tight">
                                    {activity.name} <span className="text-gray-500 font-normal">{activity.action}</span>
                                </p>
                                <p className="text-gray-400 text-sm">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                    <div className="text-gray-500 text-center py-4">No recent activity.</div>
                </div>
            </div>
        </div>
    )
}
