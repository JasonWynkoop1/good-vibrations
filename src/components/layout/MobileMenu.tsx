interface MobileMenuProps {
  isMenuOpen: boolean;
  mainNavItems: Array<{ href: string; label: string }>;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function MobileMenu({ isMenuOpen, mainNavItems, setIsMenuOpen }: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden border-t border-border/40 bg-white/95 backdrop-blur-lg fixed top-20 left-0 right-0 z-40 shadow-lg">
      <nav className="container py-4">
        <ul className="flex flex-col space-y-1">
          {mainNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-colors text-base font-heading font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="border-t border-border/40 pt-4 mt-2 px-4">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+15742651847" className="hover:text-primary transition-colors">(574) 265-1847</a>
              <a href="mailto:goodvibrations.speech@gmail.com" className="hover:text-primary transition-colors">goodvibrations.speech@gmail.com</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
