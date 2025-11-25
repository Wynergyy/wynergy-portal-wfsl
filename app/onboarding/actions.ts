"use server";

import { prisma } from "@/lib/prisma";

interface EngineerInput {
  fullName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
}

export async function registerEngineer(data: EngineerInput) {
  if (!data.fullName || !data.email) {
    console.error("Missing required fields");
    return;
  }

  try {
    await prisma.engineer.create({
      data: {
        fullName: String(data.fullName),
        email: String(data.email),
        phone: data.phone ? String(data.phone) : null,
      },
    });

    console.log("Engineer registered successfully.");
  } catch (err) {
    console.error("Error creating engineer:", err);
  }
}
