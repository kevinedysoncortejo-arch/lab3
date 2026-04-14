'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-md w-full">
        <div className="absolute -top-10 -left-8 h-24 w-24 rounded-full bg-slate-200 opacity-70 blur-2xl"></div>
        <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-blue-100 opacity-60 blur-2xl"></div>
        <div className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 text-center">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white shadow-md">
            ✓
          </div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">
            Formal Portal Experience
          </h1>
          <p className="text-slate-600 mb-8 leading-7">
            Secure access and a polished entry point for your app. Centered, simple, and ready to use.
          </p>
          <Link href="/auth">
            <button className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}