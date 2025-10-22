import React from "react";

const SmarterPhotoManagement = () => {
  return (
    <section className="py-16 px-6 flex justify-center bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl w-full text-center bg-white border border-pink-100 shadow-md rounded-3xl p-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Smarter Photo Management
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Ready to Transform Your Photo Workflow?
        </p>

        {/* Paragraph */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Join photographers and event organizers worldwide who save time, stay
          organized, and deliver a premium client experience with{" "}
          <span className="font-semibold text-pink-600">Photomo</span>.
        </p>

        {/* Button */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="#start"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-full transition shadow-sm"
          >
            Start Free Trial
          </a>
          <span className="text-gray-500 text-sm">No credit card required</span>
        </div>
      </div>
    </section>
  );
};

export default SmarterPhotoManagement;
