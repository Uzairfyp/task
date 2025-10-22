import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AIPhotoSection from "./components/AIPhotoSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import EventCreationFlow from "./components/EventCreationFlow";
import PricingPlans from "./components/PricingPlans";
import EnterprisePlanCard from "./components/EnterprisePlanCard";
import SmarterPhotoManagement from "./components/SmarterPhotoManagement";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AIPhotoSection/>
      {/* //<FeaturesSection /> */}
      {/* <CallToActionSection /> */}
      <PhotoGallerySection/>
      <TestimonialsSection/>
      <EventCreationFlow/>
      <PricingPlans/>
      <EnterprisePlanCard/>
      <SmarterPhotoManagement/>
      
      <Footer />
    </div>
  );
}

export default App;
