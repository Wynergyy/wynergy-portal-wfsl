import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const entry = await prisma.auditLog.create({
    data,
  });

  return NextResponse.json(entry);
}
