"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardSidebarProps = {
  admin?: boolean;
};

const clientLinks = [
  { label: "Overview", href: "/dashboard" },
  { label: "My Profile", href: "/dashboard/profile" },
  { label: "Resume Upload", href: "/dashboard/resume" },
  { label: "AI Job Matches", href: "/dashboard/matches" },
  { label: "Applications", href: "/dashboard/applications" },
  { label: "Evidence", href: "/dashboard/evidence" },
  { label: "Billing", href: "/dashboard/billing" },
  { label: "Messages", href: "/dashboard/messages" },
];

const adminLinks = [
  { label: "Overview", href: "/admin" },
  { label: "Clients", href: "/admin/clients" },
  { label: "Assigned", href: "/admin/assigned" },
  { label: "Applications", href: "/admin/applications" },
  { label: "Evidence Upload", href: "/admin/evidence" },
  { label: "Internal Notes", href: "/admin/notes" },
];

export function DashboardSidebar({ admin = false }: DashboardSidebarProps) {
  const pathname = usePathname();
  const links = admin ? adminLinks : clientLinks;

  return (
    <aside className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-700">
            AF
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">
              ApplyFlow
            </p>
            <p className="text-xs text-slate-500">
              {admin ? "Admin workspace" : "Client workspace"}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex-1 p-4">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          {admin ? "Operations" : "Workspace"}
        </p>

        <nav className="space-y-1.5">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.label}
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
      </div>

      <div className="mt-auto p-4">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
          <p className="text-sm font-semibold text-slate-900">
            {admin ? "Need a quick review?" : "Ready for the next step?"}
          </p>
          <p className="mt-2 text-xs leading-6 text-slate-600">
            {admin
              ? "Check pending applications, proof uploads, and internal notes faster."
              : "Upload your latest resume, review job matches, and track assistant progress."}
          </p>

          <Link
            href={admin ? "/admin/applications" : "/dashboard"}
            className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            {admin ? "Review queue" : "Open dashboard"}
          </Link>
        </div>
      </div>
    </aside>
  );
}
