import { NextResponse } from "next/server";
import prisma from "@/lib/db/client";

export async function POST(req: Request) {
  try {
    const { userId, cscsNumber, nrswaNumber, expiryDate } = await req.json();

    if (!userId || !cscsNumber || !nrswaNumber || !expiryDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prisma.userOnboarding.upsert({
      where: { userId },
      update: {
        cscsNumber,
        nrswaNumber,
        expiryDate,
        licensingComplete: true,
      },
      create: {
        userId,
        cscsNumber,
        nrswaNumber,
        expiryDate,
        licensingComplete: true,
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
