import React from "react";
import {
  Home,
  Calendar,
  Image,
  MessageSquare,
  BarChart2,
  Zap,
  Settings,
  LogOut,
  ChevronDown,
  Sun,
  Bell,
  User,
} from "lucide-react";

const EventCreationFlow = () => {
  const steps = [
    { id: 1, title: "Create Event and Get QR Code" },
    { id: 2, title: "Guests Scan QR Code and Register" },
    { id: 3, title: "Upload Photos and Publish Event" },
    { id: 4, title: "Guest get notified about their photos" },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* -------- Steps Header -------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center justify-center py-5 px-4 text-sm sm:text-base font-semibold ${
                index === 0
                  ? "bg-gradient-to-r from-[#cdd7eb] via-[#e7ecf6] to-white text-gray-900"
                  : "bg-white text-gray-800"
              } border-b sm:border-b-0 sm:border-r last:border-r-0`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    index === 0
                      ? "bg-[#1e2a47] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {step.id}
                </span>
                <span>{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* -------- Dashboard Layout -------- */}
        <div className="mt-12 bg-[#fafafa] border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-56 bg-white border-r border-gray-200 flex flex-col justify-between">
              <div>
                <div className="p-5 font-bold text-gray-900 text-lg">
                  Logo here
                </div>
                <nav className="px-4 space-y-2 text-sm font-medium">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md text-gray-900">
                    <Home size={16} /> Home
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Calendar size={16} /> Create Event
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Image size={16} /> My Events
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <MessageSquare size={16} /> WhatsApp
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <BarChart2 size={16} /> Analytics
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Zap size={16} /> Beam
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Settings size={16} /> Settings
                  </div>
                </nav>
              </div>
              <div className="p-4">
                <button className="flex items-center gap-2 text-red-500 text-sm hover:underline">
                  <LogOut size={14} /> Log out
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-white">
              {/* Top Navbar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-800">25 images</span> of
                  1000 images used
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Sun size={16} />
                  <Bell size={16} />
                  <Settings size={16} />
                  <div className="flex items-center gap-1 font-medium text-sm">
                    <User size={16} /> Haider Irfan
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 space-y-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Create Event
                </h2>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="text-sm text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Event Name"
                      className="w-full mt-1 px-3 py-2 border border-red-400 rounded-md text-sm"
                    />
                    <p className="text-xs text-red-500 mt-1">
                      Enter Event Name
                    </p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Date</label>
                    <input
                      type="date"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                      defaultValue="2025-08-25"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Type of Event</label>
                    <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
                      <option>Conference</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="text-sm text-gray-700">Details</label>
                  <textarea
                    placeholder="Event Details (Optional)"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                {/* Branding */}
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-900 text-sm">
                      Add Branding to the Event
                    </p>
                    <button className="text-xs text-gray-500">⌄</button>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    Your brand will be visible on client gallery
                  </p>
                  <div className="text-center text-sm text-gray-500 py-4 border rounded-md">
                    You don’t have any brandings
                    <div>
                      <button className="mt-2 px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700">
                        Add Brand
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="border border-gray-200 rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-900 text-sm">
                      Notification Settings
                    </p>
                    <button className="text-xs text-gray-500">⌄</button>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    How your clients should get notified about their photos
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center justify-between border rounded-md px-3 py-2">
                      <div className="text-sm text-gray-700">
                        WhatsApp
                        <p className="text-xs text-gray-500">
                          Guests will receive WhatsApp when event is published
                        </p>
                      </div>
                      <input type="checkbox" defaultChecked className="accent-green-500 w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between border rounded-md px-3 py-2">
                      <div className="text-sm text-gray-700">
                        Email
                        <p className="text-xs text-gray-500">
                          Guests will receive mail when they register and event is published
                        </p>
                      </div>
                      <input type="checkbox" defaultChecked className="accent-green-500 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Event Visibility */}
                <div className="border border-gray-200 rounded-md p-4">
                  <p className="font-medium text-gray-900 text-sm">
                    Event Visibility
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Public Events will be visible on your public page
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* -------- Bottom Section (New Heading + Paragraph) -------- */}
      
      </div>
    </section>
  );
};

export default EventCreationFlow;
