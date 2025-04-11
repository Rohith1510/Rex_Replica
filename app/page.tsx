import ActivitiesShowcase from "@/components/Activities"
import Bookings from "@/components/Bookings"
import FAQSection from "@/components/Faq"
import FeaturesGrid from "@/components/FeaturesGrid"
import ItinerarySection from "@/components/Itenary"
import MapWrapper from "@/components/MapWrapper"
import Navbar from "@/components/Navbar"
import TravelHeroSection from "@/components/NorwayGuideCard"
import GuideProfile from "@/components/Profile"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8">
      <Navbar />
      <TravelHeroSection/>
      <FeaturesGrid/>
      <MapWrapper />
      <ActivitiesShowcase/>
      <ItinerarySection/>
      <Bookings/>
      <GuideProfile />
      <FAQSection/>
      
    </main>
  )
}
