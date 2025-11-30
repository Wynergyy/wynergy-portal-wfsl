import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const tenancyId = Number(params.id);

    const tenancy = await prisma.tenancy.findUnique({
      where: { id: tenancyId },
      include: {
        tenant: true,
        property: true
      }
    });

    return NextResponse.json({ tenancy });
  } catch (error) {
    console.error("Get tenancy error:", error);
    return NextResponse.json(
      { error: "Failed to get tenancy" },
      { status: 500 }
    );
  }
}
