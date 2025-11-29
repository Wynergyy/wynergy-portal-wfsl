import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const tenant = await prisma.user.create({
    data: {
      ...data,
      role: "tenant",
    },
  });

  return NextResponse.json(tenant);
}
