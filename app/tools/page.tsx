export default function ToolsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Internal Tools</h1>
        <p className="text-gray-600 mt-2">
          Access WFSL automation, diagnostics and operational utilities.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Automation Suite</h2>
          <p className="text-gray-600 mt-2">
            View internal scripts, batch operations and fast-lane tasks.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Registry Utilities</h2>
          <p className="text-gray-600 mt-2">
            Tools for interacting with the Wynergy Licensing Registry and KV.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Integrity Checks</h2>
          <p className="text-gray-600 mt-2">
            Run hash verification, manifests and chain-of-custody review.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Diagnostics</h2>
          <p className="text-gray-600 mt-2">
            Inspect environment variables, Worker bindings and deployment data.
          </p>
        </div>

      </section>
    </div>
  );
}
