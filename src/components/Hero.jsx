import { HugeiconsIcon } from '@hugeicons/react'
import {
  BookOpen01Icon,
  Building02Icon,
  Globe02Icon,
  Shield01Icon,
} from '@hugeicons/core-free-icons'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction to Mathews Consultancy and Mathews Consulting">
      <Container className="pt-12 pb-16 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Accounting and Finance{' '}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">made simple</span>
          </span>{' '}
          for all businesses.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 sm:text-xl">
          <strong className="font-semibold text-slate-900">Mathews Consultancy</strong> (also known as <strong className="font-semibold text-slate-900">Mathews Consulting</strong>) provides specialized accounting, tax compliance, bookkeeping, and cross-border advisory across the US, UK, and India.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="#get-started-today" color="blue">
            Book a Free Consultation
          </Button>
          <Button href="#services" variant="outline">
            Explore Services
          </Button>
        </div>

        <div className="mt-12">
          <p className="font-display text-base text-slate-900">
            Expertise that crosses borders.
          </p>
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-16">
            {[
              [Building02Icon, 'US Practice (IRS & Multi-State)'],
              [BookOpen01Icon, 'UK Practice (HMRC & Statutory)'],
              [Shield01Icon, 'India Practice (GST & Income Tax)'],
              [Globe02Icon, 'Cross-Border Treaty & NRI Advisory'],
            ].map(([icon, label]) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-medium text-slate-600"
              >
                <HugeiconsIcon
                  icon={icon}
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
