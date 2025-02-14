import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to SecureAuth</h1>
      <p className="text-xl text-gray-600 mb-8">A modern and secure authentication system built with Next.js</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Secure Authentication</h2>
          <p className="text-gray-600 mb-4">Our system uses the latest security practices to keep your account safe.</p>
          <ul className="text-left text-gray-600 list-disc list-inside">
            <li>Password hashing with bcrypt</li>
            <li>JWT-based authentication</li>
            <li>Secure password reset process</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">User-Friendly Interface</h2>
          <p className="text-gray-600 mb-4">We've designed our system with ease of use in mind.</p>
          <ul className="text-left text-gray-600 list-disc list-inside">
            <li>Simple sign-up and sign-in process</li>
            <li>Easy-to-use dashboard</li>
            <li>Quick access to account management</li>
          </ul>
        </div>
      </div>

      <div className="space-x-4">
        <Link
          href="/auth/signin"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium border border-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

