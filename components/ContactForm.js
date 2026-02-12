'use client'

import { useState } from 'react'

// To enable the form:
// 1. Create a free account at https://formspree.io
// 2. Create a new form and copy the form ID
// 3. Replace 'YOUR_FORM_ID' below with your actual form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    const data = new FormData(e.target)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card text-center py-12">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-body font-semibold text-primary mb-2">Message sent</h3>
        <p className="text-body-sm text-secondary">Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-body-sm font-medium text-primary mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-body-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-body-sm font-medium text-primary mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-body-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-body-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-caption text-red-500 text-center">
          Something went wrong. Please try{' '}
          <a href="mailto:hello@alvarofreire.es" className="underline">emailing me directly</a>.
        </p>
      )}
    </form>
  )
}
