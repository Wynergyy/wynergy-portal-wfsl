import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { propertyId, smokeAlarms, coAlarms, status } = body;

    const record = await prisma.alarmCompliance.upsert({
      where: { propertyId },
      update: {
        smokeAlarms,
        coAlarms,
        status,
      },
      create: {
        propertyId,
        smokeAlarms,
        coAlarms,
        status,
      },
    });

    return NextResponse.json({ alarms: record });
  } catch (error) {
    console.error("Alarm compliance update error:", error);
    return NextResponse.json(
      { error: "Failed to update alarm compliance" },
      { status: 500 }
    );
  }
}
