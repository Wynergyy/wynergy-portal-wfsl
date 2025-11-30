export type OnboardingStage =
  | "identity"
  | "profile"
  | "safety"
  | "licensing"
  | "complete";

export function getNextStage(stage: OnboardingStage): OnboardingStage | null {
  switch (stage) {
    case "identity":
      return "profile";
    case "profile":
      return "safety";
    case "safety":
      return "licensing";
    case "licensing":
      return "complete";
    default:
      return null;
  }
}

export function isOnboardingComplete(stage: OnboardingStage): boolean {
  return stage === "complete";
}
