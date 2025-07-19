import React from 'react';

function HeroSection() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2v7mzO3KSshWapyIq0HakgUXG8ab-gD_6BwZBEO3qvRgKt9JKUuBRi1B3l3uOEComlKyAqNHxWFMPqJDLGWb8z23MVx-2JGhm4SYX0njgWKh_9rY7lCD8UpGnMYM-LN89CZCAXD0PPkrHq2uUvz1KdoOxER7ZXxwwH4f7duMFwJocQ9o-ETgzlpJhOpHOpvw83ToBh-qpRwq00P1sExWnQbdXCDUxEVeozZKhQhq2fWYnD9HUwbEtpvqgbHBHukqIebeiEQc5u6A")' }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Your Journey to a Healthier You Starts Here
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              NutriTrack is your all-in-one platform for personalized nutrition and diet management. Whether you're looking to improve your eating habits, manage your
              weight, or connect with a nutritionist, we've got you covered.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b714] text-[#f8fcf8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;