import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Add this
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
    <Router basename="/task"> {/* Set the basename to your repo name */}
      <div className="font-sans">
        <Navbar />
        <HeroSection />
        <AIPhotoSection />
        {/* //<FeaturesSection /> */}
        {/* <CallToActionSection /> */}
        <PhotoGallerySection/>
        <TestimonialsSection/>
        <EventCreationFlow/>
        <PricingPlans/>
        <EnterprisePlanCard />
        <SmarterPhotoManagement/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
