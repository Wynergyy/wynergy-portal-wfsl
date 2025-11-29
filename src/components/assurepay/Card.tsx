"use client";

import { assureBrand } from "./branding";

export default function APCard({ title, children }: any) {
  return (
    <div
      style={{
        padding: "20px",
        background: "white",
        borderRadius: assureBrand.radius,
        boxShadow: assureBrand.cardShadow,
        marginBottom: "16px",
      }}
    >
      {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
      {children}
    </div>
  );
}
