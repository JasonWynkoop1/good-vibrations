import React from 'react';
import { Button } from '../ui/button';
import headshotImg from '../../assets/headshot.jpg';

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function HeroSection({ sectionRef }: HeroSectionProps) {
  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-lavender))] via-[hsl(var(--surface-blue))] to-[hsl(var(--surface-gold))] -z-10"></div>

      <div className="container py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <span className="text-xs font-heading font-medium text-primary">School-Based Speech Therapy</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-in-up">
            Good Vibrations Speech and Language
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200 max-w-2xl">
            School-based speech therapy services supporting student communication, confidence, and independence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Button asChild size="lg" className="shadow-[0_0_12px_rgba(124,107,196,0.2)] hover:shadow-[0_0_20px_rgba(124,107,196,0.3)] transition-all duration-300 px-8 py-6 rounded-xl hover:scale-105">
              <a href="#contact">Contact Us</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-all duration-300 px-8 py-6 rounded-xl border-primary/30 text-primary hover:bg-primary/5 hover:scale-105">
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="animate-scale-in delay-400">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
              <img src={headshotImg} alt="Kayla Wynkoop, M.A., CCC-SLP" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
