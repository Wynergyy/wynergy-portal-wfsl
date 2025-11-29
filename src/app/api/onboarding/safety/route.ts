import { NextResponse } from "next/server";
import prisma from "@/lib/db/client";

export async function POST(req: Request) {
  try {
    const { userId, hasPPE, safetyTrainingDate } = await req.json();

    if (!userId || hasPPE === undefined || !safetyTrainingDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prisma.userOnboarding.upsert({
      where: { userId },
      update: {
        hasPPE,
        safetyTrainingDate,
        safetyComplete: true,
      },
      create: {
        userId,
        hasPPE,
        safetyTrainingDate,
        safetyComplete: true,
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
