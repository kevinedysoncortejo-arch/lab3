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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-10">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-md w-full relative">
        <div className="rounded-3xl border border-white bg-white shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block text-gray-500 hover:text-gray-900 text-sm font-medium transition mb-4">
              ← Back
            </Link>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl mx-auto mb-4">
              🔐
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {isSignUp ? 'Join our platform today' : 'Sign in to your account'}
            </p>
          </div>

        {message && (
          <div className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium transition ${
            message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
            disabled={loading}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none mt-6"
          >
            {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}