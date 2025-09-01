import Hero from "../components/Hero";
import Image from "next/image";
import KeyFeatures from "../components/KeyFeatures";
import FeaturesBlend from "../components/FeaturesBlend";
import TestimonialsBlend from "../components/TestimonialsBlend";
import CTADeep from "../components/CTADeep";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
     <HeroSection />
     
    
      <FeaturesBlend />
      
      <TestimonialsBlend />
      <CTADeep />
      
    </>
  );
}
