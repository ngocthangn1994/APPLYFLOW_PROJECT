const messageStats = [
  { label: "Unread messages", value: "7", subtext: "3 new today" },
  {
    label: "Active threads",
    value: "5",
    subtext: "Assistant and support chats",
  },
  { label: "Files shared", value: "14", subtext: "Proof and resume updates" },
  { label: "Avg. response", value: "32 min", subtext: "Fast team turnaround" },
];

const conversations = [
  {
    name: "Emma Wilson",
    role: "Assigned Assistant",
    preview:
      "I finished the Notion application and uploaded the proof file for you.",
    time: "10:24 AM",
    unread: true,
    status: "Online",
  },
  {
    name: "ApplyFlow Support",
    role: "Platform Support",
    preview: "Your latest billing update was processed successfully.",
    time: "Yesterday",
    unread: false,
    status: "Team",
  },
  {
    name: "Emma Wilson",
    role: "Assigned Assistant",
    preview: "Can you confirm if you are open to hybrid roles in Austin?",
    time: "Yesterday",
    unread: false,
    status: "Online",
  },
  {
    name: "Document Review",
    role: "System Update",
    preview: "A new resume analysis summary is ready in your dashboard.",
    time: "Apr 13",
    unread: false,
    status: "System",
  },
];

const activeThread = {
  name: "Emma Wilson",
  role: "Assigned Assistant",
  status: "Online now",
  messages: [
    {
      sender: "Emma Wilson",
      text: "Hi Olivia, I reviewed your saved jobs and started with the strongest matches first.",
      time: "9:12 AM",
      mine: false,
    },
    {
      sender: "You",
      text: "Perfect. Please prioritize remote product design roles first.",
      time: "9:18 AM",
      mine: true,
    },
    {
      sender: "Emma Wilson",
      text: "Done. I completed the Notion application and uploaded the proof file to your Evidence page.",
      time: "10:02 AM",
      mine: false,
    },
    {
      sender: "Emma Wilson",
      text: "Next, I need your confirmation on hybrid roles in Austin before I continue with a few strong matches.",
      time: "10:24 AM",
      mine: false,
    },
  ],
};

function getStatusBadge(status: string) {
  switch (status) {
    case "Online":
      return "bg-emerald-100 text-emerald-700";
    case "Team":
      return "bg-sky-100 text-sky-700";
    case "System":
      return "bg-slate-100 text-slate-700";
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
              Team communication
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Messages
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Stay in sync with your assigned assistant, receive workflow
              updates, and respond quickly when applications need more
              information.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              Mark all read
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
              New message
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {messageStats.map((item) => (
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

      <div className="grid gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold text-slate-900">Inbox</h2>
            <p className="mt-1 text-sm text-slate-500">
              Your recent conversations and system updates.
            </p>

            <input
              type="text"
              placeholder="Search messages..."
              className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            {conversations.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                className={`w-full rounded-2xl border p-4 text-left transition ${
                  index === 0
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-slate-50 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${getStatusBadge(
                          item.status,
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.unread && (
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    )}
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                </div>

                <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                  {item.preview}
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
                  {activeThread.name}
                </h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {activeThread.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{activeThread.role}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                View files
              </button>
              <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Open task
              </button>
            </div>
          </div>

          <div className="space-y-4 p-6">
            {activeThread.messages.map((message, index) => (
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
                placeholder="Write a message to your assistant..."
                className="w-full resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-3">
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Attach file
                  </button>
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Quick reply
                  </button>
                </div>

                <button className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
