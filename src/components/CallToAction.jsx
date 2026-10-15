'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Calendar03Icon,
  Mail01Icon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction({
  defaultJurisdiction = 'United States',
  title = 'Get started with Mathews Consultancy today',
  subtitle = 'Reach out through our inquiry form or schedule an instant 30-minute discovery call directly on our calendar.',
}) {
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'submitting' | 'submitted'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jurisdiction: defaultJurisdiction,
    service: 'Tax Compliance & Filing',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate inquiry submission
    setTimeout(() => {
      setFormStatus('submitted')
    }, 700)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      jurisdiction: defaultJurisdiction,
      service: 'Tax Compliance & Filing',
      message: '',
    })
    setFormStatus('idle')
  }

  return (
    <section
      id="get-started-today"
      aria-label="Contact and consultation booking with Mathews Consultancy"
      className="relative overflow-hidden bg-blue-600 py-24 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-60"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 px-4 py-1.5 text-xs font-semibold text-blue-100 ring-1 ring-white/20 sm:text-sm">
            <span>Direct Advisory &amp; Booking</span>
            <span className="text-blue-300">•</span>
            <span>Mathews Consultancy &amp; Mathews Consulting</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
          {/* Card 1: Reach Through Form */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/10">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <HugeiconsIcon icon={Mail01Icon} size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Fill in your details and an advisor will respond within 24 hours.
                  </p>
                </div>
              </div>

              {formStatus === 'submitted' ? (
                <div className="mt-10 rounded-2xl bg-emerald-50 p-6 text-center border border-emerald-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={28} strokeWidth={2} />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold text-emerald-900">
                    Inquiry Received!
                  </h4>
                  <p className="mt-2 text-sm text-emerald-700">
                    Thank you, <strong className="font-semibold">{formData.name}</strong>. A Mathews Consultancy advisory specialist will review your requirements and reach out to <strong className="font-semibold">{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Work / Personal Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="jurisdiction" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Primary Region
                      </label>
                      <select
                        id="jurisdiction"
                        name="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                      >
                        <option value="United States">United States (US)</option>
                        <option value="United Kingdom">United Kingdom (UK)</option>
                        <option value="India">India</option>
                        <option value="Cross-Border Multi-Region">Cross-Border (US/UK/India)</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                      >
                        <option value="Tax Compliance & Filing">Tax Compliance &amp; Filing</option>
                        <option value="Bookkeeping & Accounting">Bookkeeping &amp; Accounting</option>
                        <option value="Expat & NRI Tax Advisory">Expat &amp; NRI Tax Advisory</option>
                        <option value="Virtual CFO & Advisory">Virtual CFO &amp; Advisory</option>
                        <option value="International Payroll">International Payroll</option>
                        <option value="General Consultation">General Financial Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      How can we assist you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your business structure, tax needs, or specific questions..."
                      className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 transition disabled:opacity-75"
                  >
                    {formStatus === 'submitting' ? 'Submitting Request...' : 'Send Consultation Request'}
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              🔒 Your data is confidential and protected under NDA and data privacy regulations.
            </p>
          </div>

          {/* Card 2: Reach Through Cal Booking */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/10">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HugeiconsIcon icon={Calendar03Icon} size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900">
                      Book an Instant Call
                    </h3>
                    <p className="text-xs text-slate-500 sm:text-sm">
                      Select a date and time directly on our live calendar.
                    </p>
                  </div>
                </div>
                <a
                  href="https://cal.com/mathews-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  aria-label="Open Cal booking in full window"
                >
                  <span>Full screen</span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
                </a>
              </div>

              {/* Embedded Cal.com / Cal.id Scheduler */}
              <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
                <iframe
                  src="https://cal.com/mathews-consultancy?embed=true"
                  title="Schedule a consultation with Mathews Consultancy on Cal"
                  className="w-full h-[470px] border-0 bg-white"
                  allow="camera; microphone; autoplay; display-capture"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 gap-2">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live calendar integration (Cal.id / Cal.com)
              </span>
              <a
                href="https://cal.com/mathews-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 sm:hidden"
              >
                Open in new window
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
