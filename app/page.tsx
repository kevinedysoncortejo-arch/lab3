'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full rounded-3xl border border-gray-200 bg-white p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Welcome to the portal
        </h1>
        <p className="text-gray-600 mb-8 leading-7">
          Simple authentication and a clean experience. Start with an email and password.
        </p>
        <Link href="/auth">
          <button className="w-full rounded-xl border border-gray-900 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50">
            Continue to Sign In / Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}