import React from "react";

const PhotoGallerySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 gap-10 bg-white rounded-2xl shadow-md">
      {/* LEFT SIDE CONTENT */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Beautiful Online Photo Galleries
        </h2>

        <p className="text-gray-600 text-lg">
          Photo selection inbuilt into the photo gallery. Hassle-free selection
          for album creation, photo proofing, and editing. Save your own and
          your client’s precious time.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition">
            Create Gallery
          </button>
          <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl transition">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all text-center overflow-hidden bg-white">
          <img
            src="/wallpaper/6.jpg"
            alt="Simply Like to Select"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-gray-800 text-lg">
              Simply Like to Select
            </h3>
            <p className="text-gray-600 text-sm">
              Easy photo selection with a simple like action.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all text-center overflow-hidden bg-white">
          <img
            src="/wallpaper/3.jpg"
            alt="Comment Specific Needs"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-gray-800 text-lg">
              Comment Specific Needs
            </h3>
            <p className="text-gray-600 text-sm">
              Add comments for specific requirements or feedback.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all text-center overflow-hidden bg-white">
          <img
            src="/wallpaper/5.jpg"
            alt="Select on Any Device"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-gray-800 text-lg">
              Select on Any Device
            </h3>
            <p className="text-gray-600 text-sm">
              Select photos from any device, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
