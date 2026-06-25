import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Button,
} from "goodvibrations";

// Overlay component: rendered in its open state inside a single fixed-size card
// (see cfg.overrides.Sheet). The panel slides in from the right by default.
export const Open = () => (
  <Sheet open onOpenChange={() => {}}>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Contact Good Vibrations</SheetTitle>
        <SheetDescription>
          Schedule a consultation or ask about school-based speech services.
        </SheetDescription>
      </SheetHeader>
      <div style={{ padding: "16px 0", fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Tell us a little about your student and we'll follow up within one
          business day.
        </p>
      </div>
      <SheetFooter>
        <Button>Send message</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
