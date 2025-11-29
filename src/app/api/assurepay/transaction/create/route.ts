import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const tx = await prisma.paymentTransaction.create({
    data
  });

  return NextResponse.json(tx);
}
