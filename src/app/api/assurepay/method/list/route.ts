import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accountId } = await req.json();

  const methods = await prisma.paymentMethod.findMany({
    where: { accountId }
  });

  return NextResponse.json(methods);
}
