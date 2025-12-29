import React from 'react';
import FeatureCard from './FeatureCard';

// Define the structure for your feature objects
interface UserFeature {
  icon: string;
  title: string;
  description: string;
  path: string;
}

function ForUsersSection() {
  const userFeatures: UserFeature[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path></svg>`,
      title: "Personalized Meal Plans",
      description: "Receive customized meal plans tailored to your dietary needs and preferences.",
      path: '/Meals'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z"></path></svg>`,
      title: "Track Your Progress",
      description: "Monitor your daily intake, exercise, and weight loss goals with our intuitive tracking tools.",
      path: "/Track"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path></svg>`,
      title: "Connect with Nutritionists",
      description: "Access a network of certified nutritionists for expert guidance and support.",
      path: "/Nutritionists"
    },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-10" id='for-users-section'>
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0e1b0e] text-[32px] font-bold leading-tight max-w-[720px]">
          For Users
        </h1>
        <p className="text-[#0e1b0e] text-base font-normal leading-normal max-w-[720px]">Take control of your health with our user-friendly tools and resources.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(208px,1fr))] gap-3 p-0">
        {userFeatures.map((feature, index) => (
          <FeatureCard 
            key={index} 
            iconSvg={feature.icon} 
            title={feature.title} 
            description={feature.description} 
            route={feature.path} // Changed 'path' to 'route' to match FeatureCard props
          />
        ))}
      </div>
    </div>
  );
}

export default ForUsersSection;