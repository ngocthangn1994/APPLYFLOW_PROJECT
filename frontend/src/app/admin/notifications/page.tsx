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

const notificationStats = [
  { label: "Sent today", value: "428", subtext: "Across email and in-app" },
  { label: "Queued", value: "36", subtext: "Waiting to dispatch" },
  { label: "Failed", value: "8", subtext: "Needs template or provider review" },
  { label: "Templates", value: "14", subtext: "3 updated this week" },
];

const notifications = [
  {
    type: "Assistant assigned",
    channel: "Email + In-app",
    audience: "Client",
    status: "Sent",
    updatedBy: "System",
    sentAt: "Today, 10:14 AM",
  },
  {
    type: "Application completed",
    channel: "In-app",
    audience: "Client",
    status: "Queued",
    updatedBy: "Emma Wilson",
    sentAt: "Today, 9:42 AM",
  },
  {
    type: "Billing reminder",
    channel: "Email",
    audience: "Client",
    status: "Failed",
    updatedBy: "System",
    sentAt: "Today, 8:18 AM",
  },
  {
    type: "Daily progress summary",
    channel: "Email + In-app",
    audience: "Client",
    status: "Sent",
    updatedBy: "System",
    sentAt: "Yesterday, 6:00 PM",
  },
];

const templateCards = [
  {
    title: "Workflow alerts",
    description:
      "Assistant assignment, application completed, missing client info, and escalation messages.",
  },
  {
    title: "Billing notices",
    description:
      "Invoice reminders, payment failures, renewal notices, and plan changes.",
  },
  {
    title: "Engagement updates",
    description:
      "Daily summaries, new match alerts, document-ready messages, and support announcements.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Sent":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Queued":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Failed":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin notifications" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Notifications
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage delivery status, monitor failed sends, and keep templates
                aligned with client, assistant, and billing workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export activity
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Create template
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {notificationStats.map((item) => (
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
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Notification activity
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Review recent sends, channel routing, and delivery status.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search type, audience, channel..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                  />
                  <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                    <option>All statuses</option>
                    <option>Sent</option>
                    <option>Queued</option>
                    <option>Failed</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 font-medium">Channel</th>
                      <th className="px-4 py-3 font-medium">Audience</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Updated By</th>
                      <th className="px-4 py-3 font-medium">Sent</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {notifications.map((item) => (
                      <tr
                        key={`${item.type}-${item.sentAt}`}
                        className="hover:bg-slate-50/70"
                      >
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {item.type}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.channel}
                        </td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            {item.audience}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              item.status,
                            )}`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.updatedBy}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-500">
                          {item.sentAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {templateCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Delivery health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Successful sends
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      89%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[89%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Queued</span>
                    <span className="text-sm font-semibold text-slate-900">
                      9%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[9%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Failures</span>
                    <span className="text-sm font-semibold text-slate-900">
                      2%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[2%] rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Notification reminders
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Review failed billing notices first because they can affect
                  renewals.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Keep assistant workflow alerts clear and short for better
                  client response.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Audit queued notifications regularly to avoid duplicate sends.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review failed sends
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Edit templates
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Send test notification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
