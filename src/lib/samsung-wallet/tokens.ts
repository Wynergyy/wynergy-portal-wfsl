import crypto from "crypto";

export async function verifySamsungToken(
  token: string,
  expectedNonce: string
): Promise<{ valid: boolean; payload?: any }> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return { valid: false };

    const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString());

    if (payload?.nonce !== expectedNonce) return { valid: false };

    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}
