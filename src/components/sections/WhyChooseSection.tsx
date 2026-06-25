import { Star } from "../ui/icons";

const reasons = [
  "Engaging, student-centered therapy",
  "Strong data collection & documentation",
  "Experience with diverse learners",
  "Creative, motivating therapy approaches",
];

export function WhyChooseSection() {
  return (
    <section id="why" className="relative overflow-hidden bg-deep py-[104px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[100px] -right-[60px] h-[380px] w-[380px] rounded-full bg-[#46C5B8] opacity-[0.2] blur-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[100px] -left-[60px] h-[320px] w-[320px] rounded-full bg-[#FFCF5E] opacity-[0.16] blur-[80px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-6">
        <div className="mx-auto mb-[56px] max-w-[680px] text-center">
          <span className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
            Why Choose Us
          </span>
          <h2 className="my-[14px] text-[40px] font-bold tracking-[-0.02em] text-white">
            A partner schools can rely on
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-[18px] border border-white/[0.16] bg-white/[0.08] px-[24px] py-[28px] backdrop-blur-sm"
            >
              <div className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-white/[0.14]">
                <Star size={20} strokeWidth={2.2} className="text-accent" />
              </div>
              <p className="font-heading text-[16.5px] font-medium leading-[1.4] text-white">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
