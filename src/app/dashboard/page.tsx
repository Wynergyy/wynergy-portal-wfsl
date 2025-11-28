import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the WFSL Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your dashboard is now running with the new App Shell.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Backend Stability: 10/10</p>
          <p>Frontend Mode: 2026 UI upgrade</p>
          <p>Next Step: Onboarding UI</p>
        </CardContent>
      </Card>
    </div>
  );
}
