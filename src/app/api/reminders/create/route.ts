import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const reminder = await prisma.reminder.create({
      data: {
        title: data.title,
        dueDate: data.dueDate,
        propertyId: data.propertyId
      }
    });

    return NextResponse.json({ reminder });
  } catch (error) {
    console.error("Create reminder error:", error);
    return NextResponse.json(
      { error: "Failed to create reminder" },
      { status: 500 }
    );
  }
}
