import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AIPhotoSection from "./components/AIPhotoSection";
import PhotoGallerySection from "./components/PhotoGallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import EventCreationFlow from "./components/EventCreationFlow";
import PricingPlans from "./components/PricingPlans";
import EnterprisePlanCard from "./components/EnterprisePlanCard";
import SmarterPhotoManagement from "./components/SmarterPhotoManagement";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/task"> {/* Required for GitHub Pages subpath */}
      <div className="font-sans">
        <Navbar />
        <HeroSection />
        <AIPhotoSection />
        <PhotoGallerySection />
        <TestimonialsSection />
        <EventCreationFlow />
        <PricingPlans />
        <EnterprisePlanCard />
        <SmarterPhotoManagement />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
