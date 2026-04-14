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

const clientStats = [
  { label: "Total clients", value: "312", subtext: "+18 this month" },
  { label: "Active onboarding", value: "27", subtext: "8 need follow-up" },
  { label: "With assistant", value: "196", subtext: "63% assigned" },
  { label: "Premium plans", value: "124", subtext: "Strong upgrade rate" },
];

const clients = [
  {
    name: "Olivia Bennett",
    email: "olivia.bennett@example.com",
    plan: "Premium",
    onboarding: "Completed",
    assistant: "Emma Wilson",
    targetRole: "Product Designer",
    status: "Active",
    joined: "Apr 12, 2026",
  },
  {
    name: "Daniel Kim",
    email: "daniel.kim@example.com",
    plan: "Growth",
    onboarding: "In Progress",
    assistant: "David Chen",
    targetRole: "Frontend Engineer",
    status: "Needs Review",
    joined: "Apr 10, 2026",
  },
  {
    name: "Mia Rodriguez",
    email: "mia.rodriguez@example.com",
    plan: "Starter",
    onboarding: "Waiting Resume",
    assistant: "Unassigned",
    targetRole: "Operations Analyst",
    status: "Pending",
    joined: "Apr 09, 2026",
  },
  {
    name: "Noah Patel",
    email: "noah.patel@example.com",
    plan: "Premium",
    onboarding: "Completed",
    assistant: "Sophia Lee",
    targetRole: "Software Engineer",
    status: "Active",
    joined: "Apr 07, 2026",
  },
];

const onboardingSummary = [
  { label: "Completed", value: "71%", width: "71%", bar: "bg-emerald-600" },
  { label: "In progress", value: "19%", width: "19%", bar: "bg-amber-500" },
  {
    label: "Needs resume upload",
    value: "10%",
    width: "10%",
    bar: "bg-rose-500",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Needs Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Pending":
      return "bg-slate-100 text-slate-700 border border-slate-200";
    default:
      return "bg-sky-100 text-sky-700 border border-sky-200";
  }
}

function getOnboardingClasses(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-50 text-emerald-700";
    case "In Progress":
      return "bg-amber-50 text-amber-700";
    case "Waiting Resume":
      return "bg-rose-50 text-rose-700";
    default:
      return "bg-slate-50 text-slate-700";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin clients" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Clients
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Review client onboarding, plan status, assistant assignment, and
                job search readiness from one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export clients
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Add client
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
                  Client directory
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Monitor onboarding progress, assignment readiness, and plan
                  distribution.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search name, email, role..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All plans</option>
                  <option>Starter</option>
                  <option>Growth</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Client</th>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Onboarding</th>
                    <th className="px-4 py-3 font-medium">Assistant</th>
                    <th className="px-4 py-3 font-medium">Target Role</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Joined</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {clients.map((client) => (
                    <tr key={client.email} className="hover:bg-slate-50/70">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {client.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {client.email}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {client.plan}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getOnboardingClasses(
                            client.onboarding,
                          )}`}
                        >
                          {client.onboarding}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-700">
                        {client.assistant}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {client.targetRole}
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
                        {client.joined}
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
                Onboarding snapshot
              </h3>
              <div className="mt-4 space-y-4">
                {onboardingSummary.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        {item.value}
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-200">
                      <div
                        className={`h-2 rounded-full ${item.bar}`}
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Admin reminders
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Prioritize assigning assistants to new Growth and Premium
                  clients.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Follow up with clients who have not uploaded resumes yet.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Review accounts stuck in onboarding for more than 3 days.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Assign assistant
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review onboarding blockers
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Open client queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
