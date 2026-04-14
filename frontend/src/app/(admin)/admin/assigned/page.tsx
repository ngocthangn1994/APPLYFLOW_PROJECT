const assignedStats = [
  { label: "Assigned clients", value: "48", subtext: "6 added this week" },
  { label: "Active assistants", value: "14", subtext: "2 near capacity" },
  { label: "Urgent handoffs", value: "7", subtext: "Review today" },
  { label: "Avg. workload", value: "86%", subtext: "Healthy but rising" },
];

const assignedClients = [
  {
    client: "Olivia Bennett",
    assistant: "Emma Wilson",
    plan: "Premium",
    targetRole: "Product Designer",
    status: "Healthy",
    jobs: 18,
    updated: "10 min ago",
  },
  {
    client: "Daniel Kim",
    assistant: "David Chen",
    plan: "Growth",
    targetRole: "Frontend Engineer",
    status: "Needs Review",
    jobs: 11,
    updated: "28 min ago",
  },
  {
    client: "Mia Rodriguez",
    assistant: "Sophia Lee",
    plan: "Starter",
    targetRole: "Operations Analyst",
    status: "Waiting Client",
    jobs: 6,
    updated: "1 hour ago",
  },
  {
    client: "Noah Patel",
    assistant: "James Brooks",
    plan: "Premium",
    targetRole: "Software Engineer",
    status: "Healthy",
    jobs: 22,
    updated: "2 hours ago",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Healthy":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Needs Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Waiting Client":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Admin workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Assigned
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Track assistant assignments, balance team capacity, and make sure
              each client has the right support for their application workflow.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Capacity Report
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Assign Client
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {assignedStats.map((item) => (
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
                Client assignments
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                See who is assigned, what they are working on, and where support
                may be needed.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search client or assistant..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All statuses</option>
                <option>Healthy</option>
                <option>Needs Review</option>
                <option>Waiting Client</option>
              </select>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-3 font-medium">Client</th>
                  <th className="px-4 py-3 font-medium">Assistant</th>
                  <th className="px-4 py-3 font-medium">Target Role</th>
                  <th className="px-4 py-3 font-medium">Plan</th>
                  <th className="px-4 py-3 font-medium">Jobs</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assignedClients.map((item) => (
                  <tr
                    key={`${item.client}-${item.assistant}`}
                    className="hover:bg-slate-50/70"
                  >
                    <td className="px-4 py-4">
                      <p className="font-semibold text-slate-900">
                        {item.client}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.assistant}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.targetRole}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {item.plan}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.jobs}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">
                      {item.updated}
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
                  <span className="text-sm text-slate-600">Emma Wilson</span>
                  <span className="text-sm font-semibold text-slate-900">
                    92%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[92%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">David Chen</span>
                  <span className="text-sm font-semibold text-slate-900">
                    84%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[84%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Sophia Lee</span>
                  <span className="text-sm font-semibold text-slate-900">
                    61%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[61%] rounded-full bg-emerald-600" />
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
                Rebalance overloaded assistants before assigning new premium
                clients.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                Follow up on clients still missing required onboarding answers.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                Review blocked assignments to reduce delays in application
                delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
