"use server";

import { prisma } from "@/lib/prisma";

export async function registerEngineer(data: {
  fullName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
}) {
  if (!data.fullName || !data.email) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    await prisma.engineer.create({
      data: {
        fullName: String(data.fullName),
        email: String(data.email),
        phone: data.phone ? String(data.phone) : null,
      },
    });

    return { success: true };
  } catch (err) {
    console.error("RegisterEngineer Error:", err);
    return { success: false, error: "Database error" };
  }
}
