import { getCurrentSession } from "@/lib/auth";
import { Card } from "@/components/ui/card";

export default async function SafetyPage() {
  const session = await getCurrentSession();

  return (
    <Card className="p-6">
      <h1 className="text-xl font-semibold mb-4">Safety & Compliance</h1>

      <p className="text-sm text-muted-foreground mb-4">
        Logged in as: {session?.user?.email}
      </p>

      <p className="text-sm">
        This step will gather required safety and compliance information
        relevant to engineering, telecoms, or contractor duties.
      </p>
    </Card>
  );
}
