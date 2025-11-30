import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const tenancies = await prisma.tenancy.findMany({
      include: {
        tenant: true,
        property: true
      }
    });

    return NextResponse.json({ tenancies });
  } catch (error) {
    console.error("List tenancies error:", error);
    return NextResponse.json(
      { error: "Failed to list tenancies" },
      { status: 500 }
    );
  }
}
