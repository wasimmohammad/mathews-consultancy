import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  BookOpen01Icon,
  Shield01Icon,
  Globe02Icon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
  Building02Icon,
} from '@hugeicons/core-free-icons'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'

export const metadata = {
  title: 'UK Practice (ACCA) - Corporation Tax, VAT & Statutory Accounts | Mathews Consultancy',
  description:
    'HMRC & Companies House statutory compliance, CT600 Corporation Tax, SA100 Self Assessment, Making Tax Digital (MTD) VAT, and RTI payroll by ACCA-certified professionals.',
  alternates: {
    canonical: 'https://mathewsconsultancy.com/services/uk',
  },
}

const ukServices = [
  {
    title: 'Corporation Tax',
    code: 'HMRC Form CT600',
    description:
      'Annual corporation tax computations and CT600 submissions directly to HM Revenue & Customs, maximizing allowable reliefs and investment allowances.',
    points: [
      'CT600 tax returns and full electronic iXBRL computations',
      'Capital allowances optimization (Full Expensing & AIA)',
      'R&D Tax Credit claims for innovation-driven UK companies',
      'Group relief calculations and inter-company loss utilization',
    ],
  },
  {
    title: 'Self Assessment',
    code: 'SA100 Tax Returns',
    description:
      'Personal tax compliance for UK company directors, contractors, sole traders, high net-worth individuals, and non-resident landlords.',
    points: [
      'Self Assessment tax returns (SA100) and dividend planning',
      'UK Capital Gains Tax (CGT) reporting on 60-day property disposals',
      'Non-resident UK tax returns (SA109) and double taxation relief',
      'High Income Child Benefit Charge and pension tax relief reviews',
    ],
  },
  {
    title: 'VAT Compliance & MTD',
    code: 'Making Tax Digital (MTD)',
    description:
      'Complete Value Added Tax advisory, digital record keeping, and timely quarterly return submissions compliant with HMRC MTD mandates.',
    points: [
      'Making Tax Digital (MTD) registration and digital bridge setup',
      'Standard, Flat Rate, and Cash Accounting Scheme submissions',
      'International cross-border VAT, export zero-rating, and reverse charge',
      'Partial exemption calculations and HMRC VAT audit support',
    ],
  },
  {
    title: 'UK Managed Payroll & RTI',
    code: 'HMRC Real Time Information',
    description:
      'Fully managed payroll bureau services ensuring timely salary processing, payslip issuance, and automated Real Time Information (RTI) submissions.',
    points: [
      'HMRC Real Time Information (RTI) monthly submissions (FPS & EPS)',
      'Digital payslip distribution, P60 annual summaries, and P45 forms',
      'Statutory payments (SSP, SMP, SPP) and student loan deductions',
      'PAYE settlement agreements and benefits-in-kind (P11D) reporting',
    ],
  },
  {
    title: 'Workplace Pensions',
    code: 'Auto-Enrolment & NEST',
    description:
      'Statutory workplace pension compliance and auto-enrolment administration ensuring full alignment with The Pensions Regulator requirements.',
    points: [
      'Auto-enrolment scheme setup and qualifying earnings calculations',
      'NEST, The People’s Pension, and Smart Pension administration',
      'Statutory communications to enrolled and eligible employees',
      'Three-year re-enrolment and declaration of compliance filings',
    ],
  },
  {
    title: 'Statutory Accounts & Filings',
    code: 'FRS 102 / FRS 105 Accounts',
    description:
      'Preparation and electronic filing of annual statutory financial statements with Companies House and HMRC under UK GAAP.',
    points: [
      'FRS 102 Section 1A (Small Entities) and FRS 105 (Micro-Entities) accounts',
      'Electronic filing of full, filleted, and abridged accounts',
      'Companies House Confirmation Statement (CS01) annual filings',
      'PSC (People with Significant Control) register maintenance',
    ],
  },
]

export default function UKPracticePage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb & Hero */}
        <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
          <Container className="relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition">Services</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">UK Practice</span>
            </nav>

            {/* Jurisdiction Switcher Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
                <span>🇬🇧 UK Practice</span>
                <span className="text-slate-400">•</span>
                <span>UK ACCA Credentials</span>
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Switch practice:</span>
                <Link href="/services/us" className="hover:text-white underline decoration-slate-600">🇺🇸 US Practice</Link>
                <span>·</span>
                <Link href="/services/india" className="hover:text-white underline decoration-slate-600">🇮🇳 India Practice</Link>
              </div>
            </div>

            <h1 className="font-display text-4xl font-medium tracking-tight sm:text-6xl max-w-4xl">
              UK Practice: Corporation Tax, VAT &amp; Statutory Accounting
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Supervised under the Association of Chartered Certified Accountants (ACCA). We deliver comprehensive HMRC tax returns, Companies House statutory filings, MTD-compliant VAT, and managed payroll.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#get-started-today" color="blue">
                Book a UK Consultation
              </Button>
              <Button href="#uk-modules" variant="outline" color="white">
                View All UK Services
              </Button>
            </div>

            {/* Credentials bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4">
              {[
                ['Supervision', 'UK ACCA Certified Practice'],
                ['HMRC Status', 'Making Tax Digital (MTD) Compliant'],
                ['Accounts', 'FRS 102 & FRS 105 Standards'],
                ['Companies House', 'Authorized E-Filing Bureau'],
              ].map(([label, val]) => (
                <div key={label}>
                  <div className="text-xs uppercase tracking-wider text-slate-400">{label}</div>
                  <div className="mt-1 font-semibold text-sm text-white">{val}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Core Regional Service Modules */}
        <section id="uk-modules" className="py-20 sm:py-28 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                UK Regional Service Modules
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Detailed scope of operational capabilities and statutory filings delivered by our UK practice team.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ukServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 flex flex-col justify-between hover:shadow-xl hover:ring-blue-600/20 transition"
                >
                  <div>
                    <div className="inline-block rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {service.code}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                          <HugeiconsIcon
                            icon={CheckmarkCircle02Icon}
                            size={16}
                            className="text-blue-600 shrink-0 mt-0.5"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <Button
                      href="#get-started-today"
                      color="blue"
                      variant="outline"
                      className="w-full text-xs"
                    >
                      Consult an ACCA Accountant
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Cross-border Flagship Highlight Box */}
            <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 sm:p-12 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-200">
                    <HugeiconsIcon icon={Globe02Icon} size={16} />
                    <span>UK–India &amp; UK–US Cross-Border Solutions</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-medium">
                    UK Subsidiary Setup &amp; Cross-Border Expat Advisory
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                    Setting up UK subsidiaries for overseas enterprises, establishing intercompany transfer pricing frameworks, and advising expatriates on the UK-India Double Tax Avoidance Agreement (DTAA) and remittance-basis rules.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button href="#get-started-today" color="white" className="w-full justify-center">
                    Book UK Expat Review
                  </Button>
                  <Button href="/services/us" variant="outline" color="white" className="w-full justify-center">
                    Explore US Practice →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Embedded Booking & Inquiry Form */}
        <CallToAction
          defaultJurisdiction="United Kingdom"
          title="Schedule your UK Practice Consultation"
          subtitle="Speak with our UK ACCA-certified professionals. Submit an inquiry or reserve an instant slot on our live calendar."
        />
      </main>
      <Footer />
    </>
  )
}
