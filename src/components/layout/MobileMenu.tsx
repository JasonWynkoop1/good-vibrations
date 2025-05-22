interface MobileMenuProps {
    isMenuOpen: boolean;
    mainNavItems: Array<{ href: string; label: string }>;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function MobileMenu({isMenuOpen, mainNavItems, setIsMenuOpen}: MobileMenuProps) {
    if (!isMenuOpen) return null;

    return (
        <div
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container py-4">
                <ul className="flex flex-col space-y-4">
                    {mainNavItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="block py-2 text-foreground hover:text-primary transition-colors text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="border-t border-border/50 pt-4 mt-4">
                        <div className="flex items-center gap-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+15742651847" className="text-sm">(574) 265-1847</a>
                        </div>
                        <div className="flex items-center gap-2 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="flex-shrink-0">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                            <a href="mailto:goodvibrations.speech@gmail.com"
                               className="text-sm block whitespace-nowrap">goodvibrations.speech@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
