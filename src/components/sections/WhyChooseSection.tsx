import React from 'react';

interface WhyChooseSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const reasons = [
  {
    title: "Engaging, student-centered therapy",
    description: "Every session is designed around the student's interests and goals to maximize motivation and progress.",
  },
  {
    title: "Strong data collection + documentation",
    description: "Clear, consistent data tracking ensures measurable outcomes and transparent reporting.",
  },
  {
    title: "Experience with diverse learners",
    description: "From essential skills classrooms to AAC users, we support students across the full spectrum of needs.",
  },
  {
    title: "Creative, motivating therapy approaches",
    description: "We use innovative tools and techniques to make therapy sessions meaningful and fun.",
  },
];

export function WhyChooseSection({ sectionRef }: WhyChooseSectionProps) {
  return (
    <section ref={sectionRef} id="why-us" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-gold))] -z-10"></div>

      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            The Good Vibrations Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-primary/8 animate-fade-in-up hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
