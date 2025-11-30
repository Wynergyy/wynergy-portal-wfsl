import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      include: {
        gasSafety: true,
        eicr: true,
        epc: true,
        fireSafety: true,
        alarms: true,
        licence: true,
        checklist: true,
        documents: true,
        reminders: true,
      },
    });

    return NextResponse.json({ properties });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
