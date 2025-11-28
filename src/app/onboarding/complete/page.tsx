import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CompletePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Onboarding Complete</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your onboarding process is now finished.</p>
        <p>You may now proceed to the WFSL Dashboard.</p>
      </CardContent>
    </Card>
  );
}
