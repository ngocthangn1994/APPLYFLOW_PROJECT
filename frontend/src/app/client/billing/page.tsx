import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/client/dashboard", label: "Dashboard" },
  { href: "/client/jobs", label: "Jobs" },
  { href: "/client/inbox", label: "Inbox" },
  { href: "/client/inbox/chat", label: "Team Chat" },
  { href: "/client/resumes", label: "Resumes & More" },
  { href: "/client/plans", label: "Plans" },
  { href: "/client/billing", label: "Billing" },
  { href: "/client/account", label: "Account" },
];

const billingStats = [
  { label: "Current plan", value: "Premium", subtext: "$299 / month" },
  { label: "Next invoice", value: "Apr 28", subtext: "Auto-renew enabled" },
  {
    label: "Credits left",
    value: "42",
    subtext: "Application actions remaining",
  },
  { label: "Invoices paid", value: "8", subtext: "No failed payments" },
];

const invoices = [
  {
    id: "INV-2026-041",
    date: "Apr 01, 2026",
    amount: "$299.00",
    status: "Paid",
    method: "Visa ending in 4242",
  },
  {
    id: "INV-2026-032",
    date: "Mar 01, 2026",
    amount: "$299.00",
    status: "Paid",
    method: "Visa ending in 4242",
  },
  {
    id: "INV-2026-021",
    date: "Feb 01, 2026",
    amount: "$199.00",
    status: "Paid",
    method: "Visa ending in 4242",
  },
];

const plans = [
  {
    name: "AI Basic",
    price: "$29/mo",
    description: "Resume analysis, job matching, and document suggestions.",
    active: false,
  },
  {
    name: "Human Assistant Starter",
    price: "$99/mo",
    description: "Light assistant support for targeted applications.",
    active: false,
  },
  {
    name: "Human Assistant Growth",
    price: "$199/mo",
    description:
      "More application support, more document help, faster turnaround.",
    active: false,
  },
  {
    name: "Human Assistant Premium",
    price: "$299/mo",
    description:
      "Priority assistant support, deeper reporting, and stronger coverage.",
    active: true,
  },
];

function getInvoiceStatusClasses(status: string) {
  switch (status) {
    case "Paid":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Pending":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Failed":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Billing" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Billing center
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Billing
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage your subscription, review invoices, and keep your
                assistant support package active without interruption.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Download invoices
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Update payment method
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Current subscription
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your current assistant support package and renewal settings.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Active plan
                </span>
              </div>

              <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Human Assistant Premium
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600">
                      Priority support, faster turnaround, richer reporting, and
                      direct assistant collaboration for your job application
                      workflow.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Priority assistant support",
                        "Proof tracking",
                        "Document generation",
                        "Faster response time",
                      ].map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Monthly total</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      $299
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Renews on Apr 28, 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Invoice history
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Review past payments and download billing records.
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-4 py-3 font-medium">Invoice</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Method</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {invoices.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/70">
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {item.id}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.date}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.amount}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">
                          {item.method}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getInvoiceStatusClasses(
                              item.status,
                            )}`}
                          >
                            {item.status}
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
                Available plans
              </h3>
              <div className="mt-4 space-y-3">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-2xl border p-4 ${
                      plan.active
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">
                          {plan.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {plan.description}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-slate-900">
                        {plan.price}
                      </span>
                    </div>

                    {plan.active && (
                      <div className="mt-3">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
                          Current plan
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Billing actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Change plan
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Download latest invoice
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Pause subscription
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Manage payment method
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Billing note
              </h3>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Your current plan includes priority assistant support and
                application proof tracking. Plan changes usually take effect on
                the next billing cycle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
