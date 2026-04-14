'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/authContext'
import Link from 'next/link'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  
  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' })
      setLoading(false)
      return
    }

    const { error } = isSignUp ? await signUp(email, password) : await signIn(email, password)
    
    if (error) {
      setMessage({ type: 'error', text: error.message })
    } else {
      setMessage({ type: 'success', text: isSignUp ? 'Account created successfully!' : 'Login successful!' })
      setEmail('')
      setPassword('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-md w-full">
        <div className="absolute -top-16 left-6 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl"></div>
        <div className="absolute -bottom-16 right-6 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="relative rounded-[2.5rem] border border-white/10 bg-slate-900/95 p-10 shadow-[0_35px_120px_-60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-slate-400 hover:text-white text-sm">
              ← Back
            </Link>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 text-xl text-white shadow-xl shadow-sky-500/20">
              🔐
            </div>
            <h2 className="text-3xl font-semibold text-white">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
              {isSignUp ? 'Create your account and access the portal.' : 'Sign in to securely access your dashboard.'}
            </p>
          </div>

          {message && (
            <div className={`mb-4 rounded-2xl px-4 py-3 text-sm font-medium ${
              message.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-rose-950/80 text-rose-300 border border-rose-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full rounded-3xl bg-sky-400 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-slate-400 hover:text-white text-sm"
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}