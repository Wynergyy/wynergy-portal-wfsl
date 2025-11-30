import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const tenants = await prisma.tenant.findMany();
    return NextResponse.json({ tenants });
  } catch (error) {
    console.error("List tenants error:", error);
    return NextResponse.json(
      { error: "Failed to list tenants" },
      { status: 500 }
    );
  }
}
