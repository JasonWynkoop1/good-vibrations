import { Button } from "../ui/button";
import headshot from "../../assets/headshot.jpg";

function Sparkle({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="bg-hero-gradient relative overflow-hidden"
    >
      {/* Decorative blurred blobs (purely visual) */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[420px] h-[420px] bg-[#8C7BE0] opacity-[0.14] blur-[70px] -top-[120px] -left-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[360px] h-[360px] bg-[#46C5B8] opacity-[0.14] blur-[70px] -bottom-[120px] -right-[60px]"
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pt-[56px] pb-[68px] md:grid-cols-[1.08fr_0.92fr] md:gap-16 md:pt-[76px] md:pb-[88px]">
        {/* Copy */}
        <div className="relative text-center md:text-left">
          <Sparkle
            size={22}
            className="pointer-events-none absolute -top-6 left-2 hidden text-accent md:block"
          />

          <span className="mb-[24px] inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-badge px-[18px] py-2 font-heading text-[13px] font-semibold tracking-[0.02em] text-primary md:hidden">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-secondary" />
            Now contracting for the 2026-2027 school year
          </span>

          <h1 className="mb-[20px] font-heading text-[42px] font-bold leading-[1.08] tracking-[-0.025em] text-foreground md:text-[54px] lg:text-[62px]">
            <span className="md:block">Helping students</span>{" "}
            <span className="md:block">
              find their{" "}
              <span className="relative inline-block">
                voice
                <svg
                  aria-hidden
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[8px] left-0 h-[10px] w-full text-accent"
                >
                  <path
                    d="M3 8 Q 18 3, 36 7 T 70 7 T 117 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </h1>

          <p className="mx-auto mb-[30px] max-w-[520px] text-[18px] leading-[1.65] text-muted-foreground md:mx-0 md:text-[20px]">
            Teletherapy speech and language services for K-12 schools
            nationwide, supporting student communication, confidence, and
            independence.
          </p>

          <div className="flex flex-wrap justify-center gap-[14px] md:justify-start">
            <Button
              asChild
              className="h-auto rounded-full bg-primary px-[30px] py-[15px] font-heading text-[16px] font-semibold text-white shadow-[0_14px_28px_-12px_#8C7BE0] transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-primary"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-[1.5px] border-border bg-white/70 px-[30px] py-[15px] font-heading text-[16px] font-semibold text-primary transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-white/70 hover:text-primary"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <p className="mt-[22px] font-heading text-[14px] font-medium text-muted-foreground">
            Kayla Wynkoop, M.A., CCC-SLP · 12 years of school-based experience
          </p>
        </div>

        {/* Photo */}
        <div className="relative mx-auto w-full max-w-[300px] md:max-w-[380px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[16px] -top-[16px] z-0 h-[140px] w-[140px] rounded-[24px] bg-accent opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-[16px] -left-[16px] z-0 h-[110px] w-[110px] rounded-full bg-secondary opacity-30"
          />
          <Sparkle
            size={20}
            className="pointer-events-none absolute -left-7 top-6 z-0 text-primary opacity-70"
          />
          <Sparkle
            size={14}
            className="pointer-events-none absolute -right-6 bottom-16 z-0 text-secondary opacity-70"
          />
          <img
            src={headshot}
            alt="Kayla Wynkoop, speech-language pathologist"
            width={804}
            height={804}
            className="relative z-[1] block h-auto w-full rounded-[26px] shadow-[0_26px_50px_-22px_rgba(70,64,107,0.5)]"
          />
          <span className="absolute -bottom-[18px] left-1/2 z-[2] hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white px-[16px] py-[9px] font-heading text-[12.5px] font-semibold text-foreground shadow-[0_10px_24px_-12px_rgba(70,64,107,0.5)] md:inline-flex">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-secondary" />
            Now contracting for the 2026-2027 school year
          </span>
        </div>
      </div>
    </section>
  );
}
