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

const planStats = [
  { label: "Active plans", value: "4", subtext: "All live and selectable" },
  {
    label: "Most popular",
    value: "Growth",
    subtext: "Highest active subscriptions",
  },
  { label: "Premium upgrades", value: "28", subtext: "This month" },
  { label: "Plan changes", value: "19", subtext: "7 pending next cycle" },
];

const plans = [
  {
    name: "AI Basic",
    price: "$29/mo",
    applications: "Self-serve",
    support: "AI tools only",
    docs: "Limited generation",
    status: "Active",
    popularity: "Entry",
  },
  {
    name: "Human Assistant Starter",
    price: "$99/mo",
    applications: "Up to 20",
    support: "Light assistant support",
    docs: "Resume + letter support",
    status: "Active",
    popularity: "Growing",
  },
  {
    name: "Human Assistant Growth",
    price: "$199/mo",
    applications: "Up to 50",
    support: "Dedicated workflow help",
    docs: "Priority generation",
    status: "Most Popular",
    popularity: "Top choice",
  },
  {
    name: "Human Assistant Premium",
    price: "$299/mo",
    applications: "Priority coverage",
    support: "Priority assistant",
    docs: "Advanced reporting + proof",
    status: "Active",
    popularity: "High value",
  },
];

const planNotes = [
  {
    title: "Growth remains strongest",
    description:
      "The Growth tier continues to lead in new subscriptions and upgrade conversions.",
  },
  {
    title: "Premium attracts assistant-heavy users",
    description:
      "Clients needing deeper reporting and faster support are choosing Premium more often.",
  },
  {
    title: "AI Basic supports entry funnel",
    description:
      "The lower-cost plan still helps bring in users before they upgrade to assistant support.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Most Popular":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Active":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Draft":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin plans" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Plans
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage pricing tiers, assistant support packages, and the plan
                structure clients choose during onboarding and billing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export pricing
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Create new plan
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {planStats.map((item) => (
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
                    Plan catalog
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Compare active offerings, support depth, and package
                    structure.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search plan name..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                  />
                  <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                    <option>All statuses</option>
                    <option>Active</option>
                    <option>Most Popular</option>
                    <option>Draft</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Plan</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium">Applications</th>
                      <th className="px-4 py-3 font-medium">Support</th>
                      <th className="px-4 py-3 font-medium">Docs</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {plans.map((plan) => (
                      <tr key={plan.name} className="hover:bg-slate-50/70">
                        <td className="px-4 py-4">
                          <div>
                            <p className="font-semibold text-slate-900">
                              {plan.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {plan.popularity}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                          {plan.price}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {plan.applications}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {plan.support}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {plan.docs}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              plan.status,
                            )}`}
                          >
                            {plan.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={`${plan.name}-card`}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {plan.price}
                      </p>
                    </div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                        plan.status,
                      )}`}
                    >
                      {plan.status}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <p>Applications: {plan.applications}</p>
                    <p>Support: {plan.support}</p>
                    <p>Documents: {plan.docs}</p>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                      Edit
                    </button>
                    <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Plan performance
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Growth adoption
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      41%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[41%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Premium upgrades
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      27%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[27%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      AI Basic funnel
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      19%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[19%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Plan insights
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {planNotes.map((item) => (
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
                  Edit pricing tiers
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review upgrade flow
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Create promotional badge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
