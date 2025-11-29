import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accountId } = await req.json();

  const tx = await prisma.paymentTransaction.findMany({
    where: { accountId },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(tx);
}
