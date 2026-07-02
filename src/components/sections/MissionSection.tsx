import { Heart, Zap, LineChart } from "../ui/icons";

export function MissionSection() {
  return (
    <section className="bg-background py-[104px]">
      <div className="container max-w-[1180px] px-6">
        <div className="max-w-[820px] mx-auto mb-16 text-center">
          <h2 className="font-heading text-[13px] font-bold tracking-[0.14em] uppercase text-secondary">
            Our Mission
          </h2>
          <p className="mt-5 text-[27px] leading-[1.5] text-foreground max-w-[820px]">
            Good Vibrations Speech and Language is committed to delivering
            high-quality, evidence-based services that support student success in
            the educational setting, building the communication skills students
            need for academic and social growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-[22px] px-[30px] py-[34px] shadow-[0_14px_34px_-22px_rgba(70,64,107,0.4)]">
            <div className="w-[54px] h-[54px] rounded-[16px] bg-surface-lavender flex items-center justify-center mb-5">
              <Heart size={26} strokeWidth={2} className="text-primary" />
            </div>
            <h3 className="font-heading text-[20px] font-semibold text-foreground mb-2.5">
              Student-Centered Care
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-muted-foreground">
              We prioritize each student's individual strengths, needs, and
              communication goals.
            </p>
          </div>

          <div className="bg-card border border-border rounded-[22px] px-[30px] py-[34px] shadow-[0_14px_34px_-22px_rgba(70,64,107,0.4)]">
            <div className="w-[54px] h-[54px] rounded-[16px] bg-surface-mint flex items-center justify-center mb-5">
              <Zap size={26} strokeWidth={2} className="text-secondary" />
            </div>
            <h3 className="font-heading text-[20px] font-semibold text-foreground mb-2.5">
              Engagement &amp; Motivation
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-muted-foreground">
              Students learn best when therapy is meaningful, interactive, and
              genuinely enjoyable.
            </p>
          </div>

          <div className="bg-card border border-border rounded-[22px] px-[30px] py-[34px] shadow-[0_14px_34px_-22px_rgba(70,64,107,0.4)]">
            <div className="w-[54px] h-[54px] rounded-[16px] bg-surface-gold flex items-center justify-center mb-5">
              <LineChart size={26} strokeWidth={2} className="text-accent-ink" />
            </div>
            <h3 className="font-heading text-[20px] font-semibold text-foreground mb-2.5">
              Data-Driven Practice
            </h3>
            <p className="text-[15.5px] leading-[1.6] text-muted-foreground">
              We use clear data and progress monitoring to guide instruction and
              demonstrate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
