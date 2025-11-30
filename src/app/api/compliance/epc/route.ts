import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, rating, expiryDate, status } = body;

    const record = await prisma.ePC.upsert({
      where: { propertyId },
      update: { rating, expiryDate, status },
      create: {
        propertyId,
        rating,
        expiryDate,
        status,
      },
    });

    return NextResponse.json({ epc: record });
  } catch (error) {
    console.error("EPC update error:", error);
    return NextResponse.json(
      { error: "Failed to update EPC record" },
      { status: 500 }
    );
  }
}
