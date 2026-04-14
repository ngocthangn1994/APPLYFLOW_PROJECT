import { applicationRows, trustMetrics } from "@/mock/data";

const quickActions = [
  {
    title: "Review job matches",
    description:
      "See the strongest roles matched to your resume and preferences.",
    cta: "Open matches",
  },
  {
    title: "Upload fresh resume",
    description:
      "Keep your latest experience ready for AI analysis and assistants.",
    cta: "Manage resume",
  },
  {
    title: "Check assistant updates",
    description: "Stay on top of progress, blockers, and application requests.",
    cta: "Open messages",
  },
];

const timeline = [
  {
    title: "Application submitted to Notion",
    description: "Your assistant completed the submission and attached proof.",
    time: "Today, 9:24 AM",
  },
  {
    title: "Resume analysis refreshed",
    description: "New keyword suggestions were added to improve job matching.",
    time: "Yesterday, 6:10 PM",
  },
  {
    title: "New high-fit match found",
    description:
      "A remote product design role was added to your recommendations.",
    time: "Yesterday, 2:35 PM",
  },
];

function getStatusClasses(status: string) {
  const value = status.toLowerCase();

  if (value.includes("interview")) {
    return "bg-sky-100 text-sky-700 border border-sky-200";
  }

  if (value.includes("applied") || value.includes("submitted")) {
    return "bg-emerald-100 text-emerald-700 border border-emerald-200";
  }

  if (value.includes("review") || value.includes("progress")) {
    return "bg-amber-100 text-amber-700 border border-amber-200";
  }

  if (value.includes("blocked") || value.includes("need")) {
    return "bg-rose-100 text-rose-700 border border-rose-200";
  }

  return "bg-slate-100 text-slate-700 border border-slate-200";
}

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Client workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Dashboard overview
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Follow your job search progress, assistant activity, resume
              insights, and application performance from one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              View plan
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Hire a human assistant
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{metric.label}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {metric.value}
            </h2>
            <p className="mt-2 text-sm text-emerald-600">
              Updated from your latest activity
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Progress snapshot
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your account readiness and active support status.
                </p>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Premium workflow active
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Assigned assistant</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                  Maya R. · Senior Concierge
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Managing delegated roles, proof uploads, and follow-up steps.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Profile completion</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">96%</p>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[96%] rounded-full bg-emerald-600" />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Your profile is ready for matching and assistant-supported
                  applications.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Recent applications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  The latest jobs you or your assistant moved forward.
                </p>
              </div>

              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View all applications
              </button>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr className="text-left text-sm text-slate-500">
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {applicationRows.map((row) => (
                    <tr
                      key={`${row.company}-${row.role}`}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4 font-semibold text-slate-900">
                        {row.company}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {row.role}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            row.status,
                          )}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Quick actions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Jump into the most important parts of your workflow.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {quickActions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100">
                    {item.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              AI resume summary
            </h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm leading-7 text-slate-600">
                Your current profile aligns best with product-focused roles,
                remote and hybrid opportunities, and positions that value strong
                communication, portfolio depth, and cross-functional execution.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Product Design",
                  "Design Systems",
                  "Figma",
                  "Remote Roles",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
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
              Health overview
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Application momentum
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    72%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[72%] rounded-full bg-emerald-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Match quality</span>
                  <span className="text-sm font-semibold text-slate-900">
                    84%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[84%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    Document readiness
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
        </div>
      </div>
    </div>
  );
}
