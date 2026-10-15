import Image from 'next/image'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  ChartLineData01Icon,
  Globe02Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'

import { CallToAction } from '@/components/CallToAction'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import backgroundImage from '@/images/background-call-to-action.jpg'

const icons = {
  globe: Globe02Icon,
  chart: ChartLineData01Icon,
  people: UserGroupIcon,
  arrow: ArrowRight01Icon,
}

const services = [
  {
    title: 'United States',
    subtitle: 'Accounting & tax support',
    credential: 'US EA & CPA',
    flag: '🇺🇸',
    href: '/services/us',
    buttonText: 'Explore US Practice (EA & CPA)',
    altText: 'Mathews Consultancy United States Tax and Accounting Practice',
    description:
      'Practical support for Form 1040/1120/1065, IRS audit defense, FBAR/FATCA, and multi-state SALT compliance by licensed Enrolled Agents and CPAs.',
    image: 'https://images.pexels.com/photos/18251514/pexels-photo-18251514.jpeg',
  },
  {
    title: 'United Kingdom',
    subtitle: 'Tax & compliance',
    credential: 'UK ACCA',
    flag: '🇬🇧',
    href: '/services/uk',
    buttonText: 'Explore UK Practice (ACCA)',
    altText: 'Mathews Consulting United Kingdom Corporation Tax and VAT Practice',
    description:
      'Navigate CT600 Corporation Tax, SA100 Self Assessment, Making Tax Digital (MTD) VAT, and Companies House statutory reporting with ACCA specialists.',
    image: 'https://images.pexels.com/photos/937755/pexels-photo-937755.jpeg',
  },
  {
    title: 'India',
    subtitle: 'Tax & business advisory',
    credential: 'Indian CA',
    flag: '🇮🇳',
    href: '/services/india',
    buttonText: 'Explore India Practice (CA)',
    altText: 'Mathews Consultancy India GST, Direct Tax and Advisory Practice',
    description:
      'Coordinated direct tax (ITR 1-7), Section 44AB tax audits, monthly GST reconciliations, MCA ROC filings, and FEMA/RBI cross-border advisory by Chartered Accountants.',
    image: 'https://images.pexels.com/photos/16376256/pexels-photo-16376256.jpeg',
  },
]

function Icon({ name, ...props }) {
  return (
    <HugeiconsIcon
      icon={icons[name]}
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    />
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />

        <section
          id="services"
          aria-label="Cross-border accounting and advisory services by Mathews Consultancy"
          className="relative overflow-hidden bg-blue-600 py-32"
        >
          <Image
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            src={backgroundImage}
            alt=""
            width={2347}
            height={1244}
            unoptimized
          />
          <Container className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Services across borders
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Local expertise and coordinated accounting, tax, and advisory support in the US, UK, and India from Mathews Consultancy and Mathews Consulting.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.altText}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-white shadow-xs">
                        {service.credential}
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{service.flag}</span>
                        <h3 className="font-display text-xl font-semibold text-slate-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-blue-600">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-7 pb-7">
                    <Button
                      href={service.href}
                      color="blue"
                      className="w-full justify-center"
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-100 transition underline underline-offset-4"
              >
                <span>View all regional practice modules &amp; cross-border specifications</span>
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              </Link>
            </div>
          </Container>
        </section>

        <section
          id="cross-border"
          aria-label="Cross-border tax and advisory solutions"
          className="py-20 sm:py-32"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Support that moves with you.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                One coordinated approach to your life and business across borders with Mathews Consulting.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                [
                  'globe',
                  'Expat & NRI tax',
                  'US–India and UK–India tax planning, double taxation treaty relief (DTAA), foreign tax credits (FTC), repatriation, and property planning.',
                ],
                [
                  'chart',
                  'Global business & Virtual CFO',
                  'Subsidiary setup, QuickBooks and Xero bookkeeping, intercompany transfer pricing, and strategic financial reporting.',
                ],
                [
                  'people',
                  'International payroll',
                  'US, UK, and India payroll support with compliant local tax reporting and multi-currency coordination.',
                ],
              ].map(([icon, title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl bg-white p-7 shadow-xl shadow-slate-900/10 flex flex-col justify-between"
                >
                  <div>
                    <Icon name={icon} size={32} className="text-blue-600" />
                    <h3 className="mt-6 font-display text-xl text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                  <a
                    href="#get-started-today"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    Consult an Advisor <Icon name="arrow" size={18} />
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
