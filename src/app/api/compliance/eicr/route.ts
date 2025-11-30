import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, status, expiryDate } = body;

    const record = await prisma.eICR.upsert({
      where: { propertyId },
      update: { status, expiryDate },
      create: {
        propertyId,
        status,
        expiryDate,
      },
    });

    return NextResponse.json({ eicr: record });
  } catch (error) {
    console.error("EICR update error:", error);
    return NextResponse.json(
      { error: "Failed to update EICR record" },
      { status: 500 }
    );
  }
}
