'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-lg w-full">
        <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
        <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-3xl shadow-xl shadow-sky-500/20">
            ✨
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white mb-4">
            Welcome
          </h1>
          <p className="mx-auto max-w-md text-sm text-slate-300 leading-7 mb-10">
            A minimalist entry point with modern polish. Click get started to go to login.
          </p>
          <Link href="/auth">
            <button className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}