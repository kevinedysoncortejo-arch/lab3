'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-2xl w-full">
        <div className="absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div className="absolute -bottom-16 right-10 h-36 w-36 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-12 shadow-[0_35px_120px_-60px_rgba(0,0,0,0.7)] backdrop-blur-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-2xl text-white shadow-xl shadow-sky-500/20">
            ✨
          </div>
          <h1 className="text-6xl font-semibold tracking-tight text-white mb-4">
            Welcome
          </h1>
          <p className="mx-auto max-w-xl text-base text-slate-300 leading-8 mb-10">
            Modern, centered, and polished — this landing page gives a premium first impression while staying clean and easy to use.
          </p>
          <Link href="/auth">
            <button className="inline-flex w-full justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}