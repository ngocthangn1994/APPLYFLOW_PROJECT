const evidenceStats = [
  { label: "Proof uploads", value: "18", subtext: "4 added this week" },
  { label: "Verified", value: "12", subtext: "Approved by team" },
  { label: "Pending review", value: "4", subtext: "Waiting for check" },
  { label: "Missing proof", value: "2", subtext: "Needs assistant follow-up" },
];

const evidenceItems = [
  {
    company: "Notion",
    role: "Product Designer",
    file: "notion-confirmation.pdf",
    type: "PDF",
    uploadedBy: "Emma Wilson",
    status: "Verified",
    uploadedAt: "Today, 9:24 AM",
  },
  {
    company: "Stripe",
    role: "Frontend Engineer",
    file: "stripe-application-proof.png",
    type: "Image",
    uploadedBy: "You",
    status: "Pending Review",
    uploadedAt: "Yesterday, 3:10 PM",
  },
  {
    company: "Ramp",
    role: "Software Engineer",
    file: "ramp-submission-proof.pdf",
    type: "PDF",
    uploadedBy: "Emma Wilson",
    status: "Needs Update",
    uploadedAt: "Yesterday, 11:40 AM",
  },
  {
    company: "Figma",
    role: "Product Designer",
    file: "figma-submission-confirmation.pdf",
    type: "PDF",
    uploadedBy: "Emma Wilson",
    status: "Verified",
    uploadedAt: "Apr 13, 2026",
  },
];

const activityFeed = [
  {
    title: "Notion proof verified",
    description:
      "Your latest assistant-submitted application proof has been approved.",
    time: "Today, 10:02 AM",
  },
  {
    title: "Stripe upload received",
    description: "A screenshot proof was added and is waiting for review.",
    time: "Yesterday, 3:18 PM",
  },
  {
    title: "Ramp proof needs update",
    description:
      "The uploaded file is missing a visible confirmation timestamp.",
    time: "Yesterday, 12:05 PM",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Verified":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Pending Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Needs Update":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getTypeClasses(type: string) {
  switch (type) {
    case "PDF":
      return "bg-slate-100 text-slate-700";
    case "Image":
      return "bg-sky-100 text-sky-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">
              Application proof
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Evidence
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Review uploaded proof files for your job applications, track
              review status, and make sure each submission has clear
              confirmation attached.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Download all
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Upload proof
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {evidenceStats.map((item) => (
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
                Evidence library
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Every uploaded proof file connected to your application
                workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search company, role, file..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All statuses</option>
                <option>Verified</option>
                <option>Pending Review</option>
                <option>Needs Update</option>
              </select>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Role</th>
                  <th className="px-4 py-3 font-medium">File</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Uploaded By</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Uploaded</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {evidenceItems.map((item) => (
                  <tr
                    key={`${item.company}-${item.file}`}
                    className="hover:bg-slate-50/70"
                  >
                    <td className="px-4 py-4 font-semibold text-slate-900">
                      {item.company}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.role}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.file}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getTypeClasses(item.type)}`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      {item.uploadedBy}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-500">
                      {item.uploadedAt}
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
              Recent evidence updates
            </h3>
            <div className="mt-4 space-y-4">
              {activityFeed.map((item) => (
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
              Review progress
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Verified proof</span>
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
                  <span className="text-sm text-slate-600">Pending review</span>
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
                  <span className="text-sm text-slate-600">Needs revision</span>
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
                View all verified files
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Check pending uploads
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Upload new evidence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
