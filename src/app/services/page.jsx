import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Building02Icon,
  BookOpen01Icon,
  Shield01Icon,
  Globe02Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'

export const metadata = {
  title: 'Global Services & Regional Practices | Mathews Consultancy',
  description:
    'Explore Mathews Consultancy practice areas across the United States (EA & CPA), United Kingdom (ACCA), and India (CA), alongside cross-border expat advisory and virtual CFO solutions.',
  alternates: {
    canonical: 'https://mathewsconsultancy.com/services',
  },
}

const practices = [
  {
    title: 'United States Practice',
    badge: 'US EA & CPA',
    flag: '🇺🇸',
    href: '/services/us',
    description:
      'Federal and 50-state tax compliance, IRS audit defense, corporate returns (Form 1120/1120-S/1065), expat reporting (FBAR/FATCA), and multi-state SALT management.',
    highlights: [
      'Individual Form 1040 & 1040-NR',
      'Corporate 1120 & Partnership 1065',
      'IRS Audit Representation & Back Taxes',
      'FBAR (FinCEN 114) & FATCA Form 8938',
      '50-State Sales & Local Tax (SALT)',
    ],
  },
  {
    title: 'United Kingdom Practice',
    badge: 'UK ACCA',
    flag: '🇬🇧',
    href: '/services/uk',
    description:
      'HMRC tax computations, CT600 Corporation Tax, SA100 Self Assessment, Making Tax Digital (MTD) compliant VAT, and Companies House FRS 102/105 statutory accounts.',
    highlights: [
      'Corporation Tax (CT600) & Computations',
      'Self Assessment (SA100) & Capital Gains',
      'Making Tax Digital (MTD) VAT Filings',
      'HMRC RTI Managed Payroll & Workplace Pensions',
      'FRS 102 / 105 Accounts for Companies House',
    ],
  },
  {
    title: 'India Practice',
    badge: 'Indian CA',
    flag: '🇮🇳',
    href: '/services/india',
    description:
      'Direct and corporate income tax, Section 44AB statutory tax audits, monthly GSTR-1/3B and annual 9/9C reconciliations, MCA ROC compliance, and FEMA advisory.',
    highlights: [
      'Corporate & Individual ITR-1 through ITR-7',
      'Section 44AB Mandatory Tax Audits',
      'Monthly GST & Annual 9/9C Audits',
      'Indian Payroll, PF, ESI & Form 16',
      'Form 3CEB Transfer Pricing & Form 15CA/CB',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
          <Container className="relative z-10 text-center">
            <nav className="flex justify-center items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Services</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
              <span>Connected Across 3 Jurisdictions</span>
              <span className="text-slate-400">•</span>
              <span>US · UK · India</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-medium tracking-tight sm:text-6xl max-w-4xl mx-auto">
              Regional Practices &amp; Global Advisory
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Mathews Consultancy combines credentials across the US (EA/CPA), UK (ACCA), and India (CA) into a single unified advisory platform.
            </p>
          </Container>
        </section>

        {/* Practice Cards */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {practices.map((practice) => (
                <article
                  key={practice.title}
                  className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 flex flex-col justify-between hover:shadow-xl hover:ring-blue-600/30 transition group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{practice.flag}</span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {practice.badge}
                      </span>
                    </div>

                    <h2 className="mt-6 font-display text-2xl font-semibold text-slate-900">
                      {practice.title}
                    </h2>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {practice.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Key Capabilities
                      </div>
                      <ul className="space-y-2">
                        {practice.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                            <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              size={15}
                              className="text-blue-600 shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <Button href={practice.href} color="blue" className="w-full justify-center">
                      <span>Explore {practice.title}</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Cross-Border Flagship Section */}
            <div className="mt-16 rounded-3xl bg-white p-8 sm:p-12 shadow-xl ring-1 ring-slate-900/5">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <HugeiconsIcon icon={Globe02Icon} size={16} />
                  <span>Cross-Border Flagship Offerings</span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-medium text-slate-900">
                  Multi-Jurisdiction Expat &amp; Global CFO Solutions
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Connecting your financial compliance across the US, UK, and India with zero friction.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80">
                  <h4 className="font-display text-lg font-semibold text-slate-900">
                    US–India / UK–India Expat Tax Suite
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Specialized tax planning for NRIs, foreign workers, and green card holders. We handle Double Taxation Avoidance Agreement (DTAA) claims, Foreign Tax Credit (FTC Form 1116) optimization, and Indian RBI repatriation approvals.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80">
                  <h4 className="font-display text-lg font-semibold text-slate-900">
                    Global Subsidiary &amp; Virtual CFO
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    End-to-end operational execution for expanding companies. Setting up US/UK subsidiaries for Indian enterprises, global bookkeeping on QuickBooks &amp; Xero, inter-company transfer pricing, and financial modeling.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <CallToAction
          title="Connect with our global advisory team"
          subtitle="Choose your preferred country practice or book a cross-border discovery call with our specialists."
        />
      </main>
      <Footer />
    </>
  )
}
