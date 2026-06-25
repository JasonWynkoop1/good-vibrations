import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "goodvibrations";

export const Default = () => (
  <div style={{ maxWidth: 400 }}>
    <Card>
      <CardHeader>
        <CardTitle>School-Based Speech Therapy</CardTitle>
        <CardDescription>
          Supporting student communication, confidence, and independence.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0 }}>
          Individualized, on-site sessions aligned with each student's IEP goals —
          from articulation and language to AAC and social communication.
        </p>
      </CardContent>
      <CardFooter style={{ gap: 12 }}>
        <Button>Book a consultation</Button>
        <Button variant="outline">Learn more</Button>
      </CardFooter>
    </Card>
  </div>
);

export const Simple = () => (
  <div style={{ maxWidth: 360 }}>
    <Card>
      <CardHeader>
        <CardTitle>Family Resources</CardTitle>
        <CardDescription>Guides and tips you can use at home.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ margin: 0 }}>
          Practical, parent-friendly strategies to keep progress going between
          sessions.
        </p>
      </CardContent>
    </Card>
  </div>
);
