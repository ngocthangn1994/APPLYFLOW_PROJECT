import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/assistant/dashboard", label: "Dashboard" },
  { href: "/assistant/clients", label: "Assigned Clients" },
  { href: "/assistant/jobs", label: "Delegated Jobs" },
  { href: "/assistant/tasks", label: "Tasks" },
  { href: "/assistant/chat", label: "Team Chat" },
  { href: "/assistant/reports", label: "Reports" },
];

const jobStats = [
  { label: "Delegated jobs", value: "18", subtext: "7 need action today" },
  { label: "In progress", value: "9", subtext: "Applications being prepared" },
  { label: "Applied", value: "6", subtext: "Proof uploaded" },
  { label: "Blocked", value: "3", subtext: "Waiting on client input" },
];

const delegatedJobs = [
  {
    client: "Olivia Bennett",
    company: "Notion",
    role: "Product Designer",
    match: "92%",
    status: "In Progress",
    priority: "High",
    updatedAt: "10:24 AM",
  },
  {
    client: "Daniel Kim",
    company: "Stripe",
    role: "Frontend Engineer",
    match: "88%",
    status: "Blocked",
    priority: "High",
    updatedAt: "9:42 AM",
  },
  {
    client: "Mia Rodriguez",
    company: "Ramp",
    role: "Operations Analyst",
    match: "84%",
    status: "Applied",
    priority: "Medium",
    updatedAt: "Yesterday",
  },
  {
    client: "Noah Patel",
    company: "Figma",
    role: "Software Engineer",
    match: "90%",
    status: "New",
    priority: "Medium",
    updatedAt: "Yesterday",
  },
];

const workflowNotes = [
  {
    title: "Prioritize high-fit jobs first",
    description:
      "Move quickly on roles with strong match scores and complete client information.",
  },
  {
    title: "Resolve blockers early",
    description:
      "Sponsorship, location, and missing resume details are the most common delays.",
  },
  {
    title: "Upload proof immediately",
    description:
      "After each application, add confirmation screenshots or PDFs to keep records complete.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Applied":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Blocked":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    case "New":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getPriorityClasses(priority: string) {
  switch (priority) {
    case "High":
      return "bg-rose-100 text-rose-700";
    case "Medium":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <AppShell title="Assistant Jobs" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Assistant workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Delegated Jobs
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage assigned job opportunities, track application progress,
                resolve blockers, and keep client workflows moving efficiently.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export queue
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Open priority jobs
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {jobStats.map((item) => (
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
                  Delegated job queue
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Review assigned roles, job match strength, and the current
                  workflow stage.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search client, company, role..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All statuses</option>
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Applied</option>
                  <option>Blocked</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Client</th>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Match</th>
                    <th className="px-4 py-3 font-medium">Priority</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {delegatedJobs.map((job) => (
                    <tr
                      key={`${job.client}-${job.company}-${job.role}`}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {job.client}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {job.company}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {job.role}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-emerald-700">
                        {job.match}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityClasses(
                            job.priority,
                          )}`}
                        >
                          {job.priority}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            job.status,
                          )}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {job.updatedAt}
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
                Queue health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Ready to apply
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      50%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[50%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">In progress</span>
                    <span className="text-sm font-semibold text-slate-900">
                      33%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[33%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Blocked</span>
                    <span className="text-sm font-semibold text-slate-900">
                      17%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[17%] rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Workflow notes
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {workflowNotes.map((item) => (
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
                  View blocked jobs
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Upload proof files
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Start next application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
