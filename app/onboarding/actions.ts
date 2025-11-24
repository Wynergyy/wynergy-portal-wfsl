'use server'

import { prisma } from "@/lib/prisma"
import { z } from "zod"

const OnboardingSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional()
})

export async function registerEngineer(data: unknown) {
  const parsed = OnboardingSchema.safeParse(data)
  if (!parsed.success) {
    return { error: "Invalid data" }
  }

  await prisma.engineer.create({
    data: parsed.data
  })

  return { ok: true }
}
