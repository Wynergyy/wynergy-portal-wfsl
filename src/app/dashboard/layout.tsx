import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getOnboardingState, getNextOnboardingStep } from "@/lib/onboarding";
import { redirect } from "next/navigation";
import AppShell from "@/components/AppShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/login");
  }

  const state = await getOnboardingState(session.user.id);
  const nextStep = getNextOnboardingStep(state);

  // If user hasn't completed onboarding, redirect
  if (nextStep.startsWith("/onboarding")) {
    redirect(nextStep);
  }

  return <AppShell>{children}</AppShell>;
}
