import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Building02Icon,
  Shield01Icon,
  BookOpen01Icon,
  Globe02Icon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'

export const metadata = {
  title: 'US Practice (EA & CPA) - Tax, IRS Defense & Accounting | Mathews Consultancy',
  description:
    'Comprehensive US tax compliance, IRS audit representation, Form 1040/1120/1065, FBAR/FATCA, and multi-state SALT compliance by licensed Enrolled Agents and CPAs.',
  alternates: {
    canonical: 'https://mathewsconsultancy.com/services/us',
  },
}

const usServices = [
  {
    title: 'Individual Income Tax',
    code: 'Form 1040 & 1040-NR',
    description:
      'Full-spectrum tax preparation for US citizens, green card holders, and non-resident aliens. We navigate complex filing statuses, multiple revenue streams, and foreign income disclosures.',
    points: [
      'Form 1040 & 1040-NR for residents and non-resident aliens',
      'Schedules C (Sole Proprietors), E (Rental/Royalties), and SE (Self-Employment)',
      'Dual-status alien tax returns and first-year choice elections',
      'ITIN Application assistance (Form W-7 Certified Acceptance)',
    ],
  },
  {
    title: 'Corporate Taxation',
    code: 'Form 1120, 1120-S & 1065',
    description:
      'Strategic corporate tax planning and compliant annual filings for growing enterprises, multi-member LLCs, and foreign-owned US entities.',
    points: [
      'C-Corporation tax returns (Form 1120)',
      'S-Corporation annual filings and K-1 distributions (Form 1120-S)',
      'LLC & Partnership returns (Form 1065)',
      'Foreign-owned US single-member LLC disclosures (Form 5472 / 1120)',
    ],
  },
  {
    title: 'IRS Representation & Defense',
    code: 'Enrolled Agent Defense',
    description:
      'Direct, licensed representation before the Internal Revenue Service. We resolve audits, tax debt, levy notices, and penalties with authoritative advocacy.',
    points: [
      'IRS audit defense and examination representation',
      'Back tax resolution & Offer in Compromise (OIC)',
      'Penalty abatement and statutory interest relief',
      'Wage garnishment release and bank levy removals',
    ],
  },
  {
    title: 'Foreign Asset Reporting',
    code: 'FBAR & FATCA Compliance',
    description:
      'Rigorous compliance for US persons with offshore financial interests, overseas pensions, foreign bank accounts, and international mutual funds.',
    points: [
      'FinCEN Form 114 (FBAR) filing for accounts exceeding $10,000',
      'FATCA Form 8938 statement of specified foreign financial assets',
      'PFIC Form 8621 reporting for foreign mutual funds and investments',
      'IRS Streamlined Foreign Offshore Procedures for delinquent filers',
    ],
  },
  {
    title: 'US Payroll & 1099 Compliance',
    code: 'Form 941, 940, W-2 & 1099',
    description:
      'End-to-end payroll processing and employer tax filings ensuring full compliance with federal and state department of labor regulations.',
    points: [
      'Quarterly federal employer tax returns (Form 941)',
      'Annual federal unemployment filings (Form 940 FUTA)',
      'Annual employee W-2/W-3 preparation and distribution',
      'Form 1099-NEC & 1099-MISC contractor reporting',
    ],
  },
  {
    title: 'Multi-State SALT Compliance',
    code: '50-State Sales & Income Tax',
    description:
      'Multi-jurisdictional state and local tax compliance protecting your business from state tax liabilities, nexus pitfalls, and local audit exposure.',
    points: [
      'Economic and physical nexus analysis across all 50 states',
      'Sales and use tax registration and recurring filings',
      'State corporate income tax returns and apportionment calculations',
      'Annual state franchise tax and annual report submissions',
    ],
  },
]

export default function USPracticePage() {
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
              <span className="text-blue-400 font-medium">US Practice</span>
            </nav>

            {/* Jurisdiction Switcher Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
                <span>🇺🇸 US Practice</span>
                <span className="text-slate-400">•</span>
                <span>US EA &amp; CPA Credentials</span>
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Switch practice:</span>
                <Link href="/services/uk" className="hover:text-white underline decoration-slate-600">🇬🇧 UK Practice</Link>
                <span>·</span>
                <Link href="/services/india" className="hover:text-white underline decoration-slate-600">🇮🇳 India Practice</Link>
              </div>
            </div>

            <h1 className="font-display text-4xl font-medium tracking-tight sm:text-6xl max-w-4xl">
              US Practice: Tax Compliance, IRS Defense &amp; Accounting
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Led by licensed IRS Enrolled Agents (EA) and Certified Public Accountants (CPA). We deliver end-to-end corporate, individual, and cross-border advisory across federal and 50-state jurisdictions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#get-started-today" color="blue">
                Book a US Consultation
              </Button>
              <Button href="#us-modules" variant="outline" color="white">
                View All US Services
              </Button>
            </div>

            {/* Credentials bar */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4">
              {[
                ['Credentials', 'IRS Enrolled Agents & CPAs'],
                ['Coverage', 'Federal & All 50 States'],
                ['Foreign Asset', 'FBAR & FATCA Certified'],
                ['Standards', 'IRS Circular 230 & US GAAP'],
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
        <section id="us-modules" className="py-20 sm:py-28 bg-slate-50">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                US Regional Service Modules
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                Detailed scope of operational capabilities and statutory filings delivered by our US practice team.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {usServices.map((service) => (
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
                      Consult an EA / CPA
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
                    <span>Cross-Border Flagship Integration</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-medium">
                    US–India &amp; US–UK Cross-Border Tax Suite
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-blue-100 leading-relaxed">
                    Specialized tax planning for NRIs, H-1B / L-1 visa holders, green card holders, and founders operating across the US, UK, and India. We optimize Foreign Tax Credits (Form 1116), invoke DTAA treaty relief, and ensure seamless funds repatriation.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button href="#get-started-today" color="white" className="w-full justify-center">
                    Book Expat Tax Review
                  </Button>
                  <Button href="/services/india" variant="outline" color="white" className="w-full justify-center">
                    Explore India Practice →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Embedded Booking & Inquiry Form */}
        <CallToAction
          defaultJurisdiction="United States"
          title="Schedule your US Practice Consultation"
          subtitle="Speak with our US Enrolled Agents and CPAs. Submit an inquiry or reserve an instant slot on our live calendar."
        />
      </main>
      <Footer />
    </>
  )
}
