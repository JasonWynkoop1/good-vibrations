import logoLight from '../../assets/logo-light.png';

export function Footer() {
  return (
    <footer className="bg-deep px-6 pb-10 pt-[54px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <img
            src={logoLight}
            alt="Good Vibrations Speech and Language"
            className="h-[54px] w-auto"
          />
          <p className="font-heading text-[14px] text-white/70">
            Resources for parents &amp; teachers, coming soon.
          </p>
          <p className="font-heading text-[13px] text-white/50">
            © 2026 Good Vibrations Speech and Language
          </p>
        </div>
        <p className="mt-8 max-w-[760px] text-[13px] leading-relaxed text-white/40">
          Good Vibrations Speech and Language provides teletherapy, school-based
          speech-language pathology to school districts across Indiana —
          including evaluations and re-evaluations, IEP development and progress
          monitoring, AAC support, Medicaid billing, and contract SLP coverage.
        </p>
      </div>
    </footer>
  );
}
