import React from 'react';

interface TestimonialsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function TestimonialsSection({ sectionRef }: TestimonialsSectionProps) {
  return (
    <section ref={sectionRef} id="testimonials" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4">
          <span className="text-xs font-medium text-primary">Therapy Process</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          What to Expect
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
          Here's what happens from your first visit until you reach your goals
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-primary/20 shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="h-2 w-full bg-primary"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-lg mr-4">1</div>
                <h3 className="text-xl font-semibold text-primary">Initial Consultation</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                We'll start by talking about what's bothering you, what you want to achieve, and your health background. This helps me create a plan just for you.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Discuss communication concerns and goals</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Review relevant medical and developmental history</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Answer your questions about the therapy process</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-secondary/20 shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="h-2 w-full bg-secondary"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-medium text-lg mr-4">2</div>
                <h3 className="text-xl font-semibold text-secondary">Comprehensive Assessment</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                I'll evaluate your communication skills through tests and observations to find your strengths and areas for improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Standardized and informal assessments</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Observation of communication in natural contexts</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Identification of specific areas needing support</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-accent/20 shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="h-2 w-full bg-accent"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium text-lg mr-4">3</div>
                <h3 className="text-xl font-semibold text-accent">Personalized Treatment Plan</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                After your assessment, I'll create a therapy plan with clear goals and strategies designed specifically for you.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Specific, measurable goals tailored to your needs</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Evidence-based therapy approaches</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Recommended frequency and duration of therapy</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-primary/20 shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
            <div className="h-2 w-full bg-primary"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-lg mr-4">4</div>
                <h3 className="text-xl font-semibold text-primary">Therapy Sessions & Progress</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                You'll participate in fun, focused therapy sessions. We'll track your progress and adjust your plan as you improve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Interactive, engaging therapy activities</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Home practice activities to reinforce skills</p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-sm">Regular progress updates and plan adjustments</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}