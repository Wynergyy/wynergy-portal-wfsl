import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      propertyId,
      dampMould,
      ventilation,
      heating,
      structureSafe,
      fireExitsClear,
      sanitation,
      infestation,
      status
    } = body;

    const checklist = await prisma.habitabilityChecklist.upsert({
      where: { propertyId },
      update: {
        dampMould,
        ventilation,
        heating,
        structureSafe,
        fireExitsClear,
        sanitation,
        infestation,
        status
      },
      create: {
        propertyId,
        dampMould,
        ventilation,
        heating,
        structureSafe,
        fireExitsClear,
        sanitation,
        infestation,
        status
      },
    });

    return NextResponse.json({ checklist });
  } catch (error) {
    console.error("Checklist update error:", error);
    return NextResponse.json(
      { error: "Failed to update habitability checklist" },
      { status: 500 }
    );
  }
}
