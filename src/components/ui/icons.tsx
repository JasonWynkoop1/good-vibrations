import * as React from "react";

// Lucide-style stroke icons, ported verbatim from the design reference so the
// homepage glyphs match the prototype exactly (no runtime icon dependency).
// Color is driven by `currentColor` — set it with a `text-*` class or `style`.

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function Svg({
  size = 24,
  strokeWidth = 2,
  children,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Heart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </Svg>
);

export const Zap = (p: IconProps) => (
  <Svg {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
);

export const LineChart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 3 3 5-7" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Svg>
);

export const Star = (p: IconProps) => (
  <Svg {...p}>
    <polygon points="12 2 15.1 8.6 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 8.9 8.6 12 2" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </Svg>
);
