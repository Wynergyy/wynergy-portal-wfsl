import { NextResponse } from "next/server";
import { verifySamsungToken } from "@/lib/samsung-wallet/tokens";

export async function POST(req: Request) {
  const { token, expectedNonce } = await req.json();

  const result = await verifySamsungToken(token, expectedNonce);

  return NextResponse.json({
    valid: result.valid,
    payload: result.payload || null,
  });
}
