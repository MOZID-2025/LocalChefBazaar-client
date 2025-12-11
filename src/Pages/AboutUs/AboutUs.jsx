import React, { useState } from "react";

const AboutUs = () => {
  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  const content = {
    Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. From the very beginning, our focus has been on ensuring that each package reaches its destination on time, no matter the distance or complexity of the route.

 Over the years, we have invested in advanced tracking systems, streamlined logistics processes, and a dedicated team of professionals to make sure every delivery is smooth and worry-free. Our commitment to transparency and real-time updates has built trust with thousands of customers worldwide.

From personal gifts to critical business shipments, our goal has always been to remove stress from the delivery process. Every parcel matters to us, and we measure our success by the satisfaction of the people we serve.`,

    Mission: `Our mission is to transform the delivery experience for everyone. We aim to combine technology, speed, and reliability to create a service that customers can count on every time.

We focus on continuous improvement, analyzing every step of the delivery process to remove inefficiencies and enhance performance. Sustainability and ethical practices are also central to our mission, ensuring that our services are responsible and environmentally conscious.

By empowering our team and leveraging innovation, we hope to set a new standard in the logistics industry. Our ultimate goal is to make delivery seamless, transparent, and accessible for individuals and businesses alike.`,

    Success: `Over the years, we have achieved numerous milestones that demonstrate our dedication and expertise in logistics. Thousands of deliveries, satisfied clients, and innovative solutions are a testament to our success.

We celebrate every achievement, from timely deliveries in challenging conditions to the adoption of cutting-edge technologies that improve efficiency. Each success story motivates us to keep pushing the boundaries of what’s possible in the delivery industry.

But our success isn’t just measured in numbers; it’s measured in the trust and satisfaction of the people we serve. We are proud to be a reliable partner for our clients and continue striving for excellence every day.`,

    "Team & Others": `Our team is the backbone of our company. Comprised of experts in logistics, technology, and customer service, every member plays a crucial role in ensuring smooth operations.

We value collaboration, continuous learning, and innovation, which allows us to tackle challenges efficiently and deliver exceptional results. Beyond our core team, we work with partners and communities to expand our impact and improve services globally.

Together, our collective experience, dedication, and creativity help us achieve our mission and maintain the highest standards of service in every delivery we make.`,
  };

  const [activeTab, setActiveTab] = useState("Story");

  return (
    <div className="p-8 bg-white font-sans">
      <div>
        <h2 className="text-3xl text-[#03373D] font-bold">About Us</h2>
      </div>
      {/* Tabs */}
      <nav className="flex space-x-6 text-xl mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 transition duration-150 ease-in-out ${
              activeTab === tab
                ? "text-[#03373D] border-b-2 border-green-700 font-semibold"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="space-y-6 text-base text-gray-700 leading-relaxed max-w-4xl">
        <p>{content[activeTab]}</p>
      </div>
    </div>
  );
};

export default AboutUs;
