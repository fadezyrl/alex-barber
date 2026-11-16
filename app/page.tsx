import type { ReactElement } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav/SiteNav";
import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection/ContactSection";
import { DetailsSection } from "@/components/sections/DetailsSection/DetailsSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
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
        <DetailsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
