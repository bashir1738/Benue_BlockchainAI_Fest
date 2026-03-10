export default function AdminHackathon() {
    const applications: any[] = []

    return (
        <div>
            <div className="mb-10 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Hackathon Applications</h1>
                    <p className="text-gray-500">Review builders applying to participate in the 'Dare to Build' Hackathon.</p>
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
                                <th className="px-6 py-4">Team / Name</th>
                                <th className="px-6 py-4">Project Focus</th>
                                <th className="px-6 py-4 hidden lg:table-cell">GitHub</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {applications.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{app.id}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">{app.name}</p>
                                        <p className="text-sm text-gray-500">{app.contact}</p>
                                    </td>
                                    <td className="px-6 py-4 font-medium">{app.project}</td>
                                    <td className="px-6 py-4 hidden lg:table-cell">
                                        <a href={app.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm truncate block max-w-[200px]">
                                            {app.github}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${app.status === 'Approved' ? 'bg-green-50 text-green-700' :
                                            app.status === 'Under Review' ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-700'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-primary transition-colors font-medium text-sm mr-4">Review</button>
                                        <button className="text-green-500 hover:text-green-600 transition-colors font-medium text-sm">Approve</button>
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
