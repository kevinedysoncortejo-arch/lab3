'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-50 flex items-center justify-center px-4 py-14">
      <div className="relative max-w-3xl w-full">
        <div className="absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-10 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="relative rounded-[3rem] border border-white/10 bg-slate-900/90 p-12 shadow-[0_45px_140px_-80px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 text-3xl text-white shadow-xl shadow-sky-500/20">
            ✨
          </div>
          <h1 className="text-6xl font-semibold tracking-tight text-white mb-4">
            Welcome
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-8 mb-10">
            A premium landing experience with modern layout and centered hierarchy. Start now to access the secure login flow.
          </p>
          <Link href="/auth" className="inline-flex w-full sm:w-auto justify-center">
            <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}