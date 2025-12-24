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
        <Header title="Welcome to my website!" />
        <p className="description">
          <code>My Wish List</code>
        </p>
        <p className="description">
          -Garlic Press<br>
          -LL Bean Mocassins<br>
          -Mini Trash can for my sewing table<br>
          -Balance Board<br>
          -Hot Glue Gun<br>
        </p>
      </main>

      <Footer />
    </div>
  )
}
