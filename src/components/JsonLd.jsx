export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AccountingService', 'FinancialService', 'Organization'],
        '@id': 'https://mathewsconsultancy.com/#organization',
        name: 'Mathews Consultancy',
        alternateName: [
          'Mathews Consulting',
          'Mathews Consulting Group',
          'Mathews Consultancy & Advisory',
          'Mathews Accounting and Tax Services',
        ],
        url: 'https://mathewsconsultancy.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://mathewsconsultancy.com/#logo',
          url: 'https://mathewsconsultancy.com/mathews-logo.png',
          caption: 'Mathews Consultancy and Mathews Consulting',
        },
        image: 'https://mathewsconsultancy.com/og-image.png',
        description:
          'Mathews Consultancy (also operating as Mathews Consulting) is a premier cross-border accounting, tax compliance, and business advisory firm serving businesses and individuals across the US, UK, and India.',
        priceRange: '$$',
        currenciesAccepted: 'USD, GBP, INR',
        paymentAccepted: 'Credit Card, Bank Transfer, Wire Transfer',
        areaServed: [
          {
            '@type': 'Country',
            name: 'United States',
          },
          {
            '@type': 'Country',
            name: 'United Kingdom',
          },
          {
            '@type': 'Country',
            name: 'India',
          },
        ],
        knowsAbout: [
          'US Tax Compliance & Bookkeeping',
          'UK Statutory Reporting, Corporation Tax & VAT',
          'India GST, Income Tax & Corporate Advisory',
          'Expat and NRI Tax Planning (US-India & UK-India DTAA)',
          'Virtual CFO & Strategic Financial Management',
          'International Multi-Currency Payroll',
          'Cross-Border Transfer Pricing',
          'QuickBooks, Xero, and Cloud Accounting Reconciliation',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Mathews Consultancy Core Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'US Accounting & Tax Support',
                description:
                  'Practical support for bookkeeping, IRS corporate tax compliance, payroll, and financial reporting for individuals and US businesses.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'UK Tax & Statutory Compliance',
                description:
                  'VAT returns, Companies House statutory reporting, and HMRC corporate and individual tax returns tailored to UK operations.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'India Tax & Business Advisory',
                description:
                  'Comprehensive Indian direct tax, GST compliance, ROC filings, and financial visibility for domestic and foreign entities.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Expat & NRI Cross-Border Tax Planning',
                description:
                  'US-India and UK-India tax planning, double taxation treaty relief (DTAA), foreign tax credits (FTC), FBAR, and FATCA compliance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Global Business & Virtual CFO',
                description:
                  'Subsidiary formation, management accounts, intercompany transfer pricing, and outsourced CFO leadership.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'International Multi-Jurisdiction Payroll',
                description:
                  'Coordinated payroll processing and local reporting across the US, UK, and India with multi-currency support.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mathewsconsultancy.com/#website',
        url: 'https://mathewsconsultancy.com',
        name: 'Mathews Consultancy',
        alternateName: 'Mathews Consulting',
        publisher: {
          '@id': 'https://mathewsconsultancy.com/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://mathewsconsultancy.com/#webpage',
        url: 'https://mathewsconsultancy.com',
        name: 'Mathews Consultancy | Mathews Consulting – Accounting, Tax & Advisory Services',
        isPartOf: {
          '@id': 'https://mathewsconsultancy.com/#website',
        },
        about: {
          '@id': 'https://mathewsconsultancy.com/#organization',
        },
        description:
          'Official website for Mathews Consultancy and Mathews Consulting. Expert accounting, tax compliance, bookkeeping, and cross-border advisory across the US, UK, and India.',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://mathewsconsultancy.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services do Mathews Consultancy and Mathews Consulting specialize in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mathews Consultancy (also known as Mathews Consulting) specializes in comprehensive accounting, tax compliance, international payroll, bookkeeping, and cross-border financial advisory for individuals and growing businesses across the United States, United Kingdom, and India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which countries does Mathews Consulting cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our core service offering covers the US (IRS federal and state tax, payroll, bookkeeping), the UK (HMRC tax returns, VAT, statutory filings), and India (Income Tax, GST, MCA compliance), alongside seamless cross-border advisory.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Mathews Consultancy support expat and NRI taxation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide specialized US-India and UK-India tax planning, double taxation treaty relief (DTAA), foreign tax credit (FTC) optimization, FBAR and FATCA reporting, asset repatriation, and cross-border estate planning.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Mathews Consulting serve as our Virtual CFO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Mathews Consulting provides outsourced Virtual CFO services, delivering strategic financial management, cash flow forecasting, multi-currency consolidated reporting, and transfer pricing oversight.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I get started with Mathews Consultancy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can book a free consultation directly through our website. Our advisors will discuss your entity structure, cross-border requirements, and provide a transparent, customized scope of services.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Mathews Consultancy ensure data security and confidentiality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At Mathews Consultancy, client confidentiality and financial security are paramount. We utilize enterprise-grade encrypted client portals, secure document exchanges, and comply strictly with US, UK (GDPR), and Indian data privacy standards.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
