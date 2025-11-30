import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      address,
      city,
      postcode,
      propertyType = "HMO",
      userId = 1
    } = body;

    if (!address || !city || !postcode) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const property = await prisma.property.create({
      data: {
        address,
        city,
        postcode,
        propertyType,
        userId,

        gasSafety: { create: { status: "missing" } },
        eicr: { create: { status: "missing" } },
        epc: { create: { status: "missing" } },
        fireSafety: { create: { status: "missing" } },
        alarms: { create: { status: "non_compliant" } },
        licence: { create: { status: "not_required" } },
        checklist: { create: { status: "incomplete" } }
      },

      include: {
        gasSafety: true,
        eicr: true,
        epc: true,
        fireSafety: true,
        alarms: true,
        licence: true,
        checklist: true
      }
    });

    return NextResponse.json({ success: true, property });
  } catch (err) {
    console.error("[CREATE PROPERTY ERROR]", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
