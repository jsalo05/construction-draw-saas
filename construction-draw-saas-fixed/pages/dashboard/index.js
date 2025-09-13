import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading projects
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          name: 'Kroc Construction Project',
          address: '123 Main St, Kent County',
          amount: 156978,
          status: 'pending',
          completion: 34.47,
          issues: 4,
          submittedAt: '2023-03-02'
        },
        {
          id: 2,
          name: 'Riverside Development',
          address: '456 Oak Ave, Kent County', 
          amount: 245000,
          status: 'approved',
          completion: 67.5,
          issues: 0,
          submittedAt: '2023-03-01'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Banker Dashboard - Construction Draw Verification</title>
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold">
                Construction Draw
              </Link>
              <span className="ml-4 text-sm text-gray-500">Banker Dashboard</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">banker@demo.com</span>
              <Link href="/auth/login" className="text-sm text-blue-600 hover:text-blue-800">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Draw Requests</h1>
          <p className="text-gray-600">Review and approve construction loan draw requests</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading projects...</div>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {projects.map((project) => (
                <li key={project.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500">{project.address}</p>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                          <span>Draw Amount: ${project.amount.toLocaleString()}</span>
                          <span>Completion: {project.completion}%</span>
                          <span>Submitted: {project.submittedAt}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {project.issues > 0 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {project.issues} issues
                          </span>
                        )}
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                            Approve
                          </button>
                          <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                            Flag
                          </button>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Total Requests</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Pending Review</h3>
            <p className="text-3xl font-bold text-yellow-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Approved</h3>
            <p className="text-3xl font-bold text-green-600">14</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Flagged</h3>
            <p className="text-3xl font-bold text-red-600">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
