import Link from 'next/link'
import { Inter } from 'next/font/google'

import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout';

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>

        <h1>About page</h1>

        <h1 className={'title'}>
          <Link href="/">Ir a Home</Link>
        </h1>

        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.js</code>
          </p>
        </div>
      
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return(
      <MainLayout>
          <DarkLayout>
              {page}
          </DarkLayout>
      </MainLayout>
  )
}