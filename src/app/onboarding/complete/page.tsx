"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingComplete() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Onboarding Complete
      </h1>
      <p>You are being redirected to your dashboard...</p>
    </main>
  );
}
