export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Your central control hub. All accommodation, licensing, compliance, tenancy,
          onboarding and organisation tools in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <a
          href="/properties"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Properties</h2>
          <p className="text-sm text-muted-foreground">
            Manage properties, units, HMO rooms and compliance records.
          </p>
        </a>

        <a
          href="/tenants"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Tenants</h2>
          <p className="text-sm text-muted-foreground">
            Register tenants, update details and view linked tenancies.
          </p>
        </a>

        <a
          href="/tenancies"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Tenancies</h2>
          <p className="text-sm text-muted-foreground">
            Create ASTs, track renewals and manage move-ins and move-outs.
          </p>
        </a>

        <a
          href="/compliance"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Compliance</h2>
          <p className="text-sm text-muted-foreground">
            Gas, EICR, EPC, fire safety, alarms and habitability checks.
          </p>
        </a>

        <a
          href="/licensing"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Licensing</h2>
          <p className="text-sm text-muted-foreground">
            Mandatory, Additional and Selective licensing rules and checks.
          </p>
        </a>

        <a
          href="/documents"
          className="block p-4 border rounded-lg bg-card hover:bg-accent transition"
        >
          <h2 className="font-semibold mb-1">Documents</h2>
          <p className="text-sm text-muted-foreground">
            Upload certificates, tenancy agreements and evidence bundles.
          </p>
        </a>
      </div>
    </div>
  );
}
