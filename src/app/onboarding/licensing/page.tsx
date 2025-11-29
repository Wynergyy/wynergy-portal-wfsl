"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LicensingOnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    setLoading(true);

    await fetch("/api/onboarding/licensing", {
      method: "POST",
    });

    router.push("/onboarding/complete");
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-[#1C1F26]">
        Licensing & Certification
      </h1>

      <p className="text-gray-600">
        Confirm your required licences and work-related certifications.
      </p>

      <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
        <p className="text-gray-700">
          Licensing inputs and certification uploads will be added here.
        </p>
      </div>

      <Button
        onClick={handleContinue}
        disabled={loading}
        className="bg-[#0053A6] hover:bg-[#003F7D]"
      >
        {loading ? "Saving..." : "Save & Continue"}
      </Button>

    </div>
  );
}
