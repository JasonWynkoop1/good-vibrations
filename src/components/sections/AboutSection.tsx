import React from 'react';
import headshotImg from '../../assets/headshot.jpg';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden">
      {/* Mission & Values */}
      <div className="bg-white py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Our Mission</span>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed animate-fade-in">
              Good Vibrations Speech and Language is committed to delivering high quality, evidence-based speech and language services that support student success in the educational setting. Through collaboration, data driven practices, and engaging therapy approaches, we help students build the communication skills necessary for academic and social growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[hsl(var(--surface-lavender))] rounded-2xl p-6 text-center border border-primary/8 animate-fade-in-up delay-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Student-Centered Care</h3>
              <p className="text-sm text-muted-foreground">We prioritize each student's individual strengths, needs, and communication goals.</p>
            </div>

            <div className="bg-[hsl(var(--surface-blue))] rounded-2xl p-6 text-center border border-secondary/8 animate-fade-in-up delay-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Engagement & Motivation</h3>
              <p className="text-sm text-muted-foreground">We believe students learn best when therapy is meaningful, interactive, and enjoyable.</p>
            </div>

            <div className="bg-[hsl(var(--surface-gold))] rounded-2xl p-6 text-center border border-accent/15 animate-fade-in-up delay-300 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Data-Driven Practice</h3>
              <p className="text-sm text-muted-foreground">We use clear data and progress monitoring to guide instruction and demonstrate growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-blue))] py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-shrink-0 animate-scale-in">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-primary/10">
                <img src={headshotImg} alt="Kayla Wynkoop" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 mb-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Kayla Wynkoop, M.A., CCC-SLP</h2>
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-xs font-heading font-medium text-primary">12 Years of Experience</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Kayla, a school-based speech-language pathologist and the owner of Good Vibrations Speech and Language. I'm passionate about helping students find their voice and build confidence in their communication skills. I've worked with a wide range of learners, including students in essential skills classrooms and those using AAC, and I love creating therapy sessions that are both engaging and meaningful. My goal is always to make students feel successful, supported, and excited to learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
