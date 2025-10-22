import React from "react";

function HeroSection() {
  const images = [
    "/wallpaper/5.jpg",
    "/wallpaper/2.jpg",
    "/wallpaper/3.jpg",
    "/wallpaper/4.jpg",
    "/wallpaper/5.jpg",
    "/wallpaper/6.jpg",
  ];

  const cardTitles = ["Sport", "Corporate", "Life", "Music", "Travel", "Education"];
  const cardDescriptions = [
    "Exciting sports events and action shots",
    "Corporate events and professional gatherings",
    "Daily life and lifestyle photography",
    "Music concerts and performances",
    "Travel and adventure photography",
    "Education events and workshops",
  ];

  return (
    <section className="bg-[#f9f4f7]">
      <div className="text-gray-900 px-4 pt-16 pb-12">
        {/* --- Top Section --- */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full mb-4 font-semibold shadow-md text-sm sm:text-base">
            Next-Level Media with AI
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Organize. Share. Collaborate.
          </h1>
        </div>

        {/* --- Wallpapers Arc Section --- */}
        <div className="relative w-full flex justify-center mb-10 h-64 sm:h-80 md:h-96 flex-1">
          {images.map((src, index) => {
            const xPositions = [
              "-translate-x-72 sm:-translate-x-80",
              "-translate-x-40 sm:-translate-x-48",
              "-translate-x-12 sm:-translate-x-16",
              "translate-x-12 sm:translate-x-16",
              "translate-x-40 sm:translate-x-48",
              "translate-x-72 sm:translate-x-80",
            ];
            const yPositions = [
              "translate-y-6 sm:translate-y-8",
              "translate-y-3 sm:translate-y-5",
              "translate-y-0",
              "translate-y-0",
              "translate-y-3 sm:translate-y-5",
              "translate-y-6 sm:translate-y-8",
            ];
            const rotations = ["-rotate-8", "-rotate-4", "rotate-0", "rotate-0", "rotate-4", "rotate-8"];
            const zIndex = [50, 40, 30, 30, 40, 50];

            return (
              <img
                key={index}
                src={src}
                alt={`Wallpaper ${index + 1}`}
                className={`w-32 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow-lg
                absolute transform ${xPositions[index]} ${yPositions[index]} ${rotations[index]}
                ${zIndex[index] === 50 ? "z-50" : zIndex[index] === 40 ? "z-40" : "z-30"}
                transition-all duration-500 hover:scale-105 hover:z-60`}
              />
            );
          })}

          {/* --- Curved Paragraph --- */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-full sm:w-11/12 md:w-3/4 text-center z-20">
            <div className="bg-white text-gray-900 px-6 py-5 rounded-t-3xl shadow-md">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Use Face Recognition to deliver photos faster, build custom galleries,
                and make photo selection easy for your clients.
              </p>
            </div>
          </div>
        </div>

        {/* --- CTA Buttons Below Wallpaper --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 mb-10">
          <a
            href="#start-free"
            className="px-8 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition shadow text-center"
          >
            Start Free Trial
          </a>
          <a
            href="#learn-more"
            className="px-8 py-3 border border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition text-center"
          >
            Learn More
          </a>
        </div>

        {/* --- Stats Section (Pushed Right, Slightly Overlapping) --- */}
        <div className="bg-white text-gray-900 rounded-2xl px-6 py-8 max-w-6xl mx-auto w-full shadow-md mt-10 mb-16 relative right-[-16rem]">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-pink-50 px-5 py-3 rounded-xl shadow text-center min-w-[120px]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">100k+</h3>
              <p className="text-sm text-gray-600">Happy Users</p>
            </div>
            <div className="bg-pink-50 px-5 py-3 rounded-xl shadow text-center min-w-[120px]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">120k+</h3>
              <p className="text-sm text-gray-600">Events</p>
            </div>
            <div className="bg-pink-50 px-5 py-3 rounded-xl shadow text-center min-w-[120px]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">300M+</h3>
              <p className="text-sm text-gray-600">Photos Shared</p>
            </div>
            <div className="bg-pink-50 px-5 py-3 rounded-xl shadow text-center min-w-[120px]">
              <h3 className="text-xl font-bold mb-1">Trusted by Millions</h3>
            </div>
          </div>
        </div>

        {/* --- Six Cards Section --- */}
        <div className="py-12 px-4 mt-6">
          <div className="max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-6 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-200 
                  ${index === 5 ? "translate-x-[-40%]" : ""}`}
                >
                  <div className="relative">
                    <img
                      src={src}
                      alt={`Card ${index + 1}`}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <div className="font-semibold text-base">{cardTitles[index]}</div>
                      <div className="text-sm opacity-90">{cardDescriptions[index]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Heading & Description Below Cards --- */}
        <div className="text-center mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Unlock the full power of your media library
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Capture, organize, and share your most valuable moments with ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
