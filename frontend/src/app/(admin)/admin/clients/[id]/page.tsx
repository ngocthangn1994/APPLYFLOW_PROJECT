const client = {
  name: "Olivia Bennett",
  email: "olivia.bennett@example.com",
  phone: "(555) 214-8891",
  location: "Austin, Texas",
  joinedAt: "April 12, 2026",
  plan: "Human Assistant Premium",
  assistant: "Emma Wilson",
  targetRole: "Senior Product Designer",
  workMode: "Remote / Hybrid",
  salary: "$120,000 - $145,000",
  authorization: "Authorized to work in the U.S.",
  sponsorship: "No sponsorship needed",
  onboardingStatus: "Completed",
  resumeStatus: "Analyzed",
  packageStatus: "Active",
};

const stats = [
  { label: "Saved jobs", value: "42" },
  { label: "Delegated jobs", value: "18" },
  { label: "Applications sent", value: "11" },
  { label: "Inbox alerts", value: "6" },
];

const timeline = [
  {
    title: "Resume analysis completed",
    description:
      "AI extracted product design skills, leadership experience, and target role alignment.",
    time: "Today, 9:10 AM",
  },
  {
    title: "Assistant assigned",
    description:
      "Emma Wilson was assigned to support premium application workflow.",
    time: "Yesterday, 4:20 PM",
  },
  {
    title: "Application answers updated",
    description:
      "Client confirmed salary range, locations, and remote preference.",
    time: "Yesterday, 1:05 PM",
  },
  {
    title: "Onboarding completed",
    description:
      "Questionnaire, resume upload, and package selection were completed.",
    time: "Apr 12, 2026",
  },
];

const delegatedJobs = [
  {
    company: "Notion",
    role: "Senior Product Designer",
    status: "In Progress",
    score: "92%",
    updated: "20 min ago",
  },
  {
    company: "Figma",
    role: "Product Designer",
    status: "Applied",
    score: "89%",
    updated: "2 hours ago",
  },
  {
    company: "Ramp",
    role: "Lead Designer",
    status: "Needs Client Input",
    score: "84%",
    updated: "Yesterday",
  },
];

const answers = [
  {
    label: "Work authorization",
    value: "Authorized to work in the United States",
  },
  { label: "Sponsorship", value: "No" },
  { label: "Open locations", value: "Austin, Houston, Dallas, Remote" },
  { label: "Relocation", value: "Yes, for strong opportunity" },
  { label: "Work preference", value: "Remote or hybrid" },
  { label: "Target salary", value: "$120,000 - $145,000" },
  {
    label: "Target titles",
    value: "Product Designer, Senior Product Designer, Design Systems Designer",
  },
  { label: "Earliest start date", value: "2 weeks notice" },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Applied":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Needs Client Input":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function ClientDetailPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Client detail
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {client.name}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Review profile summary, resume intelligence, onboarding answers,
              delegated jobs, and recent support activity for this client.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {client.plan}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {client.onboardingStatus}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {client.packageStatus}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              View Resume
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Open Chat
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Assign Action
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
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Profile summary
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.email}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.phone}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.location}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Joined
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.joinedAt}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Assigned assistant
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.assistant}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Target role
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.targetRole}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Work preference
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.workMode}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Salary target
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.salary}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Work authorization
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.authorization}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sponsorship
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  {client.sponsorship}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Delegated jobs
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Current jobs being reviewed, prepared, or submitted by the
                  assistant.
                </p>
              </div>
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View all
              </button>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Match</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {delegatedJobs.map((job) => (
                    <tr
                      key={`${job.company}-${job.role}`}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4 font-medium text-slate-900">
                        {job.company}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {job.role}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-emerald-700">
                        {job.score}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(job.status)}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-500">
                        {job.updated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Application answers
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Key onboarding answers assistants can use while completing
              applications.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {answers.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Resume intelligence
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Resume status</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {client.resumeStatus}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Top skill clusters</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Product Design",
                    "Design Systems",
                    "Figma",
                    "UX Research",
                    "Prototyping",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Best-fit roles</p>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <p>• Senior Product Designer</p>
                  <p>• Design Systems Designer</p>
                  <p>• UX/Product Design Lead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Recent activity
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
              Admin actions
            </h3>
            <div className="mt-4 space-y-3">
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Reassign assistant
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Review billing status
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Open evidence timeline
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Create admin note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
