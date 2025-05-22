export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-primary block leading-none">Good Vibrations</span>
                <span className="text-xs text-muted-foreground">Speech & Language Therapy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Providing exceptional speech and language therapy services for students through school contracts since 2005.
            </p>
            <div className="flex space-x-3">
              <a href="javascript:void(0)" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-background/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="javascript:void(0)" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-background/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-base mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-3">School Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Student Speech Therapy</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">School Language Programs</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Educational Assessments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-0.5 text-muted-foreground">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-muted-foreground">123 Therapy Lane<br />Speech City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-muted-foreground">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+15742651847" className="text-sm text-muted-foreground hover:text-primary transition-colors">(574) 265-1847</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-muted-foreground flex-shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:goodvibrations.speech@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block whitespace-nowrap">goodvibrations.speech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-xs text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Good Vibrations Speech & Language Therapy. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="javascript:void(0)" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="javascript:void(0)" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="javascript:void(0)" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
