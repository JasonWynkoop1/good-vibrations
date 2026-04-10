import { useRef, useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { JoinTeamSection } from './sections/JoinTeamSection';
import { ResourcesSection } from './sections/ResourcesSection';

export function Home() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    whyUs: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    join: useRef<HTMLElement>(null),
    resources: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-visible');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection sectionRef={sectionRefs.hero} />
      <AboutSection sectionRef={sectionRefs.about} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <WhyChooseSection sectionRef={sectionRefs.whyUs} />
      <TestimonialsSection sectionRef={sectionRefs.testimonials} />
      <ContactSection sectionRef={sectionRefs.contact} />
      <JoinTeamSection sectionRef={sectionRefs.join} />
      <ResourcesSection sectionRef={sectionRefs.resources} />
    </div>
  );
}
