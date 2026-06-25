import { Textarea, Label } from "goodvibrations";

const field: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  maxWidth: 400,
};

export const WithLabel = () => (
  <div style={field}>
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" rows={4} placeholder="How can we help you?" />
  </div>
);

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400 }}>
    <Textarea
      rows={3}
      defaultValue="We'd love to learn more about your student's communication goals."
    />
    <Textarea rows={3} placeholder="Disabled" disabled />
  </div>
);
