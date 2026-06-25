import logoLight from '../../assets/logo-light.png';

export function Footer() {
  return (
    <footer className="bg-deep px-6 pb-10 pt-[54px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
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
    </footer>
  );
}
