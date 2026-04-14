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

const billingStats = [
  {
    label: "Monthly revenue",
    value: "$48,240",
    subtext: "+9.4% from last month",
  },
  { label: "Active subscriptions", value: "214", subtext: "18 new this month" },
  { label: "Failed payments", value: "7", subtext: "Needs follow-up" },
  { label: "Refund requests", value: "3", subtext: "Pending review" },
];

const subscriptions = [
  {
    customer: "Olivia Bennett",
    plan: "Human Assistant Premium",
    amount: "$299/mo",
    status: "Active",
    renewal: "Apr 28, 2026",
    paymentMethod: "Visa •••• 4242",
  },
  {
    customer: "Daniel Kim",
    plan: "Human Assistant Growth",
    amount: "$199/mo",
    status: "Past Due",
    renewal: "Apr 20, 2026",
    paymentMethod: "Mastercard •••• 8811",
  },
  {
    customer: "Mia Rodriguez",
    plan: "AI Basic",
    amount: "$29/mo",
    status: "Active",
    renewal: "May 02, 2026",
    paymentMethod: "Visa •••• 9204",
  },
  {
    customer: "Noah Patel",
    plan: "Human Assistant Starter",
    amount: "$99/mo",
    status: "Canceled",
    renewal: "Ends Apr 18, 2026",
    paymentMethod: "Amex •••• 1022",
  },
];

const invoices = [
  {
    id: "INV-2026-411",
    customer: "Olivia Bennett",
    amount: "$299.00",
    status: "Paid",
    issued: "Apr 01, 2026",
  },
  {
    id: "INV-2026-412",
    customer: "Daniel Kim",
    amount: "$199.00",
    status: "Failed",
    issued: "Apr 03, 2026",
  },
  {
    id: "INV-2026-413",
    customer: "Mia Rodriguez",
    amount: "$29.00",
    status: "Paid",
    issued: "Apr 05, 2026",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
    case "Paid":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Past Due":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Failed":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    case "Canceled":
      return "bg-slate-100 text-slate-700 border border-slate-200";
    default:
      return "bg-sky-100 text-sky-700 border border-sky-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin billing" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Billing
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Monitor revenue, subscription health, invoices, and payment
                issues across all client plans and assistant support packages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export billing report
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Review failed payments
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {billingStats.map((item) => (
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
                    Subscriptions
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Review active plans, renewal dates, and payment method
                    status.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search customer or plan..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                  />
                  <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                    <option>All statuses</option>
                    <option>Active</option>
                    <option>Past Due</option>
                    <option>Canceled</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Plan</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Renewal</th>
                      <th className="px-4 py-3 font-medium">Method</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {subscriptions.map((sub) => (
                      <tr
                        key={`${sub.customer}-${sub.plan}`}
                        className="hover:bg-slate-50/70"
                      >
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {sub.customer}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {sub.plan}
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold text-slate-900">
                          {sub.amount}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {sub.renewal}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {sub.paymentMethod}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              sub.status,
                            )}`}
                          >
                            {sub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Recent invoices
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Latest invoice records across active subscriptions.
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Invoice</th>
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Issued</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-slate-50/70">
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {invoice.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {invoice.customer}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {invoice.amount}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {invoice.issued}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                              invoice.status,
                            )}`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Revenue health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Collection rate
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      94%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[94%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Failed payments
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      6%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[6%] rounded-full bg-rose-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Refund activity
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      2%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[2%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Billing alerts
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">
                    Past-due subscriptions
                  </p>
                  <p className="mt-2">
                    7 accounts need payment recovery before service
                    interruption.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">Refund queue</p>
                  <p className="mt-2">
                    3 refund requests are waiting for admin decision and
                    approval.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">Plan mix</p>
                  <p className="mt-2">
                    Premium and Growth plans continue to drive most recurring
                    revenue.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Review failed payments
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open refund requests
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Export billing report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
