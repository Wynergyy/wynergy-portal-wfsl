import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await req.json();

  const account = await prisma.paymentAccount.findFirst({
    where: { userId },
    include: {
      methods: true,
      schedules: true,
      transactions: true
    }
  });

  return NextResponse.json(account);
}
