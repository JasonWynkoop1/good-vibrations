import React from 'react';

interface ResourcesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function ResourcesSection({ sectionRef }: ResourcesSectionProps) {
  return (
    <section ref={sectionRef} id="resources" className="bg-white py-12 md:py-16">
      <div className="container px-4 sm:px-6 text-center">
        <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Resources</span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2 mb-4">
          Resources
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Resources for parents and teachers coming soon. Check back for tips, tools, and helpful links.
        </p>
      </div>
    </section>
  );
}
