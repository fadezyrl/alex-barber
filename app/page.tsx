import type { ReactElement } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav/SiteNav";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection/WorkSection";

const Home = (): ReactElement => {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
