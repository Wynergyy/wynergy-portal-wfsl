import crypto from "crypto";

export function createSamsungInit() {
  return {
    nonce: crypto.randomBytes(32).toString("hex"),
    timestamp: Date.now(),
    callbackUrl: process.env.SAMSUNG_WALLET_CALLBACK_URL || "",
  };
}
