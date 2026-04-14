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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 py-10">
      <div className="relative max-w-md w-full">
        <div className="absolute -top-8 left-6 h-28 w-28 rounded-full bg-blue-100 opacity-70 blur-2xl"></div>
        <div className="absolute -bottom-8 right-6 h-28 w-28 rounded-full bg-indigo-100 opacity-70 blur-2xl"></div>
        <div className="relative rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-200 backdrop-blur-xl">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-slate-600 hover:text-slate-900 text-sm">
              ← Back
            </Link>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white shadow-lg">
              🔐
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              {isSignUp ? 'Create a new account to start.' : 'Enter your credentials to continue.'}
            </p>
          </div>

          {message && (
            <div className={`mb-4 rounded-xl px-4 py-3 text-sm font-medium ${
              message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
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
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full rounded-2xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-slate-600 hover:text-slate-900 text-sm"
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}