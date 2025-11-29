"use client";

import { useState } from "react";
import APCard from "@/components/assurepay/Card";

export default function RentCalculator() {
  const [rent, setRent] = useState("");
  const [hb, setHb] = useState("");
  const [uc, setUc] = useState("");
  const [result, setResult] = useState<any>(null);

  function calc() {
    const total = Number(rent) - (Number(hb) + Number(uc));
    setResult(total);
  }

  return (
    <APCard title="Tenant Rent Calculator">
      <div className="space-y-3">
        <input
          placeholder="Weekly Rent"
          className="border p-2 w-full"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
        <input
          placeholder="Housing Benefit Contribution"
          className="border p-2 w-full"
          value={hb}
          onChange={(e) => setHb(e.target.value)}
        />
        <input
          placeholder="Universal Credit Contribution"
          className="border p-2 w-full"
          value={uc}
          onChange={(e) => setUc(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded" onClick={calc}>
          Calculate
        </button>

        {result !== null && (
          <p className="text-lg mt-2">
            Tenant contribution: <strong>£{result}</strong> per week
          </p>
        )}
      </div>
    </APCard>
  );
}
