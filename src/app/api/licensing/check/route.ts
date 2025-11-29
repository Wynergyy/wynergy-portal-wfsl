import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const licence = await prisma.licence.upsert({
    where: { propertyId: data.propertyId },
    update: data,
    create: data,
  });

  return NextResponse.json(licence);
}
