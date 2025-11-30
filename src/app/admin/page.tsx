"use client";

import { useSession } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdminOverviewPage() {
  const { data: session } = useSession();
  const email = session?.user?.email || "";
  const role = session?.user?.wfsl?.roles?.[0] || "user";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Overview</h1>
      <Separator className="my-4" />

      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Session</h2>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-2">System Overview</h2>
        <p>This is the central administration panel for the entire ecosystem.</p>
        <ul className="list-disc ml-5 mt-3">
          <li>WFSL Core</li>
          <li>SAS CIC</li>
          <li>Durbin House</li>
          <li>AssurePay engine</li>
          <li>Compliance Engine</li>
          <li>Licensing Registry</li>
          <li>Tenant and Housing Systems</li>
          <li>Phase 6 Identity Authority</li>
        </ul>
      </Card>
    </div>
  );
}
