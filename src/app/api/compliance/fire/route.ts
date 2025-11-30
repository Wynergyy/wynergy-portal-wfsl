import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, assessmentDate, status } = body;

    const record = await prisma.fireSafety.upsert({
      where: { propertyId },
      update: { assessmentDate, status },
      create: {
        propertyId,
        assessmentDate,
        status,
      },
    });

    return NextResponse.json({ fireSafety: record });
  } catch (error) {
    console.error("Fire safety update error:", error);
    return NextResponse.json(
      { error: "Failed to update fire safety record" },
      { status: 500 }
    );
  }
}
