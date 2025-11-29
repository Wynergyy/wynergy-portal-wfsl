import { NextResponse } from "next/server";
import prisma from "@/lib/db/client";

export async function POST(req: Request) {
  try {
    const { userId, phone, address } = await req.json();

    if (!userId || !phone || !address) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prisma.userOnboarding.upsert({
      where: { userId },
      update: {
        phone,
        address,
        profileComplete: true,
      },
      create: {
        userId,
        phone,
        address,
        profileComplete: true,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
