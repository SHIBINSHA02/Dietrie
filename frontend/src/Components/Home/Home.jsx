import React from 'react';
import HeroSection from './HeroSection';
import ForUsersSection from './ForUsersSection';
import ForNutritionistsSection from './ForNutritionistsSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/sidemenu'; // Import the side menu

function Home() {
  return (
    <div className="layout-container flex h-full grow">
      <SideMenu />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1">
            <HeroSection />
            <ForUsersSection />
            <ForNutritionistsSection />
            <CallToActionSection />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;