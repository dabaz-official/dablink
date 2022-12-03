import Head from 'next/head'
import Header from '../components/Header'
import Links from '../components/Links'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabLink</title>
        <meta name="description" content="Everything of me, in one simple link" />
        <link rel="icon" href="/dabaz.svg" />
      </Head>

      <main>
        <Header />
        <Links />
      </main>
    </div>
  )
}
