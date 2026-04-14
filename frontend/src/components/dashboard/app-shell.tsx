"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AppShellProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
  children: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  workspaceLabel?: string;
};

export function AppShell({
  title,
  links,
  children,
  ctaHref = "/client/plans",
  ctaLabel = "Choose a Plan",
  workspaceLabel = "Workspace",
}: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-5 py-5">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
                    AF
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight text-slate-900">
                      ApplyFlow
                    </p>
                    <p className="text-xs text-slate-500">
                      AI + Human job workflow
                    </p>
                  </div>
                </Link>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Navigation
                </p>

                <nav className="space-y-1.5">
                  {links.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`group flex items-center rounded-2xl px-3 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                      >
                        <span className="truncate">{link.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Upgrade your workflow
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Get stronger support with assistant help, tracking, and
                    better execution across applications.
                  </p>
                  <Link
                    href={ctaHref}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </div>

              <div className="border-t border-slate-200 px-4 py-4">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    AC
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      Account
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      Manage your workspace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <header className="mb-6 rounded-[2rem] border border-slate-200 bg-white px-5 py-4 shadow-sm sm:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-700">
                    {workspaceLabel}
                  </p>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h1>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Notifications
                  </button>

                  <button className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Hire a Human Assistant
                  </button>

                  <Link
                    href="/client/account"
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    Account
                  </Link>
                </div>
              </div>
            </header>

            <div className="min-w-0">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
