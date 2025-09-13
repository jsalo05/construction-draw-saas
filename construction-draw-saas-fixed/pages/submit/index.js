import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Submit() {
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Submit Documents - Construction Draw Verification</title>
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Link href="/" className="flex items-center text-xl font-semibold">
              Construction Draw
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Submit Draw Request</h1>

        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-800 mb-2">✅ Submitted Successfully!</h2>
            <p className="text-green-700">Your draw request has been processed and is under review.</p>
            <Link href="/dashboard" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
              View Status →
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter project name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Address
              </label>
              <textarea
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="2"
                placeholder="Enter project address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Draw Amount
              </label>
              <input
                type="number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter draw amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Documents
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input type="file" multiple accept=".pdf,.jpg,.png" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer block text-center">
                  <div className="text-gray-500">
                    <p>Click to upload or drag and drop</p>
                    <p className="text-sm">PDF, JPG, PNG files</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {uploading ? 'Processing...' : 'Submit Draw Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
