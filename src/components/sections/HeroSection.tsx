import React from 'react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function HeroSection({ sectionRef }: HeroSectionProps) {
  return (
    <section ref={sectionRef} id="home" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-lavender))] via-[hsl(var(--surface-blue))] to-[hsl(var(--surface-gold))] -z-10"></div>

      <div className="container">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full mb-6">
            <span className="text-xs font-heading font-semibold text-primary">Now contracting for 2026–2027 school year</span>
          </div>

          <h1 className="text-foreground mb-4">
            Good Vibrations Speech and Language
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Helping students find their voice through school-based speech therapy services.
          </p>

          <Button asChild size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
