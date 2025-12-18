import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";

const Faq = () => {
  return (
    <div className="my-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl text-[#067A87] font-bold mb-5">
          Frequently Asked Question (FAQ)
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="collapse collapse-arrow peer-checked:bg-[#E6F2F3] border border-[#067A87] mb-5">
        <input
          className="peer"
          type="radio"
          name="my-accordion-2"
          defaultChecked
        />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow border border-[#067A87] mb-5 peer-checked:bg-[#E6F2F3]">
        <input className="peer" type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow border border-[#067A87] peer-checked:bg-[#E6F2F3] mb-5 ">
        <input className="peer" type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow border border-[#067A87] peer-checked:bg-[#E6F2F3] mb-5 ">
        <input className="peer" type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow border border-[#067A87] peer-checked:bg-[#E6F2F3]">
        <input className="peer" type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="bg-[#CAEB66] py-2 px-4 rounded-xl font-bold">
          <Link>See More FAQ’s</Link>
        </button>
        <Link className="bg-[#1F1F1F] p-3 rounded-full text-[#CAEB66] font-bold text-xl">
          <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default Faq;
