import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accountId } = await req.json();

  const schedules = await prisma.paymentSchedule.findMany({
    where: { accountId },
    include: {
      transactions: true,
      verificationLogs: true
    }
  });

  return NextResponse.json(schedules);
}
