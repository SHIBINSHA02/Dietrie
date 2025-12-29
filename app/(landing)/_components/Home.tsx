// app/(landing)/_components/Home.tsx
// nextjs_deve/app/(landing)/_components/Home.jsx
// nextjs_deve/app/(landing)/_components/_components/Home.jsx
// frontend/src/Components/Home/Home.jsx
import HeroSection from "./HeroSection";
import ForUsersSection from "./ForUsersSection";
import ForNutritionistsSection from "./ForNutritionistsSection";
import CallToActionSection from "./CallToActionSection";

function Home() {
  return (
    <>
    <div className=" mx-auto lg:mt-10 mt-5 ">
      <HeroSection />
        <div className="lg:w-3/5  mx-auto">
          <ForUsersSection />
          <ForNutritionistsSection />
          <CallToActionSection />
        </div>
      </div>
    </>
  );
}

export default Home;