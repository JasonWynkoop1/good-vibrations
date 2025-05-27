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
      {/* Minimalist header with improved visual hierarchy */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-blue-600">
          Contact Us
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          We're here to support your district's speech and language programs.
        </p>
      </div>

      {/* Contact quick links with improved styling */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-10 text-center">
        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-blue-600 font-medium text-sm">Email</p>
            <a href="mailto:goodvibrations.speech@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              goodvibrations.speech@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-blue-600 font-medium text-sm">Phone</p>
            <a href="tel:+15742651847" className="text-gray-700 hover:text-blue-600 transition-colors">
              (574) 265-1847
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border border-blue-100 rounded-lg p-6 md:p-8 shadow-md">
        {/* Form header */}
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Send us a message</h3>
        </div>

        {submissionStatus === 'success' ? (
          <div className="bg-green-50 p-6 text-center rounded-lg border border-green-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-green-700 mb-2">Message Sent</h3>
            <p className="text-green-600 mb-4">
              Thank you for reaching out. We'll be in touch with you shortly.
            </p>
            <button 
              onClick={() => setSubmissionStatus('idle')}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {submissionStatus === 'error' && (
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="h-5 w-5 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-rose-700">{errorMessage}</p>
              </div>
            )}

            {/* Personal Information Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-medium">1</span>
                </div>
                <h4 className="text-gray-800 font-medium">Personal Information</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-normal mb-1 block">
                    First Name <span className="text-rose-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    className="w-full border-gray-200 focus:border-blue-400 focus:ring-0 h-10 rounded transition-colors"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formData.firstName && <p className="text-xs text-green-600 mt-1">✓ Looks good</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-normal mb-1 block">
                    Last Name <span className="text-rose-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    className="w-full border-gray-200 focus:border-blue-400 focus:ring-0 h-10 rounded transition-colors"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formData.lastName && <p className="text-xs text-green-600 mt-1">✓ Looks good</p>}
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-medium">2</span>
                </div>
                <h4 className="text-gray-800 font-medium">Contact Information</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-normal mb-1 block">
                    Email <span className="text-rose-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full border-gray-200 focus:border-blue-400 focus:ring-0 h-10 rounded transition-colors"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formData.email && <p className="text-xs text-green-600 mt-1">✓ Looks good</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-normal mb-1 block">
                    Phone <span className="text-gray-400 text-xs">(Optional)</span>
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="(123) 456-7890"
                    className="w-full border-gray-200 focus:border-blue-400 focus:ring-0 h-10 rounded transition-colors"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-medium">3</span>
                </div>
                <h4 className="text-gray-800 font-medium">Your Message</h4>
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-normal mb-1 block">
                  Message <span className="text-gray-400 text-xs">(Optional)</span>
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border-gray-200 focus:border-blue-400 focus:ring-0 rounded resize-y transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                  <span className="text-blue-600 text-sm font-medium">4</span>
                </div>
                <h4 className="text-gray-800 font-medium">Submit Your Request</h4>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min(
                        100, 
                        (formData.firstName ? 25 : 0) + 
                        (formData.lastName ? 25 : 0) + 
                        (formData.email ? 25 : 0) + 
                        (formData.message ? 25 : 0)
                      )}%` 
                    }}
                  ></div>
                </div>
                <span className="ml-3 text-sm text-gray-500">
                  {Math.min(
                    100, 
                    (formData.firstName ? 25 : 0) + 
                    (formData.lastName ? 25 : 0) + 
                    (formData.email ? 25 : 0) + 
                    (formData.message ? 25 : 0)
                  )}%
                </span>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                disabled={submissionStatus === 'submitting'}
              >
                {submissionStatus === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending your message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4">
                By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
