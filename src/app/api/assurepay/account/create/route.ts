import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const account = await prisma.paymentAccount.create({
    data: {
      userId: data.userId,
      currency: data.currency || "GBP"
    }
  });

  return NextResponse.json(account);
}
