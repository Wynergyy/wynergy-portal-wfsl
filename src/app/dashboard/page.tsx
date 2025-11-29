import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Welcome Header */}
      <h1 className="text-3xl font-bold text-[#1C1F26]">
        Welcome to WFSL Portal
      </h1>

      <p className="text-gray-600">
        Your central hub for operations, compliance, licensing, and workforce tools.
      </p>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg">Your Role</h2>
            <p className="text-gray-500 mt-1">Determines access and capabilities.</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg">Onboarding Status</h2>
            <p className="text-gray-500 mt-1">
              All required onboarding steps completed.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg">Next Actions</h2>
            <p className="text-gray-500 mt-1">
              Explore your dashboard tools using the sidebar.
            </p>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}
