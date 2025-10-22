import React from "react";

const PhotoGallerySection = () => {
  const cards = [
    {
      title: "Simply Like to Select",
      description: "Easy photo selection with a simple like action.",
      image: "/wallpaper/6.jpg",
    },
    {
      title: "Comment Specific Needs",
      description: "Add comments for specific requirements or feedback.",
      image: "/wallpaper/3.jpg",
    },
    {
      title: "Select on Any Device",
      description: "Select photos from any device, anywhere.",
      image: "/wallpaper/5.jpg",
    },
  ];

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
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition-all text-center overflow-hidden bg-white"
          >
            <img
              src={process.env.PUBLIC_URL + card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-gray-800 text-lg">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallerySection;
