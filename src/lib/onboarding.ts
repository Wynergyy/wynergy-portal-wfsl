import { prisma } from "@/lib/db/client";

/**
 * Retrieves onboarding progress for a given user.
 */
export async function getOnboardingState(userId: string) {
  return await prisma.userOnboarding.findUnique({
    where: { userId },
  });
}

/**
 * Determines the next onboarding step for a user.
 */
export function getNextOnboardingStep(state: any) {
  if (!state) return "/onboarding/identity";
  if (!state.identityComplete) return "/onboarding/identity";
  if (!state.profileComplete) return "/onboarding/profile";
  if (!state.safetyComplete) return "/onboarding/safety";
  if (!state.licensingComplete) return "/onboarding/licensing";
  if (!state.complete) return "/onboarding/complete";

  // All done
  return "/dashboard";
}
