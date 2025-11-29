import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tenants = await prisma.user.findMany({
    where: { role: "tenant" },
  });

  return NextResponse.json(tenants);
}
