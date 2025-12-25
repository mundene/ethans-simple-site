import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ethan's Website" />
        <p className="description">
          <code>My Wish List</code>
        </p>
        <p className="description">
          -Garlic Press
        </p>
        <p className="description">
          -Hot Glue Gun
        </p>
        <p className="description">
          -LL Bean Mocassins
        </p>
        <p className="description">
          -Balance Board
        </p>
        <p className="description">
          -Mini trash can for my sewing table
        </p>
        <p className="description">
          -Printer (not til Christmas)
        </p>
      </main>

      <Footer />
    </div>
  )
}
