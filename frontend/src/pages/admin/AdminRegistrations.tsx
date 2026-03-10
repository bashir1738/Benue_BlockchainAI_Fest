export default function AdminRegistrations() {
    const registrations: any[] = []

    return (
        <div>
            <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrations</h1>
                    <p className="text-gray-500">Manage all general event attendees and ticket sales.</p>
                </div>
                <button className="bg-primary hover:bg-green text-secondary hover:text-white font-bold py-2 px-6 rounded-lg transition-all shadow-md w-full md:w-auto">
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
                                <th className="px-6 py-4">Ticket Type</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 hidden md:table-cell">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {registrations.map((reg) => (
                                <tr key={reg.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{reg.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{reg.name}</td>
                                    <td className="px-6 py-4">{reg.email}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                            {reg.ticket.split(' -')[0]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{reg.date}</td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${reg.status === 'Confirmed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                                            }`}>
                                            {reg.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-primary transition-colors font-medium text-sm mr-4">View</button>
                                        <button className="text-gray-400 hover:text-red-500 transition-colors font-medium text-sm">Delete</button>
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
