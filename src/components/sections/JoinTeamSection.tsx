import { Button } from "../ui/button";
import { Check, Mail } from "../ui/icons";
import { CONTACT_EMAIL } from "../../lib/constants";

const perks = [
  "Competitive hourly pay",
  "Flexible scheduling, 1099",
  "Support with IEPs, documentation & caseload management",
  "Opportunities to use engaging, innovative therapy approaches",
  "Less micromanagement, more trust",
];

const lookingFor = [
  "Licensed SLP",
  "Passion for working with students",
  "Strong communication & organization skills",
  "Team-oriented mindset",
];

export function JoinTeamSection() {
  return (
    <section id="join" className="bg-background-alt py-[104px]">
      <div className="container mx-auto max-w-[1180px] px-6">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-secondary">
            Join Our Team
          </span>
          <h2 className="mt-[14px] mb-4 font-heading text-[40px] font-bold tracking-[-0.02em] text-foreground">
            SLPs deserve to feel supported
          </h2>
          <p className="text-[18px] leading-[1.65] text-muted-foreground">
            Growing our team means dependable coverage for the students and districts we serve. We
            create flexible, fulfilling opportunities where clinicians can focus on what they do
            best: helping students communicate and succeed, without unnecessary stress or burnout.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Why work with us */}
          <div className="rounded-[22px] border border-border bg-card p-[34px] shadow-[0_14px_34px_-24px_rgba(70,64,107,0.4)]">
            <h3 className="mb-[22px] font-heading text-[21px] font-semibold text-foreground">
              Why work with us
            </h3>
            <div className="flex flex-col gap-[14px]">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-[13px]">
                  <span className="mt-px flex h-6 w-6 flex-none items-center justify-center rounded-[7px] bg-surface-lavender">
                    <Check size={14} strokeWidth={2.6} className="text-primary" />
                  </span>
                  <span className="text-[16px] leading-[1.45] text-muted-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Who we're looking for */}
          <div className="rounded-[22px] border border-border bg-card p-[34px] shadow-[0_14px_34px_-24px_rgba(70,64,107,0.4)]">
            <h3 className="mb-[22px] font-heading text-[21px] font-semibold text-foreground">
              Who we&apos;re looking for
            </h3>
            <div className="flex flex-col gap-[14px]">
              {lookingFor.map((item) => (
                <div key={item} className="flex items-start gap-[13px]">
                  <span className="mt-px flex h-6 w-6 flex-none items-center justify-center rounded-[7px] bg-surface-mint">
                    <Check size={14} strokeWidth={2.6} className="text-secondary" />
                  </span>
                  <span className="text-[16px] leading-[1.45] text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-[26px] border-t border-border pt-6">
              <p className="mb-[14px] text-[15px] text-muted-foreground">
                Interested in joining our team? Send your resume to:
              </p>
              <Button
                asChild
                className="inline-flex h-auto items-center gap-[9px] rounded-full bg-primary px-[22px] py-[13px] font-heading text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:bg-primary"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail size={17} strokeWidth={2} className="text-white" />
                  Email your resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
