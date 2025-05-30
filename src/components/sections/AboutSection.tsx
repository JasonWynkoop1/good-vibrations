import React from 'react';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-accent/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent/10 rounded-full mb-4 animate-bounce-subtle">
          <span className="text-xs font-medium text-accent">About Good Vibrations</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-accent mb-4 animate-fade-in-up">
          Our Speech and Language Approach
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto animate-fade-in delay-200">
          We provide effective speech and language therapy services to schools, helping students develop essential communication skills for academic and social success.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 items-center">
        <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-accent/20 shadow-md">
          <div className="space-y-6 md:space-y-8">
            <div className="animate-fade-in-up delay-300">
              <h3 className="text-xl md:text-2xl font-semibold text-accent mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                At Good Vibrations, we are dedicated to helping every student develop effective communication skills. We provide evidence-based speech therapy services to schools that enable students to express themselves clearly and build meaningful connections with peers and educators.
              </p>
            </div>

            <div className="animate-fade-in-up delay-400">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Effective Learning</span>
                    <p className="text-sm text-muted-foreground">We implement evidence-based techniques and structured activities to optimize learning outcomes for each student.</p>
                  </div>
                </li>
                <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-wiggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Personalized Care</span>
                    <p className="text-sm text-muted-foreground">We value each student's unique needs and strengths, providing individualized support throughout their therapy journey.</p>
                  </div>
                </li>
                <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0 group-hover:animate-spin-slow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Innovative Approach</span>
                    <p className="text-sm text-muted-foreground">We develop engaging therapeutic methods that maintain student interest while achieving measurable progress.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-secondary/20 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-300">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">Our Therapeutic Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              We develop personalized therapy plans for each student. Every session and activity is carefully designed to address individual needs and progressively enhance communication abilities.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10 hover:scale-105 transition-transform duration-300 hover:bg-secondary/5">
                <h4 className="font-medium text-sm">Individualized</h4>
                <p className="text-xs text-muted-foreground mt-1">Therapy activities tailored to individual interests and needs.</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10 hover:scale-105 transition-transform duration-300 hover:bg-secondary/5">
                <h4 className="font-medium text-sm">Evidence-Based</h4>
                <p className="text-xs text-muted-foreground mt-1">Research-supported methods with proven clinical outcomes.</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10 hover:scale-105 transition-transform duration-300 hover:bg-secondary/5">
                <h4 className="font-medium text-sm">Collaborative</h4>
                <p className="text-xs text-muted-foreground mt-1">We partner with educators and families to ensure consistent support.</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3 border border-secondary/10 hover:scale-105 transition-transform duration-300 hover:bg-secondary/5">
                <h4 className="font-medium text-sm">Progress Tracking</h4>
                <p className="text-xs text-muted-foreground mt-1">Comprehensive assessment and documentation of measurable improvements.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-primary/20 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-up delay-400">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">Our Service Offerings</h3>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              We have tons of fun activities to help students with all kinds of communication superpowers at your school!
            </p>
            <ul className="space-y-2">
              <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-bounce-subtle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Sound Safari - Making tricky sounds super fun to learn!</p>
              </li>
              <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-wiggle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Word Wizardry - Building awesome vocabulary and language skills!</p>
              </li>
              <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Smooth Talkers Club - Making speech flow like magic!</p>
              </li>
              <li className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0 group-hover:animate-spin-slow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-sm">Voice Heroes - Finding your super voice and making it strong!</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
