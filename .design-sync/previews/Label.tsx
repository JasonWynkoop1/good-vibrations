import { Label, Input } from "goodvibrations";

const field: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  maxWidth: 320,
};

export const Default = () => (
  <div style={field}>
    <Label htmlFor="first-name">First name</Label>
    <Input id="first-name" placeholder="First name" />
  </div>
);

export const Required = () => (
  <div style={field}>
    <Label htmlFor="parent-email">
      Parent email <span style={{ color: "hsl(var(--destructive))" }}>*</span>
    </Label>
    <Input id="parent-email" type="email" placeholder="your@email.com" required />
  </div>
);
