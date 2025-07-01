import React from "react";

import {
  Archive,
  Bug,
  Trash2,
  Clock,
  Reply,
  ReplyAll,
  Share2,
  MoreHorizontal,
} from "lucide-react";

const emailData = [
  {
    sender: "Alice Smith",
    subject: "Re: Project Update",
    preview:
      "A SaaS (Software as a Service) platform offers cloud-based solutions...",
    tags: ["Project", "Work"],
  },
  {
    sender: "William Smith",
    subject: "Meeting Tomorrow",
    preview: "Let's have a meeting tomorrow to discuss the project...",
    tags: ["Meeting", "Work"],
  },
  {
    sender: "Bob Johnson",
    subject: "Weekend Plans",
    preview: "Any plans for the weekend? I was thinking of going hiking...",
    tags: ["Weekend", "Work"],
  },
  {
    sender: "Emily Davis",
    subject: "Re: Question about Budget",
    preview: "I have a question about the budget for the upcoming project...",
    tags: ["Budget", "About", "Work"],
  },
  {
    sender: "David Lee",
    subject: "New Project Idea",
    preview: "I have an exciting new project idea to discuss with you...",
    tags: ["Label", "Label", "Label"],
  },
];

const Inbox = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* 🔹 LEFT PANEL */}
      <aside className="w-[432px] h-[864px] border-r bg-white flex flex-col p-4">
        {/* 🔹 Inbox + Buttons in One Line with Border */}
        <div className="flex justify-between items-center pb-3 border-b border-gray-300 ">
          <h2 className="text-xl font-semibold">Inbox</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
              All mail
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
              Unread
            </button>
          </div>
        </div>

        {/* 🔍 Search Bar */}
        <div className="mt-4 mb-3">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* 📧 Email Cards */}
        <div className="flex-1 overflow-y-auto space-y-3">
          {emailData.map((email, i) => (
            <div
              key={i}
              className="p-3 border rounded hover:bg-gray-50 cursor-pointer"
            >
              <h3 className="font-medium text-sm">{email.sender}</h3>
              <p className="text-xs text-gray-500">{email.subject}</p>
              <p className="text-xs text-gray-400 truncate">{email.preview}</p>
              <div className="flex gap-2 mt-1 text-xs">
                {email.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* 🔸 RIGHT PANEL */}
      <main className="h-[864px]  bg-white flex flex-col p-6 overflow-y-auto">
        {/* 🔹 Top Toolbar in Right Panel */}
        <div className="flex justify-between items-center border-b pb-2 mb-4 text-gray-600">
          <div className="flex items-center gap-4">
            <Archive className="w-5 h-5 cursor-pointer hover:text-black" />
            <Bug className="w-5 h-5 cursor-pointer hover:text-black" />
            <Trash2 className="w-5 h-5 cursor-pointer hover:text-black" />
            <Clock className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>

          <div className="h-6 w-px bg-gray-300 mx-4" />

          <div className="flex items-center gap-4">
            <Reply className="w-5 h-5 cursor-pointer hover:text-black" />
            <ReplyAll className="w-5 h-5 cursor-pointer hover:text-black" />
            <Share2 className="w-5 h-5 cursor-pointer hover:text-black" />
            <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-black" />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Alice Smith</h2>
          <p className="text-sm text-gray-500">Re: Project Update</p>
          <p className="text-xs text-gray-400">Mar 25, 2025, 1:15 PM</p>
        </div>

        <div className="flex-1 space-y-4 text-sm">
          <p>
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success.
          </p>
          <p>
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success.
          </p>
          <p>
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success.
          </p>
          <p>Thanks, Emily</p>
        </div>

        <div className="mt-6 border-t pt-4">
          <textarea
            placeholder="Reply Emily Davis..."
            rows={3}
            className="w-full border rounded p-2 mb-2"
          />
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded" />
              Mute this thread
            </label>
            <button className="bg-black text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
          
        </div>
      </main>

    </div>
  );
};

export default Inbox;
