import React from 'react';

interface ServicesSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const services = [
  { label: "School-based contract services", color: "primary" },
  { label: "IEP development & progress monitoring", color: "secondary" },
  { label: "Medicaid Billing", color: "accent" },
  { label: "Evaluations & re-evaluations", color: "primary" },
  { label: "AAC support", color: "secondary" },
  { label: "Push-in & pull-out therapy", color: "accent" },
  { label: "Collaboration with staff & families", color: "primary" },
] as const;

const colorMap = {
  primary: { bg: "bg-[hsl(var(--surface-lavender))]", dot: "bg-primary" },
  secondary: { bg: "bg-[hsl(var(--surface-blue))]", dot: "bg-secondary" },
  accent: { bg: "bg-[hsl(var(--surface-gold))]", dot: "bg-accent" },
} as const;

export function ServicesSection({ sectionRef }: ServicesSectionProps) {
  return (
    <section ref={sectionRef} id="services" className="bg-white py-16 md:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.label}
                className={`${colors.bg} rounded-xl px-5 py-4 flex items-center gap-3 border border-border/30 animate-fade-in-up hover:shadow-md transition-shadow`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0`}></div>
                <span className="text-sm font-heading font-medium text-foreground">{service.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
