'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Main card */}
        <div className="relative rounded-3xl border border-white bg-white shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl">
              ✓
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome Back
          </h1>
          <p className="text-gray-500 mb-8 leading-7 text-sm">
            Secure authentication with a clean, modern experience. Get started in seconds.
          </p>

          <Link href="/auth">
            <button className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-4 text-sm font-semibold text-white transition hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 active:scale-95">
              Continue to Sign In / Sign Up
            </button>
          </Link>

          {/* Footer text */}
          <p className="text-xs text-gray-400 mt-6">
            Secure • Simple • Fast
          </p>
        </div>
      </div>
    </div>
  )
}