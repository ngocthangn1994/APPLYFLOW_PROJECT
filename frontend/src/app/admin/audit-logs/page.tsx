import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/admin/overview", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/assistants", label: "Assistants" },
  { href: "/admin/jobs", label: "Jobs" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/plans", label: "Plans" },
  { href: "/admin/billing", label: "Billing" },
  { href: "/admin/chats", label: "Chats" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/notifications", label: "Notifications" },
  { href: "/admin/audit-logs", label: "Audit Logs" },
  { href: "/admin/settings", label: "Settings" },
];

const auditStats = [
  { label: "Total events", value: "4,284", subtext: "+126 today" },
  { label: "Security events", value: "38", subtext: "Needs monitoring" },
  { label: "Role changes", value: "12", subtext: "This week" },
  { label: "Failed actions", value: "9", subtext: "Review required" },
];

const auditRows = [
  {
    actor: "Rachel Adams",
    action: "Changed user role",
    target: "daniel.kim@example.com",
    module: "Users",
    status: "Success",
    time: "Today, 10:42 AM",
  },
  {
    actor: "System",
    action: "Password reset requested",
    target: "mia.rodriguez@example.com",
    module: "Security",
    status: "Logged",
    time: "Today, 9:18 AM",
  },
  {
    actor: "Emma Wilson",
    action: "Uploaded application proof",
    target: "Notion / Olivia Bennett",
    module: "Evidence",
    status: "Success",
    time: "Today, 8:54 AM",
  },
  {
    actor: "Admin Team",
    action: "Assistant reassigned",
    target: "Noah Patel",
    module: "Clients",
    status: "Warning",
    time: "Yesterday, 4:33 PM",
  },
  {
    actor: "System",
    action: "Login attempt blocked",
    target: "admin@applyflow.dev",
    module: "Security",
    status: "Blocked",
    time: "Yesterday, 1:12 PM",
  },
];

const auditHighlights = [
  {
    title: "Security watch",
    description:
      "Recent blocked login attempts and password reset activity should be reviewed for unusual patterns.",
  },
  {
    title: "Operational changes",
    description:
      "Role updates, assistant reassignments, and billing edits are the most sensitive actions today.",
  },
  {
    title: "Evidence chain",
    description:
      "Application proof uploads continue to generate the highest volume of workflow logs.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Success":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Logged":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Warning":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Blocked":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin audit-logs" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Audit Logs
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Review sensitive actions, security events, and operational
                changes across users, assistants, applications, and billing
                workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export logs
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Review alerts
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {auditStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {item.value}
              </h2>
              <p className="mt-2 text-sm text-emerald-600">{item.subtext}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Activity log
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Recent platform activity with actor, action, target, and
                  result.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search actor, module, target..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All statuses</option>
                  <option>Success</option>
                  <option>Logged</option>
                  <option>Warning</option>
                  <option>Blocked</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Actor</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                    <th className="px-4 py-3 font-medium">Target</th>
                    <th className="px-4 py-3 font-medium">Module</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Time</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {auditRows.map((row) => (
                    <tr
                      key={`${row.actor}-${row.action}-${row.time}`}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {row.actor}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {row.action}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {row.target}
                      </td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {row.module}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            row.status,
                          )}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Log highlights
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {auditHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Health overview
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Successful events
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      82%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[82%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Warnings</span>
                    <span className="text-sm font-semibold text-slate-900">
                      11%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[11%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Blocked actions
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      7%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[7%] rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Filter security events
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review failed actions
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Export audit report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
