import { Button } from '../ui/button';
import logoImg from '../../assets/logo-0.png';

interface HeaderProps {
  mainNavItems: Array<{ href: string; label: string }>;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ mainNavItems, isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-border/40 shadow-sm relative">
      <div className="container flex flex-col md:flex-row h-auto md:h-20 items-center justify-center gap-2 md:gap-6 py-3 md:py-0">
        <a href="#home" className="flex items-center">
          <img src={logoImg} alt="Good Vibrations Speech and Language" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-1">
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 lg:px-3 py-2 text-sm font-heading font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden absolute right-4 top-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 p-0"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
