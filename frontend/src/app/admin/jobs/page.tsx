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

const jobStats = [
  { label: "Live jobs", value: "1,842", subtext: "+64 this week" },
  { label: "High-match roles", value: "286", subtext: "90%+ fit score" },
  { label: "Delegated jobs", value: "118", subtext: "In active workflow" },
  { label: "Flagged listings", value: "12", subtext: "Needs moderation" },
];

const jobs = [
  {
    title: "Senior Product Designer",
    company: "Notion",
    location: "Remote",
    remoteType: "Remote",
    matchScore: "92%",
    status: "Live",
    source: "Imported",
    updatedAt: "Today, 10:18 AM",
  },
  {
    title: "Frontend Engineer",
    company: "Stripe",
    location: "San Francisco, CA",
    remoteType: "Hybrid",
    matchScore: "88%",
    status: "Delegated",
    source: "Imported",
    updatedAt: "Today, 8:42 AM",
  },
  {
    title: "Software Engineer",
    company: "Ramp",
    location: "New York, NY",
    remoteType: "Onsite",
    matchScore: "84%",
    status: "Flagged",
    source: "Manual",
    updatedAt: "Yesterday, 5:26 PM",
  },
  {
    title: "Design Systems Designer",
    company: "Figma",
    location: "Remote / Hybrid",
    remoteType: "Hybrid",
    matchScore: "90%",
    status: "Live",
    source: "Imported",
    updatedAt: "Yesterday, 2:11 PM",
  },
];

const moderationNotes = [
  {
    title: "Flagged job listings",
    description:
      "A small set of imported roles need review for duplicate records or incomplete descriptions.",
  },
  {
    title: "High-fit opportunities",
    description:
      "Remote design and frontend roles continue to rank highest for active premium clients.",
  },
  {
    title: "Delegation volume",
    description:
      "Delegated jobs are trending up as assistant-supported workflows become more active.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Live":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Delegated":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Flagged":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getSourceClasses(source: string) {
  switch (source) {
    case "Imported":
      return "bg-slate-100 text-slate-700";
    case "Manual":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin jobs" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Jobs
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Review imported roles, moderate flagged listings, and monitor
                job quality across AI matching and assistant-supported
                workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export jobs
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Import listings
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {jobStats.map((item) => (
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
                  Job library
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Browse job inventory, matching signals, delegation status, and
                  source quality.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Search title, company, location..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                  <option>All statuses</option>
                  <option>Live</option>
                  <option>Delegated</option>
                  <option>Flagged</option>
                </select>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Location</th>
                    <th className="px-4 py-3 font-medium">Work mode</th>
                    <th className="px-4 py-3 font-medium">Match</th>
                    <th className="px-4 py-3 font-medium">Source</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {jobs.map((job) => (
                    <tr
                      key={`${job.company}-${job.title}`}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {job.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {job.company}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {job.location}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {job.remoteType}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-emerald-700">
                        {job.matchScore}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${getSourceClasses(
                            job.source,
                          )}`}
                        >
                          {job.source}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            job.status,
                          )}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {job.updatedAt}
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
                Match distribution
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      High-fit roles
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      31%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[31%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Mid-range matches
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      49%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[49%] rounded-full bg-sky-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Needs review</span>
                    <span className="text-sm font-semibold text-slate-900">
                      20%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[20%] rounded-full bg-amber-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Moderation notes
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {moderationNotes.map((item) => (
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
                  Review flagged jobs
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Audit imported listings
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Import new jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
