import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Mail, Phone, Check } from '../ui/icons';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_u9yby3u';
const EMAILJS_TEMPLATE_ID = 'template_t7ezin9';
const EMAILJS_PUBLIC_KEY = 'NNQWAgLIuKPCR_lwI';

const inputClassName =
  'h-auto w-full bg-background border border-border rounded-[11px] px-[14px] py-[12px] text-[15px] text-foreground';
const labelTextClassName =
  'block font-heading font-semibold text-[13px] text-foreground mb-[6px]';

export function ContactSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName,
          lastName,
          email,
          school: school || 'Not provided',
          message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      const detail =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text?: unknown }).text ?? '')
          : err instanceof Error
            ? err.message
            : '';
      setError(
        detail
          ? `Couldn't send (${detail}). Please email goodvibrations.speech@gmail.com directly.`
          : 'Something went wrong. Please email goodvibrations.speech@gmail.com directly.'
      );
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-hero-gradient py-[104px] relative overflow-hidden"
    >
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[340px] h-[340px] bg-[#8C7BE0] opacity-[.14] blur-[70px] -top-[90px]"
        style={{ left: '6%' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full w-[300px] h-[300px] bg-[#46C5B8] opacity-[.13] blur-[70px] -bottom-[90px]"
        style={{ right: '8%' }}
      />

      <div className="relative max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.92fr_1.08fr] gap-[56px] items-start">
        {/* left: details + reassurance */}
        <div>
          <span className="font-heading text-[13px] font-bold tracking-[.14em] uppercase text-secondary">
            Get in Touch
          </span>
          <h2 className="text-[42px] font-bold tracking-[-0.02em] text-foreground mt-[14px] mb-[14px]">
            Let's work together
          </h2>
          <p className="text-[18px] leading-[1.65] text-muted-foreground mb-[30px] max-w-[440px]">
            Whether you're a district looking for contract coverage or a school
            with an open caseload, I'd love to hear from you. Reach out and I'll
            get back to you soon.
          </p>

          <div className="flex flex-col gap-[14px] max-w-[440px]">
            {/* Email card */}
            <a
              href="mailto:goodvibrations.speech@gmail.com"
              className="flex items-center gap-[14px] bg-card border border-border rounded-[16px] px-[22px] py-[18px] shadow-[0_14px_30px_-24px_rgba(70,64,107,0.45)] transition-[transform,box-shadow] duration-200 hover:scale-[1.02]"
            >
              <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-surface-lavender flex items-center justify-center">
                <Mail size={21} strokeWidth={2} className="text-primary" />
              </span>
              <span>
                <span className="block font-heading text-[12px] font-semibold tracking-[.06em] uppercase text-muted-foreground">
                  Email
                </span>
                <span className="block font-heading text-[16px] font-semibold text-foreground">
                  goodvibrations.speech@gmail.com
                </span>
              </span>
            </a>

            {/* Phone card */}
            <a
              href="tel:+15742651847"
              className="flex items-center gap-[14px] bg-card border border-border rounded-[16px] px-[22px] py-[18px] shadow-[0_14px_30px_-24px_rgba(70,64,107,0.45)] transition-[transform,box-shadow] duration-200 hover:scale-[1.02]"
            >
              <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-surface-mint flex items-center justify-center">
                <Phone size={21} strokeWidth={2} className="text-secondary" />
              </span>
              <span>
                <span className="block font-heading text-[12px] font-semibold tracking-[.06em] uppercase text-muted-foreground">
                  Phone
                </span>
                <span className="block font-heading text-[16px] font-semibold text-foreground">
                  (574) 265-1847
                </span>
              </span>
            </a>

            {/* status chip */}
            <div className="flex items-center gap-[12px] bg-badge border border-border rounded-[16px] px-[22px] py-[16px]">
              <span className="flex-none w-[10px] h-[10px] rounded-full bg-secondary shadow-[0_0_0_4px_rgba(70,197,184,0.24)] animate-pulse" />
              <span className="font-heading text-[15px] font-semibold text-foreground">
                Now contracting for the 2026–2027 school year
              </span>
            </div>
          </div>
        </div>

        {/* right: inquiry form */}
        <div className="bg-card border border-border rounded-[24px] p-[38px] shadow-[0_26px_60px_-30px_rgba(70,64,107,0.5)]">
          {sent ? (
            <div className="text-center px-[12px] py-[34px]">
              <div className="w-[64px] h-[64px] rounded-full bg-surface-mint flex items-center justify-center mx-auto mb-[22px]">
                <Check size={30} strokeWidth={2.4} className="text-secondary" />
              </div>
              <h3 className="text-[24px] font-semibold text-foreground mb-[10px]">
                Thank you!
              </h3>
              <p className="text-[16px] leading-[1.6] text-muted-foreground">
                Your message is on its way. I'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-[22px] font-semibold text-foreground mb-[6px]">
                Send a message
              </h3>
              <p className="text-[14.5px] text-muted-foreground mb-[24px]">
                Tell me a little about your school and what you're looking for.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[14px]">
                <Label className="block">
                  <span className={labelTextClassName}>First name</span>
                  <Input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClassName}
                  />
                </Label>
                <Label className="block">
                  <span className={labelTextClassName}>Last name</span>
                  <Input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClassName}
                  />
                </Label>
              </div>

              <Label className="block mb-[14px]">
                <span className={labelTextClassName}>Email</span>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClassName}
                />
              </Label>

              <Label className="block mb-[14px]">
                <span className={labelTextClassName}>School or district</span>
                <Input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className={inputClassName}
                />
              </Label>

              <Label className="block mb-[24px]">
                <span className={labelTextClassName}>How can I help?</span>
                <Textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClassName} min-h-0 resize-y`}
                />
              </Label>

              {error && (
                <p className="text-[14px] text-destructive mb-[14px]">{error}</p>
              )}

              <Button
                type="submit"
                disabled={sending}
                className="w-full h-auto font-heading text-[16px] font-semibold text-white bg-primary p-[15px] rounded-[12px] shadow-[0_14px_28px_-12px_#8C7BE0] transition-[transform,box-shadow] duration-200 hover:scale-[1.02]"
              >
                {sending ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
