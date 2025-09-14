// pages/submit/index.js - Document Upload Portal
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Submit() {
  const [projectName, setProjectName] = useState('')
  const [address, setAddress] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsUploading(true)

    // Demo upload process
    setTimeout(() => {
      alert(`Demo upload successful!\n\nProject: ${projectName}\nLoan Amount: $${loanAmount}\nFile: ${file?.name || 'No file selected'}\n\nProcessing complete! Banker will be notified.`)

      // Reset form
      setProjectName('')
      setAddress('')
      setLoanAmount('')
      setFile(null)
      setIsUploading(false)
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>Submit Draw Request - Construction SaaS</title>
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Submit Draw Request
              </h1>
              <p className="text-lg text-gray-600">
                Upload your construction documents for AI-powered verification
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Sunset Ridge Development - Phase 2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123 Construction Ave, City, State 12345"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Loan Amount *
                  </label>
                  <input
                    type="number"
                    required
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="500000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Construction Documents *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="mb-4"
                    />
                    <p className="text-sm text-gray-600">
                      Upload pay applications, lien waivers, insurance certificates, etc.
                      <br />
                      Supported formats: PDF, DOC, XLS (Max 10MB)
                    </p>
                    {file && (
                      <p className="mt-2 text-sm text-green-600">
                        Selected: {file.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="text-sm font-medium text-blue-900 mb-2">
                    What happens next?
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>â€¢ AI analyzes your documents in under 2 minutes</li>
                    <li>â€¢ Banker receives instant verification report</li>
                    <li>â€¢ You get approval notification within 24 hours</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:opacity-50 font-medium"
                  >
                    {isUploading ? 'Processing...' : 'Submit Draw Request'}
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
