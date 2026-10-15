'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon, Menu03Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2 hover:bg-slate-50 rounded-lg text-slate-800">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }) {
  return (
    <span className="relative h-3.5 w-3.5">
      <HugeiconsIcon
        icon={Menu03Icon}
        size={14}
        strokeWidth={2}
        className={clsx(
          'absolute inset-0 transition',
          open && 'scale-90 opacity-0',
        )}
        aria-hidden="true"
      />
      <HugeiconsIcon
        icon={Cancel01Icon}
        size={14}
        strokeWidth={2}
        className={clsx(
          'absolute inset-0 transition',
          !open && 'scale-90 opacity-0',
        )}
        aria-hidden="true"
      />
    </span>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-5 text-base tracking-tight text-slate-900 ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 py-1">
          Regional Practices
        </div>
        <MobileNavLink href="/services/us">🇺🇸 US Practice (EA &amp; CPA)</MobileNavLink>
        <MobileNavLink href="/services/uk">🇬🇧 UK Practice (ACCA)</MobileNavLink>
        <MobileNavLink href="/services/india">🇮🇳 India Practice (CA)</MobileNavLink>
        <MobileNavLink href="/services">All Services Hub</MobileNavLink>

        <div className="my-2 border-t border-slate-100" />

        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 py-1">
          Navigation
        </div>
        <MobileNavLink href="/#cross-border">Cross-Border Advisory</MobileNavLink>
        <MobileNavLink href="/#features">Accounting &amp; Tax Features</MobileNavLink>
        <MobileNavLink href="/#testimonials">Client Reviews</MobileNavLink>
        <MobileNavLink href="/#faq">FAQ</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-5" aria-label="Main Navigation">
      <Container>
        <nav className="relative z-50 flex justify-between items-center" aria-label="Mathews Consultancy Navigation">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Mathews Consultancy & Mathews Consulting Home">
              <Logo className="h-15 w-45" />
            </Link>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-8">
            <div className="hidden md:flex md:items-center md:gap-x-5 lg:gap-x-7">
              {/* Regional practice direct links */}
              <NavLink href="/services/us">US Practice</NavLink>
              <NavLink href="/services/uk">UK Practice</NavLink>
              <NavLink href="/services/india">India Practice</NavLink>
              <NavLink href="/#cross-border">Cross-Border</NavLink>
              <NavLink href="/#faq">FAQ</NavLink>
            </div>
            <Button href="#get-started-today" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
