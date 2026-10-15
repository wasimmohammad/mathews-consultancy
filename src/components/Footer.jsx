import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80" aria-label="Footer">
      <Container>
        <div className="py-16 text-center">
          <Link href="/" aria-label="Mathews Consultancy & Mathews Consulting">
            <Logo className="mx-auto h-12 w-auto" />
          </Link>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-600">
            Mathews Consultancy (Mathews Consulting) — Licensed Enrolled Agents, CPAs (US), ACCAs (UK), and Chartered Accountants (India) providing global tax and cross-border advisory.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
            <Link href="/services/us" className="hover:text-blue-600 transition">🇺🇸 US Practice (EA &amp; CPA)</Link>
            <Link href="/services/uk" className="hover:text-blue-600 transition">🇬🇧 UK Practice (ACCA)</Link>
            <Link href="/services/india" className="hover:text-blue-600 transition">🇮🇳 India Practice (CA)</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Services Directory</Link>
            <Link href="/#cross-border" className="hover:text-blue-600 transition">Cross-Border Suite</Link>
            <Link href="/#faq" className="hover:text-blue-600 transition">FAQ</Link>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="mailto:contact@mathewsconsultancy.com"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
              aria-label="Email Mathews Consultancy"
            >
              contact@mathewsconsultancy.com
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Mathews Consultancy &amp; Mathews Consulting. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
