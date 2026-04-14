import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/assistant/dashboard", label: "Dashboard" },
  { href: "/assistant/clients", label: "Assigned Clients" },
  { href: "/assistant/jobs", label: "Delegated Jobs" },
  { href: "/assistant/tasks", label: "Tasks" },
  { href: "/assistant/chat", label: "Team Chat" },
  { href: "/assistant/reports", label: "Reports" },
];

const stats = [
  { label: "Active clients", value: "12", subtext: "3 premium accounts" },
  { label: "Pending delegated", value: "18", subtext: "Need action today" },
  { label: "Due today", value: "9", subtext: "Priority queue" },
  { label: "Blocked", value: "4", subtext: "Waiting on client input" },
];

const todayQueue = [
  {
    title: "Submit Notion application",
    client: "Olivia Bennett",
    detail:
      "Product Designer role with proof upload required after submission.",
    status: "High Priority",
  },
  {
    title: "Clarify sponsorship answer",
    client: "Daniel Kim",
    detail:
      "Need final confirmation before continuing with Stripe application.",
    status: "Needs Client Reply",
  },
  {
    title: "Review updated resume",
    client: "Mia Rodriguez",
    detail: "New resume version uploaded and ready for matching refresh.",
    status: "In Progress",
  },
];

const recentActivity = [
  {
    title: "Application proof uploaded",
    detail: "Notion confirmation file uploaded for Olivia Bennett.",
    time: "10:24 AM",
  },
  {
    title: "Client responded in chat",
    detail: "Daniel Kim answered location preference question.",
    time: "9:42 AM",
  },
  {
    title: "New delegated job added",
    detail: "Ramp Software Engineer role assigned to your queue.",
    time: "8:55 AM",
  },
  {
    title: "Task completed",
    detail: "Updated profile answers for Mia Rodriguez application flow.",
    time: "Yesterday",
  },
];

const performance = [
  {
    label: "Applications completed",
    value: "81%",
    width: "81%",
    bar: "bg-emerald-600",
  },
  {
    label: "Response speed",
    value: "88%",
    width: "88%",
    bar: "bg-sky-500",
  },
  {
    label: "Blocked workload",
    value: "14%",
    width: "14%",
    bar: "bg-amber-500",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "High Priority":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    case "Needs Client Reply":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "In Progress":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Assistant Dashboard" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Assistant workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Stay on top of delegated jobs, active client needs, urgent
                follow-ups, and today’s support workload from one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                View full queue
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Start daily workflow
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
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
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Today’s queue
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    The most important actions to move client applications
                    forward.
                  </p>
                </div>

                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  View tasks
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {todayQueue.map((item) => (
                  <div
                    key={`${item.title}-${item.client}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">
                          {item.client}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {item.detail}
                        </p>
                      </div>

                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                          item.status,
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Work summary
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                A quick view of the current support workflow across your
                clients.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Applications in progress
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">18</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Proof uploads pending
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">6</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Client replies needed
                  </p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">4</p>
                </div>
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
                Performance
              </h3>
              <div className="mt-4 space-y-4">
                {performance.map((item) => (
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
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open delegated jobs
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Message clients
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Start priority queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
