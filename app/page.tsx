import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Workshops    from '@/components/Workshops'
import WhyOlo       from '@/components/WhyOlo'
import EventsBanner from '@/components/EventsBanner'
import Gallery      from '@/components/Gallery'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Workshops />
        <WhyOlo />
        <EventsBanner />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
