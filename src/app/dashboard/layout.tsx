import AppShell from "@/components/AppShell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </AppShell>
  );
}
