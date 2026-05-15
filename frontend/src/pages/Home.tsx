import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import EventStructure from '../components/EventStructure'
import KeyHighlights from '../components/KeyHighlights'
import CallToAction from '../components/CallToAction'
import About from '../components/About'
import RegistrationCards from '../components/RegistrationCards'
import GallerySlider from '../components/GallerySlider'
import CommunityPartners from '../components/CommunityPartners'
import FAQ from '../components/FAQ'
import BecomeSponsor from '../components/BecomeSponsor'
import Speakers from '../components/Speakers'
import GovernmentPartners from '../components/GovernmentPartners'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-secondary font-sans text-gray-900 overflow-x-hidden">
            <Header />
            <main className="grow flex flex-col w-full">
                <Hero />
                <Showcase />
                <CallToAction />
                <EventStructure />
                <KeyHighlights />
                <Speakers />
                <About />
                <RegistrationCards />
                <GallerySlider />
                <GovernmentPartners />
                <CommunityPartners />
                <BecomeSponsor />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
} 
