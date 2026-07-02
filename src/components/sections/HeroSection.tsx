import { Button } from "../ui/button";
import logo from "../../assets/logo-0.png";

export function HeroSection() {
  return (
    <section
      id="top"
      className="bg-hero-gradient relative overflow-hidden"
    >
      {/* Decorative blurred blobs (purely visual) */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[420px] h-[420px] bg-[#8C7BE0] opacity-[0.16] blur-[70px] -top-[120px] -left-[80px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[360px] h-[360px] bg-[#46C5B8] opacity-[0.16] blur-[70px] -bottom-[120px] -right-[60px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[240px] h-[240px] bg-[#FFCF5E] opacity-[0.18] blur-[60px] top-[40px]"
        style={{ right: "18%" }}
      />

      <div className="relative max-w-[1040px] mx-auto px-6 pt-[76px] pb-[84px] text-center">
        <span className="inline-flex items-center gap-2 font-heading text-[13px] font-semibold tracking-[0.02em] text-primary bg-badge border border-border px-[18px] py-2 rounded-full mb-[30px] whitespace-nowrap">
          <span className="inline-block w-[7px] h-[7px] rounded-full bg-secondary" />
          Now contracting for the 2026-2027 school year
        </span>

        <img
          src={logo}
          alt="Good Vibrations Speech and Language"
          width={702}
          height={248}
          className="h-[124px] w-auto block mx-auto mb-[30px]"
        />

        <h1 className="font-heading text-[42px] md:text-[66px] leading-[1.04] tracking-[-0.025em] font-bold text-foreground mb-[22px]">
          Helping students find their voice.
        </h1>

        <p className="text-[21px] leading-[1.6] text-muted-foreground max-w-[680px] mx-auto mb-[38px]">
          Teletherapy speech and language services for K-12 schools nationwide,
          supporting student communication, confidence, and independence.
        </p>

        <div className="flex flex-wrap justify-center gap-[14px]">
          <Button
            asChild
            className="font-heading text-[16px] font-semibold text-white bg-primary px-[30px] py-[15px] h-auto rounded-full shadow-[0_14px_28px_-12px_#8C7BE0] transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-primary"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="font-heading text-[16px] font-semibold text-primary bg-white/70 border-[1.5px] border-border px-[30px] py-[15px] h-auto rounded-full transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-white/70 hover:text-primary"
          >
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
