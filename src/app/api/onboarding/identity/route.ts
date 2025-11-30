import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, fullName, nationalId } = await req.json();

    if (!userId || !fullName || !nationalId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prisma.userOnboarding.upsert({
      where: { userId },
      update: {
        fullName,
        nationalId,
        identityComplete: true,
      },
      create: {
        userId,
        fullName,
        nationalId,
        identityComplete: true,
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
