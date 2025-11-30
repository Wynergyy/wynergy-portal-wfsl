import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, status, expiryDate } = body;

    const record = await prisma.gasSafety.upsert({
      where: { propertyId },
      update: { status, expiryDate },
      create: {
        propertyId,
        status,
        expiryDate,
      },
    });

    return NextResponse.json({ gasSafety: record });
  } catch (error) {
    console.error("Gas Safety update error:", error);
    return NextResponse.json(
      { error: "Failed to update Gas Safety record" },
      { status: 500 }
    );
  }
}
