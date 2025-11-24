export default function LicensingPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Licensing Overview</h1>
        <p className="text-gray-600 mt-2">
          Manage WFSL licences, allocations, and registry synchronisation.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Active Licences</h2>
          <p className="text-gray-600 mt-2">
            Review current WFSL licence allocations and compliance status.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Registry Sync</h2>
          <p className="text-gray-600 mt-2">
            Monitor synchronisation with the Wynergy Licensing Registry.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Allocation Requests</h2>
          <p className="text-gray-600 mt-2">
            Track pending licence allocation and approval workflows.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm bg-white">
          <h2 className="font-semibold text-lg">Audit & Logs</h2>
          <p className="text-gray-600 mt-2">
            Inspect historical licence events, hashes, and proof records.
          </p>
        </div>
      </section>
    </div>
  );
}
