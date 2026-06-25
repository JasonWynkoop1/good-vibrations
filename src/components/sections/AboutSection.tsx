import headshot from '../../assets/headshot.jpg';

export function AboutSection() {
  return (
    <section id="about" className="bg-background-alt py-[104px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[64px] px-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[18px] -top-[18px] z-0 h-[160px] w-[160px] rounded-[24px] bg-accent opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[18px] -left-[18px] z-0 h-[130px] w-[130px] rounded-full bg-secondary opacity-[0.32]"
          />
          <img
            src={headshot}
            alt="Kayla Wynkoop"
            className="relative z-[1] block w-full rounded-[26px] shadow-[0_26px_50px_-22px_rgba(70,64,107,0.5)]"
          />
        </div>
        <div>
          <span className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-secondary">
            About Me
          </span>
          <h2 className="mb-[6px] mt-[14px] text-[40px] font-bold tracking-[-0.02em] text-foreground">
            Kayla Wynkoop
          </h2>
          <p className="mb-[24px] font-heading text-[16px] font-semibold text-primary">
            M.A., CCC-SLP · 12 years of experience
          </p>
          <p className="mb-[18px] text-[17.5px] leading-[1.72] text-muted-foreground">
            Hi, I'm Kayla, a school-based speech-language pathologist and the owner of Good Vibrations Speech and Language. I'm passionate about helping students find their voice and build confidence in their communication skills.
          </p>
          <p className="text-[17.5px] leading-[1.72] text-muted-foreground">
            I've worked with a wide range of learners, including students in essential-skills classrooms and those using AAC, and I love creating therapy sessions that are both engaging and meaningful. My goal is always to make students feel successful, supported, and excited to learn.
          </p>
        </div>
      </div>
    </section>
  );
}
