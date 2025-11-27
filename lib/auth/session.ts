import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export default async function getSessionUser() {
  const cookieStore = cookies();
  const sessionId = cookieStore.get("session")?.value;

  if (!sessionId) return null;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  });

  if (!session) return null;

  return session.user;
}
