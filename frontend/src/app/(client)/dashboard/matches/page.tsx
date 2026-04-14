const matchStats = [
  { label: "Matched jobs", value: "64", subtext: "12 new this week" },
  { label: "High-fit roles", value: "18", subtext: "90%+ match score" },
  { label: "Saved matches", value: "11", subtext: "Ready to revisit" },
  { label: "Delegated", value: "9", subtext: "Sent to assistant" },
];

const matchItems = [
  {
    company: "Notion",
    role: "Product Designer",
    location: "Remote",
    remoteType: "Remote",
    matchScore: "92%",
    salary: "$130k - $155k",
    matchedSkills: ["Figma", "Design Systems", "UX Research"],
    status: "Best Fit",
  },
  {
    company: "Stripe",
    role: "Frontend Engineer",
    location: "San Francisco, CA",
    remoteType: "Hybrid",
    matchScore: "88%",
    salary: "$145k - $170k",
    matchedSkills: ["React", "TypeScript", "Frontend Architecture"],
    status: "Strong Match",
  },
  {
    company: "Ramp",
    role: "Software Engineer",
    location: "New York, NY",
    remoteType: "Onsite",
    matchScore: "84%",
    salary: "$140k - $165k",
    matchedSkills: ["JavaScript", "Node.js", "APIs"],
    status: "Review",
  },
  {
    company: "Figma",
    role: "Product Designer",
    location: "Remote / Hybrid",
    remoteType: "Hybrid",
    matchScore: "90%",
    salary: "$135k - $160k",
    matchedSkills: ["Visual Design", "Prototyping", "Design Systems"],
    status: "Best Fit",
  },
];

const fitSignals = [
  {
    title: "Resume alignment",
    description:
      "Your uploaded resume matches strongly with design systems, frontend, and product-focused roles.",
  },
  {
    title: "Preference match",
    description:
      "Most top matches align with your remote and hybrid work preference settings.",
  },
  {
    title: "Salary compatibility",
    description:
      "Several recommended roles fall inside your selected compensation range.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Best Fit":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Strong Match":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
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
              AI job matching
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Matches
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Explore jobs that best fit your resume, onboarding answers, and
              work preferences. Save them, delegate them, or apply when ready.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Refresh matches
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Export list
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {matchStats.map((item) => (
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
                Recommended roles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Best-fit jobs based on your resume analysis and target
                preferences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search company or title..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All match levels</option>
                <option>Best Fit</option>
                <option>Strong Match</option>
                <option>Review</option>
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {matchItems.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.role}
                      </h3>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                      {item.company} • {item.location} • {item.remoteType}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.matchedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-[180px] rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Match score</p>
                    <p className="mt-2 text-3xl font-bold text-emerald-700">
                      {item.matchScore}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{item.salary}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Save job
                  </button>
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Delegate to assistant
                  </button>
                  <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Why these matches
            </h3>
            <div className="mt-4 space-y-4">
              {fitSignals.map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Match distribution
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Best fit roles</span>
                  <span className="text-sm font-semibold text-slate-900">
                    28%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[28%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Strong matches</span>
                  <span className="text-sm font-semibold text-slate-900">
                    47%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[47%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Needs review</span>
                  <span className="text-sm font-semibold text-slate-900">
                    25%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[25%] rounded-full bg-amber-500" />
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
                View saved jobs
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Review delegated roles
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Refresh recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
