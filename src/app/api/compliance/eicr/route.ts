import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const rec = await prisma.document.create({
    data: {
      ...data,
      type: "eicr",
    },
  });

  return NextResponse.json(rec);
}
