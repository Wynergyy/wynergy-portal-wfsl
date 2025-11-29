import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getOnboardingState, getNextOnboardingStep } from "@/lib/onboarding";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check session
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    redirect("/login");
    return null;
  }

  // Fetch onboarding state
  const state = await getOnboardingState(session.user.id);
  const nextStep = getNextOnboardingStep(state);

  const currentPath = "/onboarding";
  if (!state && nextStep !== currentPath) redirect(nextStep);
  if (state && nextStep !== currentPath) redirect(nextStep);

  return <>{children}</>;
}
