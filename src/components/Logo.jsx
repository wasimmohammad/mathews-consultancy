import Image from 'next/image'

import logo from '@/images/logos/mathews-logo.png'

export function Logo({ className, ...props }) {
  return (
    <Image
      src={logo}
      alt="Mathews Consultancy - Mathews Consulting"
      priority
      className={className}
      {...props}
    />
  )
}
