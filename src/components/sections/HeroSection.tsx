import { Button } from '../ui/button';
import React from 'react';

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function HeroSection({ sectionRef }: HeroSectionProps) {
  return (
    <section ref={sectionRef} className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4">
          <span className="text-xs font-medium text-primary">Speech & Language Therapy</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
          Transforming Lives Through Better Communication
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Good Vibrations helps students improve their communication skills through specialized therapy services contracted to schools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-5 md:px-8 md:py-6 rounded-xl bg-primary text-white border border-white/20 hover:scale-105">
            <a href="#contact">Request Consultation</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow transition-all duration-300 px-6 py-5 md:px-8 md:py-6 rounded-xl border-primary/20 text-primary hover:text-primary/80 hover:bg-primary/5">
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
