import React from "react";
import { Quote } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Photomo has completely transformed the way I deliver photos to my clients. The face recognition saves me hours of sorting, and my clients love how easy it is to find their pictures.",
      name: "Maya Lennox",
      role: "Wedding Photographer",
      rating: 5,
      dark: true,
    },
    {
      text: "As an event organizer, I need to share thousands of images quickly and securely. Photomo makes the entire process smooth, professional, and stress-free.",
      name: "Eniola Kabubi",
      role: "Event Manager",
      rating: 0,
      dark: false,
    },
    {
      text: "I love the branded galleries! It feels like I’m giving my clients a premium experience, and the AI tagging means everything is ready in minutes.",
      name: "Aliyah Hassan",
      role: "Portrait Photographer",
      rating: 0,
      dark: false,
    },
  ];

  return (
    <section className="bg-[#f9f9ff] py-20 px-4 md:px-10">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
          What Our <br className="hidden sm:block" /> Users Say
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md mt-4 md:mt-0">
          Join a growing community of photographers and event organizers who
          trust us to manage, share, and protect their most valuable memories.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-3xl shadow-sm ${
              item.dark
                ? "bg-gradient-to-br from-[#15284b] to-[#243b6b] text-white"
                : "bg-white text-gray-800"
            } transition transform hover:-translate-y-1 hover:shadow-md`}
          >
            {/* Quote Icon */}
            <Quote
              size={20}
              className={`mb-3 ${item.dark ? "text-white/70" : "text-gray-400"}`}
            />

            {/* Testimonial Text */}
            <p className={`text-sm leading-relaxed ${item.dark ? "text-white/90" : "text-gray-700"}`}>
              {item.text}
            </p>

            {/* Stars */}
            {item.rating > 0 && (
              <div className="flex mt-4 space-x-1 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            )}

            {/* User Info */}
            <div className="mt-4">
              <p className={`text-sm font-semibold ${item.dark ? "text-white" : "text-gray-800"}`}>
                {item.name}
              </p>
              <p className={`text-xs ${item.dark ? "text-white/70" : "text-gray-500"}`}>
                {item.role}
              </p>
            </div>

            {/* Button on the 3rd card */}
            {index === 2 && (
              <div className="absolute -top-6 right-6">
                <button className="bg-gradient-to-b from-[#1a2a4b] to-[#0e152a] text-white text-sm font-semibold py-2 px-4 rounded-full shadow">
                  Hear from our clients
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
