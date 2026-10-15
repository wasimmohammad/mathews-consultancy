import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Shield01Icon,
  BookOpen01Icon,
  Building02Icon,
  Globe02Icon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'

export const metadata = {
  title: 'India Practice (CA) - Corporate Tax, GST & Statutory Audit | Mathews Consultancy',
  description:
    'Comprehensive Indian direct tax, Section 44AB tax audits, monthly GST reconciliations, MCA ROC corporate compliance, and FEMA/RBI advisory by Chartered Accountants.',
  alternates: {
    canonical: 'https://mathewsconsultancy.com/services/india',
  },
}

const indiaServices = [
  {
    title: 'Direct Tax Filings',
    code: 'ITR-1 through ITR-7',
    description:
      'Complete corporate and individual income tax return preparation and e-filing. We advise on tax planning, advance tax obligations, and capital gains minimization.',
    points: [
      'Corporate income tax computations and annual returns (ITR-6)',
      'Individual, HUF, and professional tax filings (ITR-1 through ITR-4)',
      'Partnership & LLP annual tax filings (ITR-5)',
      'Advance tax estimation, quarterly installments, and MAT calculations',
    ],
  },
  {
    title: 'Tax Audit (Section 44AB)',
    code: 'Form 3CA / 3CB / 3CD',
    description:
      'Mandatory statutory tax audits conducted by Chartered Accountants for enterprises and professionals exceeding prescribed turnover thresholds.',
    points: [
      'Comprehensive audit of books of account under Section 44AB',
      'Preparation and e-filing of Form 3CA/3CB and Form 3CD particulars',
      'Depreciation verification, 43B statutory dues reconciliation',
      'TDS compliance verification and reporting of disallowances',
    ],
  },
  {
    title: 'GST Filings & Reconciliation',
    code: 'GSTR-1, 3B & 9/9C Audit',
    description:
      'End-to-end Goods and Services Tax compliance, recurring monthly returns, input tax credit optimization, and annual reconciliation audits.',
    points: [
      'Monthly GSTR-1 outward supply reporting and GSTR-3B summary returns',
      'Input Tax Credit (ITC) reconciliation with auto-drafted GSTR-2B',
      'Annual GSTR-9 return preparation and GSTR-9C reconciliation audit',
      'GST refund applications for export of services and zero-rated supplies',
    ],
  },
  {
    title: 'Indian Payroll, PF & ESI',
    code: 'Salary, PF, ESI & Form 16',
    description:
      'Structured payroll execution with statutory employer contributions, state professional tax adherence, and quarterly withholding returns.',
    points: [
      'Monthly salary structuring, wage registers, and digital payslips',
      'Provident Fund (PF) and Employee State Insurance (ESI) filings',
      'Quarterly TDS on salaries (Form 24Q) and annual Form 16 generation',
      'State-wise Professional Tax (PT) registrations and monthly remittances',
    ],
  },
  {
    title: 'Corporate Law & MCA Compliance',
    code: 'ROC, AOC-4 & MGT-7',
    description:
      'Comprehensive secretarial and corporate governance support under the Companies Act for Private Limited companies and LLPs.',
    points: [
      'New company incorporation (Pvt Ltd, Section 8, OPC, LLP)',
      'Annual ROC filing of financial statements (Form AOC-4)',
      'Annual return submission with the Registrar of Companies (Form MGT-7)',
      'Director Identification Number (DIN) and Digital Signature (DSC) services',
    ],
  },
  {
    title: 'International Tax & FEMA',
    code: 'Form 3CEB, 15CA/CB & RBI',
    description:
      'Cross-border regulatory advisory, transfer pricing documentation, foreign remittance certifications, and RBI foreign exchange compliance.',
    points: [
      'Transfer Pricing documentation and accountant report (Form 3CEB)',
      'Foreign remittance tax withholding certifications (Form 15CA & 15CB)',
      'FEMA & RBI compliance for FDI, ODI, and FLA annual return filings',
      'Lower TDS deduction certificates under Section 195/197 (Form 13)',
    ],
  },
]

export default function IndiaPracticePage() {
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
              <span className="text-blue-400 font-medium">India Practice</span>
            </nav>

            {/* Jurisdiction Switcher Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
                <span>🇮🇳 India Practice</span>
                <span className="text-slate-400">•</span>
                <span>Indian Chartered Accountant (CA) Credentials</span>
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Switch practice:</span>
                <Link href="/services/us" className="hover:text-white underline decoration-slate-600">🇺🇸 US Practice</Link>
                <span>·</span>
                <Link href="/services/uk" className="hover:text-white underline decoration-slate-600">🇬🇧 UK Practice</Link>
              </div>
            </div>

            <h1 className="font-display text-4xl font-medium tracking-tight sm:text-6xl max-w-4xl">
              India Practice: Corporate Tax, GST &amp; Statutory CA Audit
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Led by qualified Indian Chartered Accountants (CA). We deliver comprehensive direct tax filings, Section 44AB tax audits, monthly GST compliance, MCA ROC filings, and cross-border FEMA advisory.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#get-started-today" color="blue">
                Book an India Consultation
              </Button>
              <Button href="#india-modules" variant="outline" color="white">
                View All India Services
              </Button>
            </div>

            {/* Credentials bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4">
              {[
                ['Supervision', 'Chartered Accountants (ICAI)'],
                ['Statutory Audits', 'Section 44AB Tax Audit Certified'],
                ['Indirect Tax', 'GST Monthly & Annual Audit (9/9C)'],
                ['Cross-Border', 'Form 15CA/CB & FEMA Advisory'],
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
        <section id="india-modules" className="py-20 sm:py-28 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                India Regional Service Modules
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Detailed scope of operational capabilities and statutory filings delivered by our India practice team.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {indiaServices.map((service) => (
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
                      Consult a Chartered Accountant
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
                    <span>Cross-Border Flagship NRI Advisory</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-medium">
                    NRI Tax Planning &amp; Indian Asset Repatriation
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                    Specialized tax planning for Non-Resident Indians (NRIs) in the US and UK. We handle property sales in India, obtain Section 197 Lower TDS certificates, issue Form 15CA/CB certifications, and manage NRE/NRO banking repatriation to US or UK accounts.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button href="#get-started-today" color="white" className="w-full justify-center">
                    Book NRI Tax Consultation
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
          defaultJurisdiction="India"
          title="Schedule your India Practice Consultation"
          subtitle="Speak with our Indian Chartered Accountants. Submit an inquiry or reserve an instant slot on our live calendar."
        />
      </main>
      <Footer />
    </>
  )
}
