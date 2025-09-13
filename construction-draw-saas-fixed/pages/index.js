import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Construction Draw Verification</title>
        <meta name="description" content="AI-powered construction loan draw verification" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Construction Draw Verification
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered document analysis for construction loans
          </p>

          <div className="space-x-4">
            <Link href="/submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Submit Documents
            </Link>
            <Link href="/auth/login" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Banker Login
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Fast Processing</h3>
            <p className="text-gray-600">Process draw requests in minutes, not days</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Automated document analysis and risk assessment</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Bank-Grade Security</h3>
            <p className="text-gray-600">Enterprise security for sensitive financial documents</p>
          </div>
        </div>
      </div>
    </div>
  );
}
