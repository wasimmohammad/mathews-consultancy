import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    'What services do Mathews Consultancy and Mathews Consulting specialize in?',
    'Mathews Consultancy (also known as Mathews Consulting) specializes in comprehensive accounting, tax compliance, international payroll, bookkeeping, and cross-border financial advisory for individuals and growing businesses across the United States, United Kingdom, and India.',
  ],
  [
    'Which countries does Mathews Consulting cover?',
    'Our core service offering covers the US (IRS federal and state tax, payroll, bookkeeping), the UK (HMRC tax returns, VAT, statutory filings), and India (Income Tax, GST, MCA compliance), alongside seamless cross-border advisory.',
  ],
  [
    'How does Mathews Consultancy support expat and NRI taxation?',
    'We provide specialized US-India and UK-India tax planning, double taxation treaty relief (DTAA), foreign tax credit (FTC) optimization, FBAR and FATCA reporting, asset repatriation, and cross-border estate planning.',
  ],
  [
    'Can Mathews Consulting serve as our Virtual CFO?',
    'Yes. Mathews Consulting provides outsourced Virtual CFO services, delivering strategic financial management, cash flow forecasting, multi-currency consolidated reporting, and transfer pricing oversight.',
  ],
  [
    'How do I get started with Mathews Consultancy?',
    'You can book a free consultation directly through our website. Our advisors will discuss your entity structure, cross-border requirements, and provide a transparent, customized scope of services.',
  ],
  [
    'How does Mathews Consultancy ensure data security and confidentiality?',
    'At Mathews Consultancy, client confidentiality and financial security are paramount. We utilize enterprise-grade encrypted client portals, secure document exchanges, and comply strictly with US, UK (GDPR), and Indian data privacy standards.',
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about Mathews Consultancy and Mathews Consulting"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Everything you need to know about partnering with Mathews Consultancy and Mathews Consulting.
          </p>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {faqs.map(([title, text]) => (
            <div key={title}>
              <h3 className="font-display text-lg text-slate-900">{title}</h3>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
