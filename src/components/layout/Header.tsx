import { useState, type MouseEvent } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../ui/sheet';
import { Menu } from '../ui/icons';
import logo from '../../assets/logo-0.png';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#join', label: 'Join the Team' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile drawer links: close the Sheet first, then scroll once Radix has
  // released its scroll-lock. A plain anchor click inside the open dialog gets
  // clamped by the lock and overridden by focus-restore, so it appears to do
  // nothing. We wait out the close animation (~300ms) before scrolling.
  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }, 350);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-[12px]">
      <div className="mx-auto grid h-[74px] max-w-[1180px] grid-cols-[1fr_auto] items-center gap-5 px-6 md:grid-cols-[1fr_auto_1fr]">
        {/* Left: logo */}
        <a href="#top" className="flex items-center justify-self-start">
          <img
            src={logo}
            alt="Good Vibrations Speech and Language"
            width={702}
            height={248}
            className="h-[42px] w-auto"
          />
        </a>

        {/* Center: nav (desktop) */}
        <nav className="hidden items-center gap-8 justify-self-center md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-[15px] font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA (desktop) + mobile drawer */}
        <div className="flex items-center justify-end gap-3 justify-self-end">
          <Button
            asChild
            className="hidden h-auto rounded-full px-5 py-[10px] text-[15px] font-semibold shadow-[0_8px_18px_-8px_#8C7BE0] transition-transform duration-200 hover:scale-[1.02] md:inline-flex"
          >
            <a href="#contact">Get in Touch</a>
          </Button>

          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-foreground"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80%] max-w-[320px] bg-background"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="mt-10 flex flex-col gap-1">
                  {NAV.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => goTo(e, item.href)}
                      className="rounded-lg px-3 py-3 font-heading text-[17px] font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => goTo(e, '#contact')}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-heading text-[15px] font-semibold text-primary-foreground"
                  >
                    Get in Touch
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
