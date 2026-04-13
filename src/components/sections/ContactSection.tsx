import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import emailjs from 'emailjs-com';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Submission status state
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_u9yby3u";
  const EMAILJS_TEMPLATE_ID = "template_t7ezin9";
  const EMAILJS_PUBLIC_KEY = "NNQWAgLIuKPCR_lwI";

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setSubmissionStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Set submitting status
    setSubmissionStatus('submitting');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message || 'No additional information provided',
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      // Success
      setSubmissionStatus('success');

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 5000);
    } catch (error) {
      // Error
      console.error('Email sending failed:', error);
      setSubmissionStatus('error');
      setErrorMessage('Failed to submit form. Please try again later.');

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-gradient-to-br from-[hsl(var(--surface-lavender))] to-[hsl(var(--surface-blue))] py-16 md:py-24"
    >
      <div className="container px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-heading font-medium text-primary uppercase tracking-widest">Contact</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">We'd love to hear from you. Reach out anytime.</p>
        </div>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-sm text-muted-foreground animate-fade-in-up">
          <a href="mailto:goodvibrations.speech@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            goodvibrations.speech@gmail.com
          </a>
          <a href="tel:+15742651847" className="flex items-center gap-2 hover:text-primary transition-colors justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (574) 265-1847
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/30 animate-fade-in-up">
          {submissionStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll be in touch with you shortly.</p>
              <button onClick={() => setSubmissionStatus('idle')} className="text-sm text-primary hover:text-primary/80 underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {submissionStatus === 'error' && (
                <div className="p-3 border-l-4 border-destructive bg-destructive/5 text-destructive text-sm rounded-r-lg">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm text-foreground mb-1.5 block font-heading">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input type="text" id="firstName" placeholder="First name" className="w-full" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm text-foreground mb-1.5 block font-heading">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input type="text" id="lastName" placeholder="Last name" className="w-full" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm text-foreground mb-1.5 block font-heading">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input type="email" id="email" placeholder="your@email.com" className="w-full" required value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm text-foreground mb-1.5 block font-heading">
                    Phone <span className="text-xs text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input type="tel" id="phone" placeholder="(123) 456-7890" className="w-full" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm text-foreground mb-1.5 block font-heading">
                  Message <span className="text-xs text-muted-foreground">(Optional)</span>
                </Label>
                <Textarea id="message" rows={4} placeholder="How can we help you?" className="w-full resize-y" value={formData.message} onChange={handleChange} />
              </div>

              <Button type="submit" className="w-full py-3 rounded-xl shadow-[0_0_12px_rgba(124,107,196,0.15)]" disabled={submissionStatus === 'submitting'}>
                {submissionStatus === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
