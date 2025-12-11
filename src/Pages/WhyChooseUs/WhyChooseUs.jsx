import React from "react";
import { FaCoffee, FaFish, FaHamburger } from "react-icons/fa";
import whychooseimg1 from "../../assets/whychooseus-1.jpg";
import whychooseimg2 from "../../assets/whychooseus-2.jpg";
import whychooseimg3 from "../../assets/whychooseus-3.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="py-16 bg-white mt-8">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm font-bold text-[#b89e7f] uppercase tracking-widest">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f1f]">
              We Offer Best Foods That Our Customers Needs
            </h2>
            <p className="text-gray-600">
              "Serving the finest foods crafted to satisfy every craving,
              bringing flavors that our customers truly love and enjoy."
            </p>

            {/* Icons */}
            <div className="flex gap-6 mt-6">
              <div className="flex flex-col items-center bg-[#b89e7f] text-white p-4 rounded-lg">
                <FaHamburger size={24} />
                <span className="mt-2 text-sm">Fast Foods</span>
              </div>
              <div className="flex flex-col items-center bg-[#b89e7f] text-white p-4 rounded-lg">
                <FaCoffee size={24} />
                <span className="mt-2 text-sm">Coffee</span>
              </div>
              <div className="flex flex-col items-center bg-[#b89e7f] text-white p-4 rounded-lg">
                <FaFish size={24} />
                <span className="mt-2 text-sm">Seafood</span>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img
              src={whychooseimg2} // top-left overlapping image
              alt="drink"
              className="absolute top-0 left-20 w-40 lg:w-48 rounded-xl shadow-lg z-10 -translate-y-10"
            />
            <img
              src={whychooseimg1} // main image
              alt="food main"
              className="rounded-xl shadow-lg w-64 lg:w-72 z-20"
            />
            <img
              src={whychooseimg3} // bottom-right overlapping image
              alt="snacks"
              className="absolute bottom-0 right-0 w-48 lg:w-56 rounded-xl shadow-lg z-0 translate-y-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
