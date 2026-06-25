import { Button } from "goodvibrations";

const row: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  alignItems: "center",
};

export const Variants = () => (
  <div style={row}>
    <Button>Book a consultation</Button>
    <Button variant="secondary">Learn more</Button>
    <Button variant="outline">View resources</Button>
    <Button variant="ghost">Skip for now</Button>
    <Button variant="link">Read the guide</Button>
    <Button variant="destructive">Remove</Button>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon" aria-label="Add">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </Button>
  </div>
);

export const States = () => (
  <div style={row}>
    <Button disabled>Disabled</Button>
    <Button variant="outline" disabled>
      Disabled
    </Button>
    <Button asChild>
      <a href="#contact">Link styled as button</a>
    </Button>
  </div>
);
