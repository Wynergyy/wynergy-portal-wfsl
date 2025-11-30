import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const tenancy = await prisma.tenancy.create({
      data: {
        tenantId: data.tenantId,
        propertyId: data.propertyId,
        startDate: data.startDate,
        endDate: data.endDate
      }
    });

    return NextResponse.json({ tenancy });
  } catch (error) {
    console.error("Create tenancy error:", error);
    return NextResponse.json(
      { error: "Failed to create tenancy" },
      { status: 500 }
    );
  }
}
