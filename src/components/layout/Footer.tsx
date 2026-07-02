import logoLight from '../../assets/logo-light.png';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from '../../lib/constants';

export function Footer() {
  return (
    <footer className="bg-deep px-6 pb-10 pt-[54px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <img
            src={logoLight}
            alt="Good Vibrations Speech and Language"
            width={306}
            height={108}
            loading="lazy"
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
          Good Vibrations Speech and Language provides teletherapy speech and
          language services to K-12 school districts nationwide, including
          evaluations and re-evaluations, IEP development and progress
          monitoring, AAC support, Medicaid billing, and contract SLP coverage.
        </p>
        {/* NAP line (name / area / phone) — consistent contact details help
            local search associate the site with the practice. */}
        <p className="mt-4 font-heading text-[13px] text-white/60">
          Based in Indiana · serving school districts nationwide ·{' '}
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="transition-colors hover:text-white">
            {CONTACT_PHONE_DISPLAY}
          </a>{' '}
          ·{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
