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

const settingStats = [
  { label: "Active admins", value: "6", subtext: "2 online now" },
  { label: "Security rules", value: "12", subtext: "All enabled" },
  { label: "System alerts", value: "5", subtext: "1 needs review" },
  { label: "Config changes", value: "18", subtext: "This month" },
];

const systemSettings = [
  {
    title: "Authentication settings",
    description:
      "Control session policy, admin access rules, and password enforcement.",
    status: "Healthy",
  },
  {
    title: "Notification defaults",
    description:
      "Manage delivery behavior for in-app, email, and workflow alerts.",
    status: "Review",
  },
  {
    title: "Billing configuration",
    description:
      "Configure plan behavior, invoice defaults, and recovery settings.",
    status: "Healthy",
  },
  {
    title: "Content publishing rules",
    description:
      "Approve content workflow, draft review, and public release process.",
    status: "Healthy",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Healthy":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Warning":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin settings" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Settings
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage platform defaults, admin controls, security preferences,
                and system-wide operational settings for ApplyFlow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                View audit trail
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Save configuration
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {settingStats.map((item) => (
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
                System configuration
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Review key platform settings and their current operational
                state.
              </p>

              <div className="mt-5 grid gap-4">
                {systemSettings.map((item) => (
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

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Security preferences
                </h3>
                <div className="mt-5 space-y-4">
                  {[
                    "Require strong passwords",
                    "Enable admin session logging",
                    "Notify on suspicious login activity",
                    "Force logout on credential reset",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Enabled
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Platform defaults
                </h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Support email
                    </label>
                    <input
                      defaultValue="support@applyflow.dev"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Default timezone
                    </label>
                    <input
                      defaultValue="America/Chicago"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Notification digest time
                    </label>
                    <input
                      defaultValue="6:00 PM"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Operational controls
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Common settings used by admins to manage platform behavior.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  "Enable onboarding reminders",
                  "Auto-send daily progress notifications",
                  "Allow assistant reassignment alerts",
                  "Track content publishing changes",
                  "Flag failed billing retries",
                  "Log admin role updates",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                      On
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Configuration health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Security coverage
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      96%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[96%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Notification readiness
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      88%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[88%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Billing config
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      91%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[91%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Admin reminders
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Review notification defaults after changing billing or
                  onboarding flows.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Check audit logs after major admin configuration updates.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Keep support email and system defaults aligned with
                  public-facing pages.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review security settings
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open audit logs
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Save all changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
