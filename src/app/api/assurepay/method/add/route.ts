import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const method = await prisma.paymentMethod.create({
    data
  });

  return NextResponse.json(method);
}
