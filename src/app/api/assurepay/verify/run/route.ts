import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { methodId, scheduleId } = await req.json();

  const log = await prisma.govVerificationLog.create({
    data: {
      methodId,
      scheduleId,
      status: "pending",
      authority: "UC",
      reference: `CHK-${Date.now()}`,
      details: "Awaiting verification"
    }
  });

  return NextResponse.json(log);
}
