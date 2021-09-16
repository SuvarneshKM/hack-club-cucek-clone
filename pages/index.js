import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Things from '../components/Things'
import Initatives from '../components/Initatives'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack Club CUCEK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <main className="max-w-[1236px] mx-auto">
        <Things />
        <Initatives />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
