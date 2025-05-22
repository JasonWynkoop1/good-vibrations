import React from 'react';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-accent/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent/10 rounded-full mb-4">
          <span className="text-xs font-medium text-accent">About Good Vibrations</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-accent mb-4">
          My Practice Philosophy
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
          Providing personalized speech and language therapy services for students through school contracts
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 items-center">
        <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-accent/20 shadow-md">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-3">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                At Good Vibrations, my mission is to empower students to overcome communication barriers through innovative, evidence-based therapy services contracted to schools and delivered with compassion and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">My Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Excellence</span>
                    <p className="text-sm text-muted-foreground">I am committed to the highest standards of clinical practice and continuous professional development.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Compassion</span>
                    <p className="text-sm text-muted-foreground">I provide care with empathy, understanding, and respect for each client's unique journey.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Innovation</span>
                    <p className="text-sm text-muted-foreground">I embrace the latest research and technology to deliver the most effective therapy solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-secondary/20 shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              I create therapy plans that work for you personally. I use methods that are proven to work, while adapting to your specific needs, goals, and how you learn best.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10">
                <h4 className="font-medium text-sm">Personalized Care</h4>
                <p className="text-xs text-muted-foreground mt-1">Customized therapy plans for each client</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10">
                <h4 className="font-medium text-sm">Evidence-Based</h4>
                <p className="text-xs text-muted-foreground mt-1">Techniques proven by clinical research</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10">
                <h4 className="font-medium text-sm">Collaborative</h4>
                <p className="text-xs text-muted-foreground mt-1">Working with families and other providers</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10">
                <h4 className="font-medium text-sm">Measurable Results</h4>
                <p className="text-xs text-muted-foreground mt-1">Regular progress tracking and reporting</p>
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-primary/20 shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">Services Offered</h3>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I help students with many different communication challenges through services contracted to schools.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Speech sound disorders and articulation therapy</p>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Language development and disorders</p>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Fluency disorders and stuttering</p>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Voice disorders and vocal rehabilitation</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
