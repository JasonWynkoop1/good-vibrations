import React from 'react';

interface JoinTeamSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function JoinTeamSection({ sectionRef }: JoinTeamSectionProps) {
  return (
    <section ref={sectionRef} id="join" className="bg-[hsl(var(--surface-lavender))] py-16 md:py-24">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Careers</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            Join Our Team
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-border/30 animate-fade-in-up">
          <p className="text-muted-foreground leading-relaxed mb-8">
            At Good Vibrations Speech and Language, we believe SLPs deserve to feel supported, valued, and excited about their work. Our goal is to create flexible, fulfilling opportunities where clinicians can focus on what they do best: helping students communicate and succeed — without unnecessary stress or burnout.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Why Work With Us</h3>
              <ul className="space-y-3">
                {[
                  "Competitive hourly pay",
                  "Flexible scheduling — 1099",
                  "Support with IEPs, documentation, and caseload management",
                  "Opportunities to use engaging, innovative therapy approaches",
                  "Less micromanagement, more trust",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Who We're Looking For</h3>
              <ul className="space-y-3">
                {[
                  "Licensed SLP",
                  "Passion for working with students",
                  "Strong communication and organization skills",
                  "Team-oriented mindset",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 text-center mb-8">
            <h3 className="font-heading font-semibold text-foreground mb-2">Interested in joining our team?</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Email your resume to: <a href="mailto:goodvibrations.speech@gmail.com" className="text-primary font-medium hover:underline">goodvibrations.speech@gmail.com</a>
            </p>
          </div>

          <div className="border-t border-border/30 pt-6">
            <p className="text-sm text-muted-foreground italic text-center">
              As a school-based SLP myself, I understand the demands of the job. I created Good Vibrations Speech and Language to offer a more supportive and flexible experience for clinicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
