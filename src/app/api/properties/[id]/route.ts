import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  const id = Number(context.params.id);

  const property = await prisma.property.findUnique({
    where: { id },
    include: {
      gasSafety: true,
      eicr: true,
      epc: true,
      fireSafety: true,
      alarms: true,
      licence: true,
      checklist: true,
      documents: true,
      reminders: true,
    },
  });

  return NextResponse.json({ property });
}
