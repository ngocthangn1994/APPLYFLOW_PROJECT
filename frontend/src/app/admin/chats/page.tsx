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

const chatStats = [
  { label: "Active conversations", value: "86", subtext: "12 updated today" },
  { label: "Unread messages", value: "29", subtext: "Needs review" },
  { label: "Flagged chats", value: "4", subtext: "Escalated for admin" },
  {
    label: "Avg. response time",
    value: "18 min",
    subtext: "Healthy support pace",
  },
];

const chatThreads = [
  {
    name: "Olivia Bennett",
    counterpart: "Emma Wilson",
    preview:
      "I uploaded the Notion application proof and updated the status in your dashboard.",
    status: "Active",
    unread: 3,
    updatedAt: "10:24 AM",
  },
  {
    name: "Daniel Kim",
    counterpart: "David Chen",
    preview:
      "Need sponsorship clarification before moving forward with Stripe and Ramp.",
    status: "Needs Review",
    unread: 1,
    updatedAt: "9:42 AM",
  },
  {
    name: "Mia Rodriguez",
    counterpart: "Support Team",
    preview: "Billing downgrade confirmed and next cycle updated successfully.",
    status: "Resolved",
    unread: 0,
    updatedAt: "Yesterday",
  },
  {
    name: "Noah Patel",
    counterpart: "James Brooks",
    preview:
      "Please confirm whether onsite roles in Austin are still acceptable.",
    status: "Flagged",
    unread: 2,
    updatedAt: "Yesterday",
  },
];

const activeConversation = {
  title: "Olivia Bennett · Emma Wilson",
  subtitle: "Client + assistant thread",
  messages: [
    {
      sender: "Emma Wilson",
      text: "Hi Olivia, I completed the Notion application and attached the confirmation proof.",
      time: "9:58 AM",
      mine: false,
    },
    {
      sender: "Olivia Bennett",
      text: "Perfect. Please prioritize other remote product design roles next.",
      time: "10:04 AM",
      mine: true,
    },
    {
      sender: "Emma Wilson",
      text: "Sounds good. I also found two strong matches that fit your salary and work preference settings.",
      time: "10:12 AM",
      mine: false,
    },
    {
      sender: "Emma Wilson",
      text: "I uploaded the Notion application proof and updated the dashboard status for you.",
      time: "10:24 AM",
      mine: false,
    },
  ],
};

const moderationNotes = [
  {
    title: "Flagged conversation",
    description:
      "1 thread needs policy review due to repeated escalation and missing client confirmation.",
  },
  {
    title: "Support visibility",
    description:
      "Billing and onboarding support chats remain the top categories outside assistant threads.",
  },
  {
    title: "Communication health",
    description:
      "Most active chats are moving quickly, with response times under 20 minutes.",
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Resolved":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    case "Needs Review":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Flagged":
      return "bg-rose-100 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Admin chats" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Admin workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Chats
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Monitor client, assistant, and support conversations with
                read-only oversight, escalation visibility, and chat health
                tracking.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Export chat log
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Review flagged chats
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {chatStats.map((item) => (
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

        <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)_320px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Conversation list
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Live thread overview across assistant and support workflows.
              </p>

              <input
                type="text"
                placeholder="Search client or assistant..."
                className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>

            <div className="mt-4 space-y-3">
              {chatThreads.map((thread, index) => (
                <button
                  key={`${thread.name}-${thread.counterpart}`}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-slate-200 bg-slate-50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-slate-900">
                          {thread.name}
                        </p>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${getStatusClasses(
                            thread.status,
                          )}`}
                        >
                          {thread.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        With {thread.counterpart}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">
                        {thread.updatedAt}
                      </p>
                      {thread.unread > 0 && (
                        <span className="mt-2 inline-flex min-w-[24px] justify-center rounded-full bg-emerald-600 px-2 py-1 text-[11px] font-semibold text-white">
                          {thread.unread}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                    {thread.preview}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {activeConversation.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {activeConversation.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Open client
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  View files
                </button>
              </div>
            </div>

            <div className="space-y-4 p-6">
              {activeConversation.messages.map((message, index) => (
                <div
                  key={`${message.time}-${index}`}
                  className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xl rounded-2xl px-4 py-3 shadow-sm ${
                      message.mine
                        ? "bg-emerald-600 text-white"
                        : "border border-slate-200 bg-slate-50 text-slate-800"
                    }`}
                  >
                    <p className="text-sm font-medium">{message.sender}</p>
                    <p className="mt-2 text-sm leading-6">{message.text}</p>
                    <p
                      className={`mt-3 text-xs ${
                        message.mine ? "text-emerald-100" : "text-slate-500"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-6">
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                Admin view is read-only. Use client, assistant, or support
                workflows to reply.
              </div>
            </div>
          </div>

          <div className="space-y-6">
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
                Chat health
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Reviewed conversations
                    </span>
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
                    <span className="text-sm text-slate-600">Needs review</span>
                    <span className="text-sm font-semibold text-slate-900">
                      11%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[11%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Flagged</span>
                    <span className="text-sm font-semibold text-slate-900">
                      5%
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[5%] rounded-full bg-rose-500" />
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
                  Review unread chats
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open escalated threads
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Export moderation log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
