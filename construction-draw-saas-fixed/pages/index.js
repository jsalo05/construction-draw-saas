// pages/index.js - Landing Page
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Construction Draw Verification SaaS</title>
        <meta name="description" content="Streamline construction draw approvals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Construction Draw Verification Platform
            </h1>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Streamline construction loan draw approvals with AI-powered document analysis. 
              Reduce processing time from days to minutes.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Link href="/submit" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Submit Draw Request
              </Link>
              <Link href="/auth/login" className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Banker Login
              </Link>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">âš¡</div>
              <h3 className="text-xl font-bold mb-2">99% Faster Processing</h3>
              <p>Reduce draw review time from 3-5 days to under 2 hours</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">ðŸ”</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
              <p>Automatic document verification and issue detection</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">ðŸ¦</div>
              <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
              <p>Enterprise security and compliance standards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
