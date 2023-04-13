import { Inter } from 'next/font/google'
import Link from 'next/link'

import { MainLayout } from '../../components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>

      <h1 className={'title'}>
        <Link href="/">Ir a Home</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing/index.js</code>
        </p>
      </div>
    </MainLayout>
  )
}
