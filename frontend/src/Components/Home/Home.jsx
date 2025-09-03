import HeroSection from "./HeroSection"
import ForUsersSection from "./ForUsersSection"
import ForNutritionistsSection from "./ForNutritionistsSection"
import CallToActionSection from "./CallToActionSection"
import Footer from "./Footer"
import SideMenu from "../SideMenu/sidemenu"
import Updates from "../Updates/updates"

function Home() {
  return (
    <div className="layout-container flex min-h-screen">
      <SideMenu />

      {/* Center content area with its own scroll, accounting for fixed navbar height */}
      <div className="flex flex-col flex-1 lg:ml-64 lg:mr-64 pt-[60px] h-screen overflow-y-auto">
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-6 lg:px-10">
          <div className="layout-content-container flex flex-col flex-1 max-w-7xl">
            <HeroSection />
            <ForUsersSection />
            <ForNutritionistsSection />
            <CallToActionSection />
          </div>
        </div>
        <Footer />
      </div>

      {/* Hide Updates (right sidebar) on mobile, show on lg+ */}
      <div className="hidden lg:block">
        <Updates />
      </div>
    </div>
  )
}

export default Home
