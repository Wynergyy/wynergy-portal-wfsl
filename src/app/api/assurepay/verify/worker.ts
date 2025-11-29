import prisma from "@/lib/prisma";

export async function runGovVerification() {
  const pending = await prisma.govVerificationLog.findMany({
    where: { status: "pending" }
  });

  for (const log of pending) {
    await prisma.govVerificationLog.update({
      where: { id: log.id },
      data: {
        status: "verified",
        details: "Automatically verified by mock GOV service"
      }
    });
  }
}
