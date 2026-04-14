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

const summaryStats = [
  { label: "Total users", value: "1,482", subtext: "+46 this month" },
  { label: "Active clients", value: "312", subtext: "27 onboarding now" },
  { label: "Assistant utilization", value: "86%", subtext: "2 near capacity" },
  { label: "Revenue", value: "$48,240", subtext: "+9.4% vs last month" },
];

const priorityItems = [
  {
    title: "Onboarding bottlenecks",
    description:
      "8 clients are still missing resume uploads or questionnaire answers before assignment can move forward.",
    tag: "Needs review",
  },
  {
    title: "Assistant capacity watch",
    description:
      "Emma Wilson and David Chen are both above 85% workload and may need task rebalancing.",
    tag: "Capacity",
  },
  {
    title: "Evidence follow-up",
    description:
      "22 proof uploads are waiting for verification across premium application workflows.",
    tag: "Pending",
  },
];

const recentActivity = [
  {
    title: "New premium client assigned",
    detail:
      "Olivia Bennett was matched with Emma Wilson for application support.",
    time: "10 minutes ago",
  },
  {
    title: "Application proof uploaded",
    detail: "Stripe frontend application evidence was added by David Chen.",
    time: "28 minutes ago",
  },
  {
    title: "Client questionnaire updated",
    detail: "Daniel Kim changed salary target and remote preference.",
    time: "1 hour ago",
  },
  {
    title: "Flagged note created",
    detail: "Admin note added for missing sponsorship clarification.",
    time: "2 hours ago",
  },
];

const moduleCards = [
  {
    title: "Clients",
    description:
      "Track onboarding, assignments, plans, and target job preferences.",
  },
  {
    title: "Applications",
    description:
      "Monitor submitted applications, blocked items, and review queue health.",
  },
  {
    title: "Evidence",
    description: "Verify proof files, screenshots, PDFs, and submission logs.",
  },
  {
    title: "Notes",
    description:
      "Keep internal context, escalations, and follow-up items organized.",
  },
];

export default function Page() {
  return (
    <AppShell title="Admin Overview" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Operations overview
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Admin dashboard
              </h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">
                Monitor client progress, manage assistant workload, and maintain
                evidence-backed application workflows across the platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export summary
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Review urgent items
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryStats.map((item) => (
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
          <div className="space-y-6 xl:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Priority queue
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Important issues that may slow down applications or client
                delivery.
              </p>

              <div className="mt-5 grid gap-4">
                {priorityItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Core admin modules
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Quick view of the main operational areas in ApplyFlow admin.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {moduleCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-200 hover:bg-white"
                  >
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Recent activity
              </h3>
              <div className="mt-4 space-y-4">
                {recentActivity.map((item) => (
                  <div
                    key={`${item.title}-${item.time}`}
                    className="rounded-2xl bg-slate-50 p-4"
                  >
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                    <p className="mt-3 text-xs font-medium text-slate-500">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Operations health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Client onboarding completion
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      71%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[71%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Assistant workload
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      86%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[86%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Evidence verification
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      80%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[80%] rounded-full bg-emerald-600" />
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
                  Assign assistant
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review blocked applications
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open pending evidence
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Create admin note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
