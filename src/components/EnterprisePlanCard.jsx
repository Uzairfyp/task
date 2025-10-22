import React from "react";
import { CheckCircle } from "lucide-react";

const EnterprisePlanCard = () => {
  const features = [
    [
      "Full White Label Solution",
      "Marquee Frames",
      "Unlimited Photos",
      "Custom WhatsApp and Email Notification",
      "10x Sponsor visibility by Custom Frames",
      "Don't think about the storage",
    ],
    [
      "Photomo Canvas",
      "In Gallery Video",
      "Hashtrack",
      "Create custom landing page for all the events",
      "Video placement with dedicated CTA Button",
      "10x Organic digital presence by promoting hashtags",
    ],
  ];

  return (
    <section className="py-20 px-6 flex justify-center items-center bg-gradient-to-b from-[#0B1B3F] to-[#091634]">
      <div className="max-w-5xl w-full bg-[#0E2455] text-white rounded-3xl p-10 shadow-2xl border border-white/10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Photomo Enterprise Plan
          </h2>
          <p className="text-xl font-semibold text-pink-300 mb-4">Contact Us</p>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            With the Photomo Enterprise Plan, get event-specific customization and
            dedicated support anytime you need it.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {features.map((column, i) => (
            <ul key={i} className="space-y-4">
              {column.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-100 text-sm sm:text-base"
                >
                  <CheckCircle className="text-pink-400 mt-1" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-full shadow-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePlanCard;
