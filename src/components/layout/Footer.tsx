import logoImg from '../../assets/logo-0.png';

export function Footer() {
  return (
    <footer className="bg-[#2d2248] text-white/80">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <img src={logoImg} alt="Good Vibrations" className="h-12 w-auto mb-4 brightness-0 invert opacity-80" />
            <p className="text-sm text-white/60 mb-4">
              School-based speech therapy services supporting student communication, confidence, and independence.
            </p>
            <div className="flex space-x-3">
              <a href="javascript:void(0)" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="javascript:void(0)" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sm text-white/60 hover:text-white transition-colors">Why Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">More</h3>
            <ul className="space-y-2">
              <li><a href="#join" className="text-sm text-white/60 hover:text-white transition-colors">Join Our Team</a></li>
              <li><a href="#resources" className="text-sm text-white/60 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href="tel:+15742651847" className="text-sm text-white/60 hover:text-white transition-colors">(574) 265-1847</a></li>
              <li><a href="mailto:goodvibrations.speech@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">goodvibrations.speech@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Good Vibrations Speech and Language. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
