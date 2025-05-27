import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      ref={sectionRef} 
      id="contact" 
      className="container py-20 md:py-28 lg:py-36 mt-12 md:mt-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Modern background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-[40px] -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-multiply">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a" gradientTransform="rotate(40)">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="b" gradientTransform="rotate(120)">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path fill="url(#a)" d="M0,800 C100,750 200,700 300,650 C400,600 500,550 600,500 C700,450 800,400 900,350 L1000,300 L1000,1000 L0,1000 Z" />
            <path fill="url(#b)" d="M0,1000 C150,900 300,800 450,700 C600,600 750,500 900,400 L1000,350 L1000,1000 L0,1000 Z" />
          </svg>
        </div>
      </div>

      {/* Modern section header with animation */}
      <motion.div 
        className="text-center mb-20 max-w-4xl mx-auto px-4"
        variants={itemVariants}
      >
        <div className="inline-flex items-center justify-center px-5 py-2 bg-white/80 backdrop-blur-md rounded-full mb-6 shadow-sm">
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Let's Connect</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Get in Touch
          </span>
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We're here to support your district's speech and language programs through comprehensive contracted services. 
          Reach out today to learn how we can help your students thrive.
        </p>
      </motion.div>

      {/* Main content with modern layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact form - takes more space on larger screens */}
            <div className="lg:col-span-8 p-6 md:p-10 lg:p-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Send Us a Message
                </h3>
                <p className="text-slate-500 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submissionStatus === 'success' ? (
                  <motion.div 
                    className="bg-emerald-50 border-l-4 border-emerald-400 rounded-xl p-6 mb-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                        <svg className="h-6 w-6 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-emerald-800">Message Sent!</h4>
                        <div className="mt-2 text-emerald-700">
                          <p>Thank you for reaching out. We'll be in touch with you shortly.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {submissionStatus === 'error' && (
                      <motion.div 
                        className="bg-rose-50 border-l-4 border-rose-400 rounded-xl p-6 mb-4 shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-rose-100 p-2 rounded-full">
                            <svg className="h-6 w-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold text-rose-800">Error</h4>
                            <div className="mt-2 text-rose-700">
                              <p>{errorMessage}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Name fields in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-700 font-medium flex items-center">
                          First Name <span className="text-rose-500 ml-1">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="Your first name"
                          className="border-slate-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 hover:border-indigo-300 transition-colors bg-white/90 shadow-sm text-base h-12 rounded-xl"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700 font-medium flex items-center">
                          Last Name <span className="text-rose-500 ml-1">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="Your last name"
                          className="border-slate-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 hover:border-indigo-300 transition-colors bg-white/90 shadow-sm text-base h-12 rounded-xl"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Contact fields in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium flex items-center">
                          Email Address <span className="text-rose-500 ml-1">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="your.email@example.com"
                          className="border-slate-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 hover:border-indigo-300 transition-colors bg-white/90 shadow-sm text-base h-12 rounded-xl"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium flex items-center">
                          Phone Number <span className="text-slate-400 text-xs ml-1">(Optional)</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="(123) 456-7890"
                          className="border-slate-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 hover:border-indigo-300 transition-colors bg-white/90 shadow-sm text-base h-12 rounded-xl"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Message field */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium flex items-center">
                        Your Message <span className="text-slate-400 text-xs ml-1">(Optional)</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Please share any specific questions or details about your district's needs..."
                        className="border-slate-200 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 hover:border-indigo-300 transition-colors bg-white/90 shadow-sm text-base min-h-[140px] rounded-xl resize-y"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Submit button */}
                    <Button 
                      type="submit" 
                      className="w-full h-14 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 text-base font-semibold relative overflow-hidden group rounded-xl"
                      disabled={submissionStatus === 'submitting'}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {submissionStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact information sidebar */}
            <div className="lg:col-span-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-6 md:p-10 lg:p-12">
              <motion.div className="h-full flex flex-col justify-between" variants={itemVariants}>
                <div>
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-white/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white/80 text-sm font-medium mb-1">Email</h4>
                        <a href="mailto:goodvibrations.speech@gmail.com" className="text-white hover:text-white/80 transition-colors text-lg font-medium">
                          goodvibrations.speech@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-white/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white/80 text-sm font-medium mb-1">Phone</h4>
                        <a href="tel:+15742651847" className="text-white hover:text-white/80 transition-colors text-lg font-medium">
                          (574) 265-1847
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-white/20 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white/80 text-sm font-medium mb-1">Business Hours</h4>
                        <div className="space-y-1">
                          <p className="text-white">Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p className="text-white">Saturday: 9:00 AM - 2:00 PM</p>
                          <p className="text-white">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="javascript:void(0)" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="javascript:void(0)" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="javascript:void(0)" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}