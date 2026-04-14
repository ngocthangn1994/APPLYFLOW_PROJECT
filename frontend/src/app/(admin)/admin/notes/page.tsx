const notesStats = [
  { label: "Admin notes", value: "186", subtext: "+14 added this week" },
  { label: "Open follow-ups", value: "29", subtext: "Needs action soon" },
  { label: "Resolved items", value: "121", subtext: "Closed successfully" },
  { label: "Escalations", value: "7", subtext: "High priority" },
];

const notes = [
  {
    client: "Olivia Bennett",
    category: "Application Review",
    author: "Admin Team",
    priority: "High",
    status: "Open",
    note: "Client profile looks strong, but assistant should confirm portfolio links before sending more premium applications.",
    updatedAt: "Today, 9:40 AM",
  },
  {
    client: "Daniel Kim",
    category: "Onboarding",
    author: "Rachel Adams",
    priority: "Medium",
    status: "In Progress",
    note: "Still waiting for updated resume version with latest React project experience.",
    updatedAt: "Today, 8:15 AM",
  },
  {
    client: "Mia Rodriguez",
    category: "Billing",
    author: "Admin Team",
    priority: "Low",
    status: "Resolved",
    note: "Plan downgrade request was completed and client was notified through email.",
    updatedAt: "Yesterday, 4:22 PM",
  },
  {
    client: "Noah Patel",
    category: "Assistant Escalation",
    author: "Emma Wilson",
    priority: "High",
    status: "Open",
    note: "Client needs clarification on sponsorship question before assistant can continue with several applications.",
    updatedAt: "Yesterday, 1:08 PM",
  },
];

const reminders = [
  {
    title: "Review high-priority notes first",
    description:
      "Focus on notes blocking delegated jobs or premium client delivery.",
  },
  {
    title: "Close resolved follow-ups quickly",
    description:
      "Keep the notes queue clean so active issues stand out clearly.",
  },
  {
    title: "Audit repeated client blockers",
    description:
      "Recurring note themes may reveal onboarding gaps or assistant workflow issues.",
  },
];

function getPriorityClasses(priority: string) {
  switch (priority) {
    case "High":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    case "Medium":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

function getStatusClasses(status: string) {
  switch (status) {
    case "Resolved":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Open":
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
              Admin workspace
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Notes
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Track internal notes, follow-ups, escalations, and important
              context across clients, assistants, and application workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Export Notes
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              Create Note
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {notesStats.map((item) => (
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
                Internal note log
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                View recent admin notes, escalations, and important client
                updates.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search client, category, note..."
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-500">
                <option>All statuses</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {notes.map((item) => (
              <div
                key={`${item.client}-${item.updatedAt}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.client}
                      </h3>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.note}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPriorityClasses(item.priority)}`}
                    >
                      {item.priority}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                  <p>Author: {item.author}</p>
                  <p>Updated: {item.updatedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Status overview
            </h3>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Open notes</span>
                  <span className="text-sm font-semibold text-slate-900">
                    46%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[46%] rounded-full bg-amber-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">In progress</span>
                  <span className="text-sm font-semibold text-slate-900">
                    19%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[19%] rounded-full bg-sky-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Resolved</span>
                  <span className="text-sm font-semibold text-slate-900">
                    35%
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 w-[35%] rounded-full bg-emerald-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Admin reminders
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {reminders.map((item) => (
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
                Review open escalations
              </button>
              <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                Filter unresolved notes
              </button>
              <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                Add new admin note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
