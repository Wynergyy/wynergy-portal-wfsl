"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LicensingRegistryAdmin() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Licensing Registry</h1>
      <Separator className="my-4" />

      <Card className="p-6 mb-6">
        <h2 className="font-semibold">Mandatory, Selective, HMO</h2>
        <p>Manage property licensing, categories, expiry tracking and compliance.</p>
      </Card>
    </div>
  );
}
