import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import React from 'react';

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function ServicesSection({ sectionRef }: ServicesSectionProps) {
  return (
    <section ref={sectionRef} id="services" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-secondary/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-3xl mx-auto">
        <div className="relative animate-fade-in-up">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-secondary">Our Awesome Adventures!</h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-1.5 bg-secondary rounded-full animate-pulse"></div>
        </div>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-2xl animate-fade-in delay-200">
          Check out these super cool ways we can help you become a communication superstar!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 mt-10 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {/* Service 1 */}
        <div className="group relative animate-fade-in-up delay-300">
          <div className="absolute inset-0 bg-primary/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Card className="flex flex-col h-full border border-primary/20 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:translate-y-[-8px] group-hover:rotate-1">
            <div className="h-2 w-full bg-primary"></div>
            <CardHeader className="pb-2 pt-4 md:pt-6">
              <CardTitle className="text-center text-primary group-hover:text-primary/90 transition-colors text-lg md:text-xl">Speech Superpower!</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between px-4 md:px-6">
              <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                Zap away speech challenges and unlock your voice with our super fun one-on-one speech adventures!
              </CardDescription>
              <div className="mt-4 md:mt-6 flex justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 18h.01"></path>
                    <path d="M7 8h10"></path>
                    <path d="M10 12h4"></path>
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service 2 */}
        <div className="group relative animate-fade-in-up delay-400">
          <div className="absolute inset-0 bg-secondary/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Card className="flex flex-col h-full border border-secondary/20 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:translate-y-[-8px] group-hover:-rotate-1">
            <div className="h-2 w-full bg-secondary"></div>
            <CardHeader className="pb-2 pt-4 md:pt-6">
              <CardTitle className="text-center text-secondary group-hover:text-secondary/90 transition-colors text-lg md:text-xl">Word Wizardry!</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between px-4 md:px-6">
              <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                Become a master communicator and express your brilliant ideas with our magical language games and activities!
              </CardDescription>
              <div className="mt-4 md:mt-6 flex justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service 3 */}
        <div className="group relative sm:col-span-2 lg:col-span-1 animate-fade-in-up delay-500">
          <div className="absolute inset-0 bg-accent/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Card className="flex flex-col h-full border border-accent/20 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:translate-y-[-8px] group-hover:scale-105">
            <div className="h-2 w-full bg-accent"></div>
            <CardHeader className="pb-2 pt-4 md:pt-6">
              <CardTitle className="text-center text-accent group-hover:text-accent/90 transition-colors text-lg md:text-xl">Swallow Power-Up!</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between px-4 md:px-6">
              <CardDescription className="text-center text-sm md:text-base leading-relaxed">
                Level up your eating and drinking skills with our super cool swallowing adventures! Mealtime will be a blast!
              </CardDescription>
              <div className="mt-4 md:mt-6 flex justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:animate-spin-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
