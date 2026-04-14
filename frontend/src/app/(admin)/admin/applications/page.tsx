const applicationStats = [
  { label: "Total applications", value: "1,284", subtext: "+12% this month" },
  { label: "In review", value: "326", subtext: "48 need attention" },
  { label: "Approved", value: "742", subtext: "Strong conversion" },
  { label: "Blocked", value: "41", subtext: "Missing documents" },
];

const applications = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer",
    company: "Vercel",
    status: "In Review",
    assistant: "Emma Wilson",
    submittedAt: "Today, 10:24 AM",
    plan: "Growth",
  },
  {
    name: "Michael Torres",
    role: "Backend Developer",
    company: "Stripe",
    status: "Approved",
    assistant: "David Kim",
    submittedAt: "Today, 8:10 AM",
    plan: "Premium",
  },
  {
    name: "Nina Patel",
    role: "Product Designer",
    company: "Notion",
    status: "Blocked",
    assistant: "Sophia Lee",
    submittedAt: "Yesterday, 4:42 PM",
    plan: "Starter",
  },
  {
    name: "James Carter",
    role: "Software Engineer",
    company: "Ramp",
    status: "Submitted",
    assistant: "Olivia Brown",
    submittedAt: "Yesterday, 1:15 PM",
    plan: "Growth",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Approved":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Blocked":
      return "bg-rose-100 text-rose-700 border border-rose-200";
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
              Applications
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Monitor submitted applications, review blocked cases, and keep
              assistant workflow moving without missing client updates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Export Report
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Review Queue
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {applicationStats.map((item) => (
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

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Recent applications
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              A quick view of the latest application activity across clients and
              assistants.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search applicant, company, role..."
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
            />
            <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
              <option>All statuses</option>
              <option>Submitted</option>
              <option>In Review</option>
              <option>Approved</option>
              <option>Blocked</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm text-slate-500">
                <th className="px-6 py-4 font-medium">Candidate</th>
                <th className="px-6 py-4 font-medium">Target Role</th>
                <th className="px-6 py-4 font-medium">Assistant</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Submitted</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {applications.map((app) => (
                <tr
                  key={`${app.name}-${app.company}`}
                  className="hover:bg-slate-50/70"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-slate-900">{app.name}</p>
                      <p className="text-sm text-slate-500">{app.company}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-700">
                    {app.role}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-700">
                    {app.assistant}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {app.plan}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(app.status)}`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {app.submittedAt}
                  </td>

                  <td className="px-6 py-4">
                    <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900">
            Queue highlights
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Needs follow-up</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">18</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Proof pending</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">9</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Escalations</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">4</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Admin notes</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-slate-50 p-4">
              3 blocked applications are waiting on visa clarification.
            </li>
            <li className="rounded-2xl bg-slate-50 p-4">
              Growth plan clients showed the highest approval trend this week.
            </li>
            <li className="rounded-2xl bg-slate-50 p-4">
              Review assistant workload before assigning new urgent
              applications.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
