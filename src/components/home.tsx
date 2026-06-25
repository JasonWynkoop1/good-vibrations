import { HeroSection } from './sections/HeroSection';
import { MissionSection } from './sections/MissionSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { JoinTeamSection } from './sections/JoinTeamSection';
import { ContactSection } from './sections/ContactSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <JoinTeamSection />
      <ContactSection />
    </>
  );
}
