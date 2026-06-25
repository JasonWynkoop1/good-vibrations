import { Input, Label } from "goodvibrations";

const field: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  maxWidth: 320,
};

export const WithLabel = () => (
  <div style={field}>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="your@email.com" />
  </div>
);

export const Types = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
    <Input type="text" placeholder="Student name" />
    <Input type="tel" placeholder="(123) 456-7890" />
    <Input type="email" placeholder="your@email.com" />
  </div>
);

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
    <Input placeholder="Default" />
    <Input placeholder="Disabled" disabled />
    <Input defaultValue="With a value" />
  </div>
);
