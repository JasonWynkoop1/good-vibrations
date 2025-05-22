import React from 'react';
import headshotImg from '../../assets/headshot.jpg';
import { Button } from '../ui/button';

interface TeamSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function TeamSection({ sectionRef }: TeamSectionProps) {
  return (
    <section ref={sectionRef} id="team" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4">
          <span className="text-xs font-medium text-primary">Meet Your Therapist</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Kayla Wynkoop
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
          Dedicated to helping clients improve their communication skills through personalized therapy
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-primary/20 shadow-md overflow-hidden group">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 p-5">
              <div className="aspect-square rounded-full overflow-hidden bg-primary/5 mb-4">
                <img 
                  src={headshotImg} 
                  alt="Kayla Wynkoop" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex justify-center space-x-3 mt-4">
                <a href="javascript:void(0)" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-muted-foreground hover:text-primary hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="javascript:void(0)" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-muted-foreground hover:text-primary hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-2 p-5">
              <h3 className="text-xl font-semibold text-primary mb-3">Speech-Language Pathologist</h3>
              <p className="text-muted-foreground mb-4">
                I'm passionate about helping individuals of all ages overcome communication challenges. With a client-centered approach, I create personalized therapy plans that address each person's unique needs and goals.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Education</span>
                    <p className="text-sm text-muted-foreground">Master's in Speech-Language Pathology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Specialties</span>
                    <p className="text-sm text-muted-foreground">Articulation disorders, language delays, fluency disorders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Approach</span>
                    <p className="text-sm text-muted-foreground">Evidence-based, client-centered therapy with a focus on functional outcomes</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/5 rounded-md text-xs text-primary">Pediatric Therapy</span>
                <span className="px-2 py-1 bg-primary/5 rounded-md text-xs text-primary">Adult Rehabilitation</span>
                <span className="px-2 py-1 bg-primary/5 rounded-md text-xs text-primary">Telehealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" className="border-primary/20 text-primary hover:text-primary/80 hover:bg-primary/5">
          <a href="#contact">Schedule a Consultation</a>
        </Button>
      </div>
    </section>
  );
}
