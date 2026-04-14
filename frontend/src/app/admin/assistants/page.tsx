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

const assistantStats = [
  { label: "Active assistants", value: "14", subtext: "2 near capacity" },
  { label: "Assigned clients", value: "48", subtext: "+6 this week" },
  { label: "Open tasks", value: "37", subtext: "11 due today" },
  { label: "Avg. completion", value: "91%", subtext: "Strong delivery rate" },
];

const assistants = [
  {
    name: "Emma Wilson",
    specialty: "Product / Design roles",
    clients: 9,
    workload: "92%",
    status: "Near Capacity",
    performance: "96%",
  },
  {
    name: "David Chen",
    specialty: "Frontend / Full-stack",
    clients: 7,
    workload: "84%",
    status: "Active",
    performance: "94%",
  },
  {
    name: "Sophia Lee",
    specialty: "Operations / Analyst roles",
    clients: 5,
    workload: "61%",
    status: "Available",
    performance: "89%",
  },
  {
    name: "James Brooks",
    specialty: "Engineering applications",
    clients: 6,
    workload: "74%",
    status: "Active",
    performance: "92%",
  },
];

const reminders = [
  {
    title: "Rebalance overloaded assistants",
    description:
      "Emma Wilson is above 90% workload and should be reviewed before new assignment.",
  },
  {
    title: "Track due-today items",
    description:
      "Several application proofs and client follow-ups need action before end of day.",
  },
  {
    title: "Review performance trends",
    description:
      "Use completion rate and blocked items to guide future client assignment decisions.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Available":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Active":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Near Capacity":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin assistants" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Assistants
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Monitor assistant capacity, specialties, client load, and
                delivery health across the job application workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export report
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Assign client
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {assistantStats.map((item) => (
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
                  Assistant roster
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Review specialties, workload, client count, and overall
                  performance.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search assistant or specialty..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All statuses</option>
                  <option>Available</option>
                  <option>Active</option>
                  <option>Near Capacity</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Assistant</th>
                    <th className="px-4 py-3 font-medium">Specialty</th>
                    <th className="px-4 py-3 font-medium">Clients</th>
                    <th className="px-4 py-3 font-medium">Workload</th>
                    <th className="px-4 py-3 font-medium">Performance</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {assistants.map((assistant) => (
                    <tr key={assistant.name} className="hover:bg-slate-50/70">
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {assistant.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {assistant.specialty}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {assistant.clients}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                        {assistant.workload}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-emerald-700">
                        {assistant.performance}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            assistant.status,
                          )}`}
                        >
                          {assistant.status}
                        </span>
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
                Capacity overview
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Overall team usage
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      78%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[78%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Due today coverage
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      69%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[69%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Blocked workload
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      12%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[12%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Admin reminders
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {reminders.map((item) => (
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
                  Reassign workload
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review blocked tasks
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Add new assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
