"use client";

import { useEffect, useState } from "react";

type ComplianceStatus = "missing" | "valid" | "expired" | "non_compliant" | "not_required" | "incomplete" | string;

type ComplianceItem = {
  status?: ComplianceStatus;
};

type Property = {
  id: number;
  address: string;
  city: string;
  postcode: string;
  propertyType: string;
  occupants: number;
  households: number;
  gasSafety?: ComplianceItem | null;
  eicr?: ComplianceItem | null;
  epc?: ComplianceItem | null;
  fireSafety?: ComplianceItem | null;
  alarms?: ComplianceItem | null;
  licence?: ComplianceItem | null;
  checklist?: ComplianceItem | null;
};

type NewProperty = {
  address: string;
  city: string;
  postcode: string;
  propertyType: string;
  occupants: number;
  households: number;
  userId: number;
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<NewProperty>({
    address: "",
    city: "",
    postcode: "",
    propertyType: "house",
    occupants: 1,
    households: 1,
    userId: 1,
  });

  const loadProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/properties/list");
      if (!res.ok) {
        throw new Error("Failed to load properties");
      }
      const data = await res.json();
      setProperties(data.properties || []);
    } catch (e: any) {
      setError(e.message || "Error loading properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const handleChange = (field: keyof NewProperty, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "occupants" || field === "households" || field === "userId"
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError(null);

      const res = await fetch("/api/properties/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to create property");
      }

      setForm({
        address: "",
        city: "",
        postcode: "",
        propertyType: "house",
        occupants: 1,
        households: 1,
        userId: 1,
      });

      await loadProperties();
    } catch (e: any) {
      setError(e.message || "Error saving property");
    } finally {
      setSaving(false);
    }
  };

  const statusBadge = (label: string, status?: ComplianceStatus) => {
    let text = "Missing";
    if (status === "valid") text = "Valid";
    else if (status === "expired") text = "Expired";
    else if (status === "non_compliant") text = "Non-compliant";
    else if (status === "not_required") text = "Not required";
    else if (status === "incomplete") text = "Incomplete";

    return (
      <div className="text-xs border rounded px-2 py-1 bg-wfsl-card wfsl-border wfsl-text-secondary">
        <strong>{label}:</strong> {text}
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 bg-wfsl-bg-card">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="wfsl-card wfsl-border mb-4">
          <h1 className="wfsl-title text-2xl">Accommodation Compliance Dashboard</h1>
          <p className="wfsl-subtitle text-sm">
            Track properties, safety certificates, licensing and habitability checks in one place.
          </p>
        </header>

        <section className="wfsl-card wfsl-border">
          <h2 className="wfsl-title text-lg mb-2">Add a property</h2>
          <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-3">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Address</label>
              <input
                className="border rounded px-2 py-1"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">City</label>
              <input
                className="border rounded px-2 py-1"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Postcode</label>
              <input
                className="border rounded px-2 py-1"
                value={form.postcode}
                onChange={(e) => handleChange("postcode", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Property type</label>
              <select
                className="border rounded px-2 py-1"
                value={form.propertyType}
                onChange={(e) => handleChange("propertyType", e.target.value)}
              >
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="hmo">HMO</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Occupants</label>
              <input
                type="number"
                min={1}
                className="border rounded px-2 py-1"
                value={form.occupants}
                onChange={(e) => handleChange("occupants", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Households</label>
              <input
                type="number"
                min={1}
                className="border rounded px-2 py-1"
                value={form.households}
                onChange={(e) => handleChange("households", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1">User ID</label>
              <input
                type="number"
                min={1}
                className="border rounded px-2 py-1"
                value={form.userId}
                onChange={(e) => handleChange("userId", e.target.value)}
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={saving}
                className="wfsl-btn"
              >
                {saving ? "Saving..." : "Add property"}
              </button>
            </div>
          </form>
        </section>

        {error && (
          <div className="wfsl-card wfsl-border">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <section className="wfsl-card wfsl-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="wfsl-title text-lg mb-0">Properties and compliance</h2>
            <button
              onClick={loadProperties}
              disabled={loading}
              className="wfsl-btn"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {properties.length === 0 && !loading && (
            <p className="text-sm wfsl-text-secondary">No properties yet. Add one above.</p>
          )}

          <div className="space-y-3">
            {properties.map((p) => (
              <div key={p.id} className="border rounded p-3 wfsl-bg-card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div>
                    <div className="font-semibold">
                      {p.address}, {p.city}, {p.postcode}
                    </div>
                    <div className="text-xs wfsl-text-secondary">
                      Type: {p.propertyType} | Occupants: {p.occupants} | Households: {p.households}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {statusBadge("Gas", p.gasSafety?.status)}
                  {statusBadge("EICR", p.eicr?.status)}
                  {statusBadge("EPC", p.epc?.status)}
                  {statusBadge("Fire", p.fireSafety?.status)}
                  {statusBadge("Alarms", p.alarms?.status)}
                  {statusBadge("Licence", p.licence?.status)}
                  {statusBadge("Checklist", p.checklist?.status)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
