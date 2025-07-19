// frontend/src/Components/Home/Home.jsx
// src/Components/Home/Home.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ForUsersSection from './ForUsersSection';
import ForNutritionistsSection from './ForNutritionistsSection';
import CallToActionSection from './CallToActionSection';
import Footer from './Footer';

function Home() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <HeroSection />
          <ForUsersSection />
          <ForNutritionistsSection />
          <CallToActionSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;