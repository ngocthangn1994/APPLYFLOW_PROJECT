import { AppShell } from "@/components/dashboard/app-shell";

const links = [
  { href: "/assistant/dashboard", label: "Dashboard" },
  { href: "/assistant/clients", label: "Assigned Clients" },
  { href: "/assistant/jobs", label: "Delegated Jobs" },
  { href: "/assistant/tasks", label: "Tasks" },
  { href: "/assistant/chat", label: "Team Chat" },
  { href: "/assistant/reports", label: "Reports" },
];

const chatStats = [
  { label: "Active chats", value: "12", subtext: "5 updated this morning" },
  { label: "Unread messages", value: "8", subtext: "3 need quick reply" },
  { label: "Client requests", value: "6", subtext: "Waiting on follow-up" },
  {
    label: "Avg. response time",
    value: "14 min",
    subtext: "Strong support pace",
  },
];

const threads = [
  {
    client: "Olivia Bennett",
    topic: "Product Designer applications",
    preview:
      "Please prioritize remote roles first and let me know if you need any more portfolio links.",
    time: "10:24 AM",
    unread: 2,
    status: "Active",
  },
  {
    client: "Daniel Kim",
    topic: "Sponsorship clarification",
    preview:
      "I can confirm I do not need sponsorship right now, but may need it later.",
    time: "9:42 AM",
    unread: 1,
    status: "Needs Reply",
  },
  {
    client: "Mia Rodriguez",
    topic: "Resume update",
    preview:
      "I uploaded a new version of my resume. Please use that one going forward.",
    time: "Yesterday",
    unread: 0,
    status: "Resolved",
  },
  {
    client: "Noah Patel",
    topic: "Austin onsite roles",
    preview:
      "I am open to Austin onsite roles if compensation is strong enough.",
    time: "Yesterday",
    unread: 0,
    status: "Active",
  },
];

const activeConversation = {
  name: "Olivia Bennett",
  role: "Premium client",
  status: "Online now",
  messages: [
    {
      sender: "Olivia Bennett",
      text: "Hi Emma, please prioritize remote product design roles first before hybrid ones.",
      time: "9:12 AM",
      mine: false,
    },
    {
      sender: "You",
      text: "Absolutely. I started with the strongest remote matches and already completed one application this morning.",
      time: "9:18 AM",
      mine: true,
    },
    {
      sender: "Olivia Bennett",
      text: "Perfect. Let me know if you need anything else from me.",
      time: "9:25 AM",
      mine: false,
    },
    {
      sender: "You",
      text: "I uploaded the Notion proof file and may ask for one quick portfolio clarification next.",
      time: "10:24 AM",
      mine: true,
    },
  ],
};

const quickReplies = [
  "Please confirm your work authorization.",
  "I uploaded the application proof.",
  "I need one more document from you.",
  "I found a strong new role match.",
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Active":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "Needs Reply":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "Resolved":
      return "bg-sky-100 text-sky-700 border border-sky-200";
    default:
      return "bg-slate-100 text-slate-700 border border-slate-200";
  }
}

export default function Page() {
  return (
    <AppShell title="Assistant Chat" links={links}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-700">
                Assistant workspace
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Team Chat
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Support clients in real time, request missing details, share
                progress updates, and keep application workflows moving
                smoothly.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                View attachments
              </button>
              <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                Start new chat
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

        <div className="grid gap-6 xl:grid-cols-[350px_minmax(0,1fr)_300px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Client threads
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your active conversations and support queue.
              </p>

              <input
                type="text"
                placeholder="Search client or topic..."
                className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
              />
            </div>

            <div className="mt-4 space-y-3">
              {threads.map((thread, index) => (
                <button
                  key={`${thread.client}-${thread.topic}`}
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
                          {thread.client}
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
                        {thread.topic}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">{thread.time}</p>
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
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {activeConversation.name}
                  </h2>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {activeConversation.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {activeConversation.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Open client
                </button>
                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Share file
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
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <textarea
                  rows={4}
                  placeholder="Write a message to your client..."
                  className="w-full resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-3">
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                      Attach file
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                      Request info
                    </button>
                  </div>

                  <button className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick replies
              </h3>
              <div className="mt-4 space-y-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-white"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Chat workflow
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">
                    Request missing info
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Ask for sponsorship, relocation, work mode, or document
                    clarification quickly.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">
                    Share progress updates
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Keep clients informed when applications are submitted or
                    blocked.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="font-medium text-slate-900">
                    Send evidence files
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Upload proof screenshots, PDFs, and supporting files
                    directly from chat.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Quick actions
              </h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Open flagged thread
                </button>
                <button className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  View shared files
                </button>
                <button className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Start support update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
