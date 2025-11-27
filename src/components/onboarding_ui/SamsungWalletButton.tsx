"use client";

import { useState } from "react";

export default function SamsungWalletButton({ userId }: { userId: string }) {
  const [status, setStatus] = useState("");

  async function start() {
    setStatus("Starting verification...");

    const initResponse = await fetch("/api/auth/samsung/init");
    const init = await initResponse.json();

    setStatus("Waiting for Samsung Wallet...");
    // Real integration: trigger Samsung's App2App SDK
  }

  return (
    <button
      onClick={start}
      className="px-4 py-2 rounded bg-blue-600 text-white"
    >
      Verify with Samsung Wallet
    </button>
  );
}
