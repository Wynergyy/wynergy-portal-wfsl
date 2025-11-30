"use client";

import useSWR from "swr";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function TenantsPage() {
  const { data, error } = useSWR("/api/tenants/list", fetcher);

  if (error) return <div>Error loading tenants.</div>;
  if (!data) return <div>Loading...</div>;

  const tenants = data.tenants || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tenants</h1>
      <Separator className="mb-4" />

      <div className="grid gap-4">
        {tenants.map((tenant: any) => (
          <Card key={tenant.id} className="p-4">
            <p className="font-semibold">{tenant.name}</p>
            <p>{tenant.email}</p>
            <p>{tenant.phone}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
