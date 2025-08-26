import React from 'react';
import HeroSection from './HeroSection';
import ForUsersSection from './ForUsersSection';
import ForNutritionistsSection from './ForNutritionistsSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import SideMenu from '../SideMenu/sidemenu';

function Home() {
  return (
    <div className="layout-container flex min-h-screen">
      <SideMenu />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Navbar />
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-6 lg:px-10 pt-[60px]">
          <div className="layout-content-container flex flex-col flex-1 max-w-7xl">
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