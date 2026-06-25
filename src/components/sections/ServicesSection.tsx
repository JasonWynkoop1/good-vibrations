import { Check } from "../ui/icons";

const services = [
  "School-based contract services",
  "IEP development & progress monitoring",
  "Medicaid billing",
  "Evaluations & re-evaluations",
  "AAC support",
  "Push-in & pull-out therapy",
  "Collaboration with staff & families",
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-[104px]">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <span className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-secondary">
            Services
          </span>
          <h2 className="mt-[14px] mb-3 text-[40px] font-bold tracking-[-0.02em] text-foreground">
            What we provide
          </h2>
          <p className="text-[18px] leading-[1.6] text-muted-foreground">
            Comprehensive, school-based support, from evaluation through ongoing therapy and documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-4 rounded-[16px] border border-border bg-card p-[22px] shadow-[0_10px_26px_-20px_rgba(70,64,107,0.4)] transition-[transform,box-shadow] duration-200 hover:scale-[1.02]"
            >
              <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[11px] bg-surface-lavender">
                <Check size={19} strokeWidth={2.4} className="text-primary" />
              </span>
              <span className="font-heading text-[16px] font-medium leading-[1.3] text-foreground">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
