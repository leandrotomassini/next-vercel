import { Inter } from 'next/font/google'

import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link';

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home page</h1>

      <h1 className={'title'}>
        <Link href="/">Ir a Home</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.js</code>
        </p>
      </div>
    </MainLayout>
  )
}
