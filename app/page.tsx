'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-md w-full">
        <div className="absolute -top-10 -left-8 h-28 w-28 rounded-full bg-blue-100 opacity-70 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-indigo-100 opacity-70 blur-2xl"></div>
        <div className="relative rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-200 backdrop-blur-xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl text-white shadow-lg">
            ✨
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Welcome to your portal
          </h1>
          <p className="text-slate-600 mb-8 leading-7">
            A clean and simple login experience. Sign in or create an account to continue.
          </p>
          <Link href="/auth">
            <button className="w-full rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
              Continue to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}