import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <section ref={sectionRef} id="contact" className="container py-12 md:py-24 lg:py-32 mt-4 md:mt-8 relative overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-secondary/5 rounded-2xl md:rounded-3xl -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-4">
          <span className="text-xs font-medium text-primary">Request Information</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Contact Our Team
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
          Get in touch to learn how I can help with your students' communication needs through school-contracted services
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-12 items-start">
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white/40 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-primary/20 shadow-md">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 border border-primary/10 transform hover:translate-x-2 hover:translate-y-[-2px]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="ml-3 md:ml-4">
                  <div className="font-medium text-xs md:text-sm text-muted-foreground">Email</div>
                  <a href="mailto:goodvibrations.speech@gmail.com" className="text-primary hover:underline font-medium text-sm md:text-base whitespace-nowrap block">
                    goodvibrations.speech@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 border border-secondary/10 transform hover:translate-x-2 hover:translate-y-[-2px]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="ml-3 md:ml-4">
                  <div className="font-medium text-xs md:text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+15742651847" className="text-secondary hover:underline font-medium text-sm md:text-base">
                    (574) 265-1847
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10">
              <h3 className="text-lg font-semibold mb-4 text-primary">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Monday - Friday</span>
                  <span className="text-sm font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Saturday</span>
                  <span className="text-sm font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10">
              <h3 className="text-lg font-semibold mb-4 text-primary">Connect With Us</h3>
              <div className="flex space-x-3">
                <a href="javascript:void(0)" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-muted-foreground hover:text-primary hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-muted-foreground hover:text-primary hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <Card className="shadow-xl border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-[1.01] overflow-hidden bg-white/50 backdrop-blur-sm">
            <div className="h-2 md:h-3 bg-primary"></div>
            <CardContent className="pt-6 md:pt-8 px-4 md:px-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Request Information</h3>
                <p className="text-sm text-muted-foreground">Fill out this form and we'll respond within 24 hours.</p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="firstName" className="text-primary font-medium text-sm">First Name*</Label>
                    <Input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      className="border-primary/25 focus-visible:ring-primary hover:border-primary/50 transition-colors bg-white/70 shadow-sm text-sm h-9 md:h-10"
                      required
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="lastName" className="text-primary font-medium text-sm">Last Name*</Label>
                    <Input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      className="border-primary/25 focus-visible:ring-primary hover:border-primary/50 transition-colors bg-white/70 shadow-sm text-sm h-9 md:h-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="email" className="text-secondary font-medium text-sm">Email Address*</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="border-secondary/25 focus-visible:ring-secondary hover:border-secondary/50 transition-colors bg-white/70 shadow-sm text-sm h-9 md:h-10"
                      required
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="phone" className="text-secondary font-medium text-sm">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="border-secondary/25 focus-visible:ring-secondary hover:border-secondary/50 transition-colors bg-white/70 shadow-sm text-sm h-9 md:h-10"
                    />
                  </div>
                </div>


                <div className="space-y-1 md:space-y-2">
                  <Label htmlFor="message" className="text-accent font-medium text-sm">Additional Information</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Please provide any additional details about your inquiry"
                    className="border-accent/25 focus-visible:ring-accent hover:border-accent/50 transition-colors bg-white/70 shadow-sm text-sm min-h-[80px] md:min-h-[120px]"
                  />
                </div>


                <Button type="submit" className="w-full shadow-md hover:shadow-xl transition-all duration-500 bg-primary py-4 md:py-5 text-sm md:text-base relative overflow-hidden group">
                  <span className="relative z-10">Submit Request</span>
                  <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
