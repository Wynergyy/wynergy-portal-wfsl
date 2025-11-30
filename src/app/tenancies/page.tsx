"use client";

import useSWR from "swr";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function TenanciesPage() {
  const { data, error } = useSWR("/api/tenancies/list", fetcher);

  if (error) return <div>Error loading tenancies.</div>;
  if (!data) return <div>Loading...</div>;

  const tenancies = data.tenancies || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tenancies</h1>
      <Separator className="mb-4" />

      <div className="grid gap-4">
        {tenancies.map((t: any) => (
          <Card key={t.id} className="p-4">
            <p className="font-semibold">Tenancy ID: {t.id}</p>
            <p>Tenant ID: {t.tenantId}</p>
            <p>Property ID: {t.propertyId}</p>
            <p>Start: {t.startDate}</p>
            <p>End: {t.endDate || "Active"}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
