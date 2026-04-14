import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <div className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <DashboardSidebar />
            </div>
          </aside>

          <section className="min-w-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
              {children}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
