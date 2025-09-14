// pages/dashboard/index.js - Banker Dashboard
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Dashboard() {
  const [projects] = useState([
    {
      id: 1,
      name: 'Sunset Ridge Development - Phase 2',
      address: '123 Construction Ave, Denver, CO',
      loanAmount: 750000,
      drawAmount: 156000,
      status: 'pending',
      completion: 34,
      submittedDate: '2024-03-15',
      issues: 2
    },
    {
      id: 2,
      name: 'Downtown Office Complex',
      address: '456 Business Blvd, Austin, TX',
      loanAmount: 1200000,
      drawAmount: 89000,
      status: 'approved',
      completion: 67,
      submittedDate: '2024-03-14',
      issues: 0
    },
    {
      id: 3,
      name: 'Residential Townhomes',
      address: '789 Family St, Portland, OR',
      loanAmount: 950000,
      drawAmount: 234000,
      status: 'flagged',
      completion: 45,
      submittedDate: '2024-03-13',
      issues: 4
    }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'flagged': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleAction = (projectId, action) => {
    alert(`${action} project ${projectId}\nAction recorded in audit log.`)
  }

  return (
    <>
      <Head>
        <title>Banker Dashboard - Construction SaaS</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                Construction Draw Dashboard
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, Demo Banker</span>
                <Link href="/" className="text-blue-600 hover:text-blue-500">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-gray-600">Pending Review</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-gray-600">Approved Today</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-gray-600">Flagged Issues</div>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Project Portfolio</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Draw Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issues</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{project.name}</div>
                          <div className="text-sm text-gray-500">{project.address}</div>
                          <div className="text-xs text-gray-400">Submitted: {project.submittedDate}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          ${project.drawAmount.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          of ${project.loanAmount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{project.completion}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{width: `${project.completion}%`}}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${project.issues > 0 ? 'text-red-600 font-medium' : 'text-green-600'}`}>
                          {project.issues} issues
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button 
                          onClick={() => handleAction(project.id, 'Approved')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => handleAction(project.id, 'Flagged')}
                          className="text-red-600 hover:text-red-900"
                        >
                          Flag
                        </button>
                        <button 
                          onClick={() => handleAction(project.id, 'Requested more info for')}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Request Info
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
