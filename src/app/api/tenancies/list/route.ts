import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tenancies = await prisma.tenancy.findMany({
    include: {
      property: true,
      tenant: true,
    },
  });

  return NextResponse.json(tenancies);
}
