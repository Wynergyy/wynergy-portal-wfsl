import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { decodeSamsungPayload } from "@/lib/samsung-wallet/decode";

export async function POST(req: Request) {
  const { userId, payload } = await req.json();

  const decoded = decodeSamsungPayload(payload);

  const record = await prisma.identityProof.create({
    data: {
      userId,
      provider: "samsung_wallet",
      documentType: decoded.documentType,
      verifiedAt: new Date(),
      deviceId: decoded.deviceId,
      rawClaims: decoded.rawClaims,
    },
  });

  return NextResponse.json({
    success: true,
    identityProofId: record.id,
  });
}
