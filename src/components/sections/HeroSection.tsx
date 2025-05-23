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
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4 animate-bounce">
          <span className="text-xs font-medium text-primary">Speech & Language Therapy Fun!</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6 animate-fade-in-up">
          Unlock Your Super Communication Powers!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200">
          Good Vibrations brings speech magic to your school! We help students find their voice and share their awesome ideas through fun, engaging therapy sessions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-5 md:px-8 md:py-6 rounded-xl bg-primary text-white border border-white/20 hover:scale-110 hover:rotate-1">
            <a href="#contact">Let's Chat!</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow transition-all duration-300 px-6 py-5 md:px-8 md:py-6 rounded-xl border-primary/20 text-primary hover:text-primary/80 hover:bg-primary/5 hover:scale-110 hover:-rotate-1">
            <a href="#services">See Our Cool Stuff!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
