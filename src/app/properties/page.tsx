"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/properties/list");
        const data = await res.json();
        setProperties(data.properties || []);
      } catch (err) {
        console.error("Properties load error:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Properties</h1>
      <Separator className="my-4" />

      {loading && <p>Loading...</p>}

      {!loading && properties.length === 0 && (
        <p>No properties found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map((p) => (
          <Card key={p.id} className="p-4">
            <h2 className="text-xl font-semibold">{p.address}</h2>
            <p>{p.city}</p>
            <p>{p.postcode}</p>
            <p className="mt-2 text-sm text-gray-600">
              Type: {p.propertyType}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
