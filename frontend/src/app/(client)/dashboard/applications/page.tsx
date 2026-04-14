const applicationStats = [
  { label: "Applied jobs", value: "24", subtext: "+3 this week" },
  {
    label: "In progress",
    value: "8",
    subtext: "Assistant preparing submissions",
  },
  { label: "Interviews", value: "4", subtext: "Strong momentum" },
  { label: "Response rate", value: "18%", subtext: "Above last month" },
];

const applicationItems = [
  {
    company: "Notion",
    role: "Product Designer",
    location: "Remote",
    status: "Applied",
    submittedAt: "Today, 9:24 AM",
    method: "Assistant",
    matchScore: "92%",
  },
  {
    company: "Stripe",
    role: "Frontend Engineer",
    location: "San Francisco, CA",
    status: "In Review",
    submittedAt: "Yesterday, 3:10 PM",
    method: "Myself",
    matchScore: "88%",
  },
  {
    company: "Ramp",
    role: "Software Engineer",
    location: "New York, NY",
    status: "Needs Info",
    submittedAt: "Yesterday, 11:40 AM",
    method: "Assistant",
    matchScore: "84%",
  },
  {
    company: "Figma",
    role: "Product Designer",
    location: "Remote / Hybrid",
    status: "Interview",
    submittedAt: "Apr 13, 2026",
    method: "Assistant",
    matchScore: "90%",
  },
];

const timeline = [
  {
    title: "Application submitted to Notion",
    description: "Your assistant completed the submission and uploaded proof.",
    time: "Today, 9:24 AM",
  },
  {
    title: "Interview update from Figma",
    description:
      "A recruiter response was detected in your inbox and linked to this application.",
    time: "Yesterday, 6:10 PM",
  },
  {
    title: "More info requested for Ramp",
    description:
      "The application needs work authorization clarification before submission.",
    time: "Yesterday, 11:40 AM",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Applied":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Interview":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "In Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Needs Info":
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
              Application tracker
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Applications
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Track every job you or your assistant applied to, review current
              status, and follow important updates in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Export CSV
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Add application
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

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Application history
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Review submitted jobs, outcomes, and applications that still
                need your input.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search company or role..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All statuses</option>
                <option>Applied</option>
                <option>In Review</option>
                <option>Needs Info</option>
                <option>Interview</option>
              </select>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Match</th>
                  <th className="px-4 py-3 font-medium">Method</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Submitted</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {applicationItems.map((item) => (
                  <tr
                    key={`${item.company}-${item.role}`}
                    className="hover:bg-slate-50/70"
                  >
                    <td className="px-4 py-4 font-semibold text-slate-900">
                      {item.company}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.role}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.location}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-emerald-700">
                      {item.matchScore}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {item.method}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">
                      {item.submittedAt}
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
              Recent updates
            </h3>
            <div className="mt-4 space-y-4">
              {timeline.map((item) => (
                <div
                  key={`${item.title}-${item.time}`}
                  className="rounded-2xl bg-slate-50 p-4"
                >
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-500">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Application health
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Completed submissions
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    67%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[67%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Waiting on review
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    22%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[22%] rounded-full bg-amber-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Needs your input
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    11%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[11%] rounded-full bg-rose-500" />
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
                View delegated jobs
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Check uploaded proof
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Start new application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
