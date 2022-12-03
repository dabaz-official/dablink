import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabLink</title>
        <meta name="description" content="Everything of me, in one simple link" />
        <link rel="icon" href="/dabaz.svg" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
