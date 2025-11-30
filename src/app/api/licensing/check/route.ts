import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postcode, propertyType, occupants, households } = body;

    // Basic mandatory licensing logic
    let licenceRequired = false;

    // Example rules:
    // HMO licences required for 5 or more occupants from more than 1 household
    if (propertyType === "HMO" && occupants >= 5 && households > 1) {
      licenceRequired = true;
    }

    // Selective licensing example: specific postcodes
    const selectiveZones = ["E1", "BS1", "M1", "LS1"];
    const zonePrefix = postcode.slice(0, 2).toUpperCase();
    const isSelectiveZone = selectiveZones.includes(zonePrefix);

    // Final determination
    const result = {
      licenceRequired,
      selectiveZone: isSelectiveZone,
      reason: licenceRequired
        ? "Mandatory HMO criteria met."
        : isSelectiveZone
        ? "Selective licensing area."
        : "No licence required by default rules.",
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("Licence check error:", error);
    return NextResponse.json(
      { error: "Failed to run licence check" },
      { status: 500 }
    );
  }
}
