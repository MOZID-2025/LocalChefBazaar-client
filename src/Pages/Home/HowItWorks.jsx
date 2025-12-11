import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaTruckPickup } from "react-icons/fa";
import { TbBrandBooking, TbTruckDelivery } from "react-icons/tb";

const HowItWorks = () => {
  const howItWorksData = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <FaTruckPickup />,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <BsCashCoin />,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbTruckDelivery />,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: <TbBrandBooking />,
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-8 text-[#03373D]">How it Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorksData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl text-[#03373D] mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2 text-[#03373D]">
              {item.title}
            </h3>

            <p className="text-gray-600 text-1xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
