import React from 'react';

interface TestimonialsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function TestimonialsSection({ sectionRef }: TestimonialsSectionProps) {
  return (
    <section ref={sectionRef} id="testimonials" className="bg-white py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Testimonials</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
          What People Are Saying
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Testimonials from teachers, administrators, and parents coming soon.
        </p>
      </div>
    </section>
  );
}
