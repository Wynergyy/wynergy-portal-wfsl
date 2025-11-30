import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const tenant = await prisma.tenant.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone
      }
    });

    return NextResponse.json({ tenant });
  } catch (error) {
    console.error("Create tenant error:", error);
    return NextResponse.json(
      { error: "Failed to create tenant" },
      { status: 500 }
    );
  }
}
