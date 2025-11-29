import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const properties = await prisma.property.findMany({
    include: {
      documents: true,
    },
  });

  return NextResponse.json(properties);
}
