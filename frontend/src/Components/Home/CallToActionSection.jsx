// frontend/src/Components/Home/CallToActionSection.jsx
import React from 'react';

function CallToActionSection() {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0e1b0e] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] ">
            Ready to Transform Your Health?
          </h1>
          <p className="text-[#0e1b0e] text-base font-normal leading-normal">Join NutriTrack today and embark on a journey to a healthier, happier you.</p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b714] text-[#f8fcf8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
