import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import EventStructure from './components/EventStructure'
import KeyHighlights from './components/KeyHighlights'
import CallToAction from './components/CallToAction'
import FestBanner from './components/FestBanner'
import About from './components/About'
import RegistrationCards from './components/RegistrationCards'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary font-sans text-gray-900">
      <Header />
      <main className="grow flex flex-col">
        <Hero />
        <Showcase />
        <EventStructure />
        <KeyHighlights />
        <CallToAction />
        <FestBanner />
        <About />
        <RegistrationCards />
      </main>
      <Footer />
    </div>
  )
}
