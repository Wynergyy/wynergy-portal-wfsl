export default function OnboardingIndex() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-xl font-semibold tracking-tight">
          WFSL Onboarding
        </h1>
        <p className="text-sm text-gray-500">
          Choose a step to continue your onboarding.
        </p>

        <ul className="space-y-2 text-sm">
          <li><a href="/onboarding/identity" className="underline">Identity</a></li>
          <li><a href="/onboarding/profile" className="underline">Profile</a></li>
          <li><a href="/onboarding/safety" className="underline">Safety</a></li>
          <li><a href="/onboarding/licensing" className="underline">Licensing</a></li>
          <li><a href="/onboarding/complete" className="underline">Complete</a></li>
        </ul>
      </section>
    </main>
  );
}
