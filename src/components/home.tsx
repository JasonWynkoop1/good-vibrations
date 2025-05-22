import { useRef, useEffect } from 'react';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { AboutSection } from './sections/AboutSection';
import { TeamSection } from './sections/TeamSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';

export function Home() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    team: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section-visible');
        } else {
          entry.target.classList.remove('animate-section-visible');
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col relative">
      <HeroSection sectionRef={sectionRefs.hero} />
      <ServicesSection sectionRef={sectionRefs.services} />
      <AboutSection sectionRef={sectionRefs.about} />
      <TeamSection sectionRef={sectionRefs.team} />
      <TestimonialsSection sectionRef={sectionRefs.testimonials} />
      <ContactSection sectionRef={sectionRefs.contact} />
    </div>
  );
}
