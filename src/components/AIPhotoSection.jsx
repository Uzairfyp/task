import React from "react";
import { Download, Heart, ThumbsUp, MessageCircle, Smartphone } from "lucide-react";

function AIPhotoSection() {
  // --- AI FEATURES: for the top 3 cards ---
  const features = [
    {
      title: "Automatic Face Detection & Organization",
      description:
        "Our AI scans photos, identifies faces, and sorts them into albums—saving time and eliminating manual work.",
      image: process.env.PUBLIC_URL + "/wallpaper/6.jpg",
    },
    {
      title: "Fast Search & Easy Retrieval",
      description:
        "Locate photos instantly by searching a person’s name. AI-powered search ensures your memories are always just a click away.",
      image: process.env.PUBLIC_URL + "/wallpaper/3.jpg",
    },
    {
      title: "Private and Secure Delivery",
      description:
        "Easily share collections with only the intended people. Enjoy end-to-end encryption, password protection, and flexible access settings.",
      image: process.env.PUBLIC_URL + "/wallpaper/5.jpg",
    },
  ];

  // --- RIGHT FEATURES: for the collaboration section ---
  const rightFeatures = [
    {
      icon: <ThumbsUp size={18} className="text-pink-600" />,
      title: "Simply Like to Select",
      description: "Easy photo selection with a simple like action.",
    },
    {
      icon: <MessageCircle size={18} className="text-pink-600" />,
      title: "Comment Specific Needs",
      description: "Add comments for specific requirements or feedback on photos.",
    },
    {
      icon: <Smartphone size={18} className="text-pink-600" />,
      title: "Select on Any Device",
      description: "Select photos from any device, anywhere, anytime.",
    },
  ];

  return (
    <>
      {/* AI PHOTO SCANNING SECTION */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT TEXT AREA */}
          <div className="md:w-[60%] space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              AI-Powered Photo Scanning
            </h2>
            <p className="text-gray-600 text-base border-l-4 border-pink-500 pl-3 italic">
              “Capture and verify faces effortlessly with real-time AI scanning precision.”
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Designed for photographers and teams, our scanner intelligently detects
              and organizes faces with unmatched speed and accuracy.
            </p>
            <a
              href="#try-ai"
              className="inline-block mt-4 px-5 py-2 bg-pink-600 text-white text-sm font-medium rounded-full hover:bg-pink-700 transition"
            >
              Try AI Photo Scan
            </a>
          </div>

          {/* RIGHT SCANNER VISUAL */}
          <div className="md:w-[35%] flex justify-center">
            <div className="relative w-48 h-56 rounded-xl overflow-hidden shadow-md border border-gray-100">
              <img
                src={process.env.PUBLIC_URL + "/wallpaper/4.jpg"}
                alt="AI Scanner"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Scanning Face...
              </div>
            </div>
          </div>
        </div>

        {/* AI FEATURES (3 IMAGE CARDS) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-transparent">
                <div className="h-44 rounded-md overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-3 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATIVE PHOTO SELECTION SECTION */}
      <section className="bg-white py-12 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* LEFT IMAGE */}
          <div className="relative w-full sm:w-72 md:w-64 lg:w-72 h-52 rounded-xl overflow-hidden shadow-md">
            <img
              src={process.env.PUBLIC_URL + "/wallpaper/4.jpg"}
              alt="Collaborative Selection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-2 right-2 flex gap-2">
              <button className="p-1.5 bg-white/80 rounded-full shadow hover:bg-white transition">
                <Download size={16} className="text-gray-800" />
              </button>
              <button className="p-1.5 bg-white/80 rounded-full shadow hover:bg-white transition">
                <Heart size={16} className="text-pink-600" />
              </button>
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="md:w-[55%] flex flex-col space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Collaborative Photo Selection
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">
              Photo Selection inbuilt into photo gallery
            </h3>
            <p className="text-gray-600 text-sm">
              Hassle-free selection for album creation, photo proofing, and editing.
              Save your time and your clients’ time with seamless selection built right
              into the gallery.
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {rightFeatures.map((item, index) => (
                <div key={index} className="flex flex-col items-start space-y-1">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 pl-6">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCAN ANIMATION */}
      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        .animate-scan {
          animation: scan 3.5s linear infinite;
        }
      `}</style>
    </>
  );
}

export default AIPhotoSection;
