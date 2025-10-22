import React, { useState } from "react";
import { Check, Circle } from "lucide-react";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("annual"); // monthly or annual

  const plans = [
    {
      name: "RIDER",
      price: "FREE",
      subText: "for Lifetime",
      button: "Start Now",
      bestValue: false,
      storage: "—",
      branding: "None",
      uncompressedimages: "partial",
      memories: "None",
      whatsappcredits: "5",
      domain: "Foto Owl Domain",
    },
    {
      name: "SKATER SMALL",
      price: "$16",
      subText: "Per Month",
      note: "Billed: Every Year",
      button: "Select",
      bestValue: false,
      storage: "50GB",
      branding: "Limited",
      uncompressedimages: "yes",
      memories: "None",
      whatsappcredits: "50",
      domain: "fotoowl",
    },
    {
      name: "SKATER",
      price: "$16",
      subText: "Per Month",
      note: "Billed: Every Year",
      button: "Select",
      bestValue: false,
      storage: "100GB",
      branding: "Limited",
      uncompressedimages: "yes",
      memories: "None",
      whatsappcredits: "100",
      domain: "fotoowl",
    },
    {
      name: "BIKER",
      price: "$24",
      subText: "Per Month",
      note: "Billed: Every Year",
      button: "Select",
      bestValue: true,
      storage: "500GB",
      branding: "Limited",
      uncompressedimages: "yes",
      memories: "10 Memories: Save 200GB",
      whatsappcredits: "500",
      domain: "Custom Subdomain",
    },
    {
      name: "PILOT",
      price: "$31",
      subText: "Per Month",
      note: "Billed: Every Year",
      button: "Select",
      bestValue: false,
      storage: "1000GB",
      branding: "Limited",
      uncompressedimages: "yes",
      memories: "15 Memories: Save 300GB",
      whatsappcredits: "1000",
      domain: "Customisable",
    },
    {
      name: "ASTRONAUT",
      price: "Contact Us",
      subText: "",
      note: "Billed: Every Year",
      button: "Contact Us",
      bestValue: false,
      storage: "Customisable",
      branding: "Limited",
      uncompressedimages: "yes",
      memories: "Customisable",
      whatsappcredits: "Customisable",
      domain: "Customisable",
    },
  ];

  const features = [
    "Storage",
    "Branding",
    "Uncompressed Images",
    "Memories",
    "Whatsapp Credits",
    "Domain",
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 to-pink-100 py-20 px-4 md:px-10 rounded-t-[3rem]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Choose Perfect Plan for You
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          From upload to delivery, Photomo makes photo management effortless and secure
          in just a few simple steps.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-full p-1 flex shadow-md">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              billingCycle === "monthly"
                ? "bg-pink-500 text-white shadow"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            Monthly Plan
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              billingCycle === "annual"
                ? "bg-pink-500 text-white shadow"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            Annual Plan
          </button>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto rounded-3xl shadow-lg border border-pink-100 bg-white">
        <table className="w-full min-w-[800px] text-center text-sm">
          <thead>
            <tr className="border-b bg-pink-50/60">
              <th className="py-6 text-left pl-6 text-gray-700 font-semibold">
                Features
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={`py-6 px-4 relative ${
                    plan.bestValue
                      ? "bg-[#0B2249] text-white rounded-t-2xl"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {plan.bestValue && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0B2249] text-white text-xs px-3 py-1 rounded-full shadow">
                      Best Value Plan
                    </div>
                  )}
                  <div className="font-bold text-sm mb-2 uppercase">{plan.name}</div>
                  <div className="text-lg font-semibold">
                    {plan.price}
                    {plan.price !== "Contact Us" && (
                      <span className="text-sm font-normal"> {plan.subText}</span>
                    )}
                  </div>
                  {plan.note && (
                    <div
                      className={`text-xs mt-1 ${
                        plan.bestValue ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {plan.note}
                    </div>
                  )}
                  <button
                    className={`mt-4 px-5 py-2 rounded-md text-sm font-medium ${
                      plan.bestValue
                        ? "bg-white text-[#0B2249]"
                        : "bg-[#0B2249] text-white hover:bg-[#0B2249]/90"
                    }`}
                  >
                    {plan.button}
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((feature) => (
              <tr key={feature} className="border-t border-pink-100">
                <td className="text-left py-4 pl-6 font-medium text-gray-700">{feature}</td>
                {plans.map((plan) => {
                  const isDark = plan.bestValue;
                  const value = plan[feature.toLowerCase().replace(/ /g, "")];

                  let displayValue;
                  if (feature === "Uncompressed Images") {
                    displayValue =
                      value === "yes" ? (
                        <Check
                          className={`mx-auto ${isDark ? "text-white" : "text-green-500"}`}
                          size={18}
                        />
                      ) : value === "partial" ? (
                        <Circle
                          className={`mx-auto ${isDark ? "text-yellow-400" : "text-yellow-400"}`}
                          size={14}
                        />
                      ) : (
                        "—"
                      );
                  } else {
                    displayValue = (
                      <span className={`${isDark ? "text-gray-100" : "text-gray-800"} text-sm`}>
                        {value || "—"}
                      </span>
                    );
                  }

                  return (
                    <td key={plan.name} className={`py-4 ${isDark ? "bg-[#0B2249]" : "bg-white"}`}>
                      {displayValue}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingPlans;
