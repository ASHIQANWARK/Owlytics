import React from "react";
import HeroSection from "../pages/Hero";
import ServicesSection from "../pages/ServicesSection";
import ProductsSection from "../pages/ProductsSection";
import OwlyticsSection from "../pages/OwlyticsSection";
import Chatbot from "../components/Chatbot"
import Testimonials from "../pages/Testimonial";

const Home=()=> {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <OwlyticsSection />
            <Testimonials />
            <Chatbot />
        </div>
    )
}

export default Home;