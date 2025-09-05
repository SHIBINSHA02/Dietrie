// frontend/src/Components/Home/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat rounded-none sm:rounded-xl p-6 sm:p-8 lg:p-12"
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2v7mzO3KSshWapyIq0HakgUXG8ab-gD_6BwZBEO3qvRgKt9JKUuBRi1B3l3uOEComlKyAqNHxWFMPqJDLGWb8z23MVx-2JGhm4SYX0njgWKh_9rY7lCD8UpGnMYM-LN89CZCAXD0PPkrHq2uUvz1KdoOxER7ZXxwwH4f7duMFwJocQ9o-ETgzlpJhOpHOpvw83ToBh-qpRwq00P1sExWnQbdXCDUxEVeozZKhQhq2fWYnD9HUwbEtpvqgbHBHukqIebeiEQc5u6A")' 
           }}>
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center max-w-[90%] sm:max-w-[80%] lg:max-w-[700px]">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Your Journey to a Healthier You Starts Here
          </h1>
          <h2 className="text-white text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
            Dietrie is your all-in-one platform for personalized nutrition and diet management. Whether you're looking to improve your eating habits, manage your weight, or connect with a nutritionist, we've got you covered.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;