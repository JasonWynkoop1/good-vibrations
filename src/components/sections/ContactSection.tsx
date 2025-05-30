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
      className="container py-16 md:py-24 max-w-3xl mx-auto"
    >
      {/* Minimalist header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-3 text-teal-600">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We're here to support your district's speech and language programs.
        </p>
      </div>

      {/* Contact info - simplified */}
      <div className="flex justify-center gap-8 mb-12 text-sm text-gray-600">
        <a href="mailto:goodvibrations.speech@gmail.com" className="flex items-center hover:text-teal-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          goodvibrations.speech@gmail.com
        </a>
        <a href="tel:+15742651847" className="flex items-center hover:text-teal-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (574) 265-1847
        </a>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        {/* Form header - simplified */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800">Send us a message</h3>
        </div>

        {submissionStatus === 'success' ? (
          <div className="text-center py-8">
            <svg className="h-12 w-12 text-teal-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Message Sent</h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We'll be in touch with you shortly.
            </p>
            <button 
              onClick={() => setSubmissionStatus('idle')}
              className="text-sm text-teal-600 hover:text-teal-800 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submissionStatus === 'error' && (
              <div className="p-3 border-l-4 border-rose-400 bg-rose-50 text-rose-700 text-sm">
                {errorMessage}
              </div>
            )}

            {/* Form fields - simplified */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName" className="text-gray-700 text-sm mb-1 block">
                  First Name <span className="text-rose-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="w-full border-gray-200 focus:border-teal-400 focus:ring-0 h-10 rounded-md"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-gray-700 text-sm mb-1 block">
                  Last Name <span className="text-rose-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="w-full border-gray-200 focus:border-teal-400 focus:ring-0 h-10 rounded-md"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 text-sm mb-1 block">
                  Email <span className="text-rose-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full border-gray-200 focus:border-teal-400 focus:ring-0 h-10 rounded-md"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-700 text-sm mb-1 block">
                  Phone <span className="text-gray-400 text-xs">(Optional)</span>
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="(123) 456-7890"
                  className="w-full border-gray-200 focus:border-teal-400 focus:ring-0 h-10 rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="text-gray-700 text-sm mb-1 block">
                Message <span className="text-gray-400 text-xs">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full border-gray-200 focus:border-teal-400 focus:ring-0 rounded-md resize-y"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit button - simplified */}
            <div className="mt-8">
              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md transition-colors"
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
