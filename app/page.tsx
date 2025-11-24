export default function HomePage() {
  return (
    <div className="space-y-12">

      <header className="border-b border-neutral-800 pb-6">
        <h1 className="text-5xl font-bold tracking-tight">WFSL Operations Portal</h1>
        <p className="text-neutral-400 mt-2 text-lg">
          Central command for licensing, compliance, onboarding, and audit integrity.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <a href="/compliance" className="card">
          <h2 className="font-semibold text-xl">Compliance Status</h2>
          <p className="mt-2">
            Review WFSL compliance rulesets, status flags, and governance checkpoints.
          </p>
        </a>

        <a href="/licensing" className="card">
          <h2 className="font-semibold text-xl">Licensing Overview</h2>
          <p className="mt-2">
            Manage licences, allocations, registry sync, and validation events.
          </p>
        </a>

        <a href="/onboarding" className="card">
          <h2 className="font-semibold text-xl">Onboarding</h2>
          <p className="mt-2">
            Engineer onboarding, verification flows, and workforce readiness.
          </p>
        </a>

        <a href="/tools" className="card">
          <h2 className="font-semibold text-xl">Internal Tools</h2>
          <p className="mt-2">
            Access automation suites, utilities, and command modules.
          </p>
        </a>

        <div className="card">
          <h2 className="font-semibold text-xl">Audit Trail</h2>
          <p className="mt-2">
            Inspect chain-of-custody logs, hashes, and LFCS integrity outputs.
          </p>
        </div>

      </section>
    </div>
  );
}
