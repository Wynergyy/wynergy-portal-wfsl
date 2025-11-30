import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const propertyId = Number(params.id);

    const property = await prisma.property.findUnique({
      where: { id: propertyId },
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

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ property });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 }
    );
  }
}
