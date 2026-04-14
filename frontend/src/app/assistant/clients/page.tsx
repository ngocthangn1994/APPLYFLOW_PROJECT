import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/assistant/dashboard", label: "Dashboard" },
  { href: "/assistant/clients", label: "Assigned Clients" },
  { href: "/assistant/jobs", label: "Delegated Jobs" },
  { href: "/assistant/tasks", label: "Tasks" },
  { href: "/assistant/chat", label: "Team Chat" },
  { href: "/assistant/reports", label: "Reports" },
];

const clientStats = [
  { label: "Assigned clients", value: "12", subtext: "3 premium accounts" },
  {
    label: "Needs follow-up",
    value: "5",
    subtext: "Missing input or documents",
  },
  { label: "Active applications", value: "34", subtext: "Across all clients" },
  { label: "Due today", value: "9", subtext: "Priority actions pending" },
];

const clients = [
  {
    name: "Olivia Bennett",
    plan: "Premium",
    targetRole: "Product Designer",
    onboarding: "Complete",
    status: "Healthy",
    jobs: 8,
    lastUpdate: "10:24 AM",
  },
  {
    name: "Daniel Kim",
    plan: "Growth",
    targetRole: "Frontend Engineer",
    onboarding: "Complete",
    status: "Needs Info",
    jobs: 6,
    lastUpdate: "9:42 AM",
  },
  {
    name: "Mia Rodriguez",
    plan: "Starter",
    targetRole: "Operations Analyst",
    onboarding: "Resume Updated",
    status: "In Progress",
    jobs: 4,
    lastUpdate: "Yesterday",
  },
  {
    name: "Noah Patel",
    plan: "Premium",
    targetRole: "Software Engineer",
    onboarding: "Complete",
    status: "Healthy",
    jobs: 7,
    lastUpdate: "Yesterday",
  },
];

const supportNotes = [
  {
    title: "High-priority premium clients",
    description:
      "Premium accounts need faster updates, proof tracking, and tighter follow-up timing.",
  },
  {
    title: "Missing client input",
    description:
      "A few workflows are blocked by sponsorship, location, or document clarification.",
  },
  {
    title: "Document readiness",
    description:
      "Most assigned clients already have resumes and answers ready for active applications.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Healthy":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Needs Info":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Assistant Clients" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Assistant workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Assigned Clients
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Track each assigned client, monitor readiness, and manage
                application support with clear visibility into status, tasks,
                and follow-ups.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export client list
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Open priority queue
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clientStats.map((item) => (
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
                  Client portfolio
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Review assigned accounts, job load, readiness, and recent
                  updates.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search client or role..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All statuses</option>
                  <option>Healthy</option>
                  <option>In Progress</option>
                  <option>Needs Info</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Client</th>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Target Role</th>
                    <th className="px-4 py-3 font-medium">Onboarding</th>
                    <th className="px-4 py-3 font-medium">Jobs</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {clients.map((client) => (
                    <tr key={client.name} className="hover:bg-slate-50/70">
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {client.name}
                      </td>
                      <td className="px-4 py-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {client.plan}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {client.targetRole}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {client.onboarding}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                        {client.jobs}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            client.status,
                          )}`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {client.lastUpdate}
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
                Workload health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Ready to apply
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      68%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[68%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Waiting client input
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      21%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[21%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Blocked</span>
                    <span className="text-sm font-semibold text-slate-900">
                      11%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[11%] rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Assistant notes
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {supportNotes.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open client chat
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review blocked accounts
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Start daily check-in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
