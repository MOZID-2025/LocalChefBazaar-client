import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { user_email, userName, ratings, testimonial, user_photoURL } = review;

  return (
    <div className="bg-white mb-10 p-6 rounded-2xl shadow-lg max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300">
      {/* Quote Icon */}
      <div className="text-[#C3DFE2] text-4xl mb-4 flex justify-end">
        <FaQuoteRight />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
        {testimonial}
      </p>

      {/* Ratings */}
      <p className="text-yellow-500 text-lg mb-4">{ratings}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-[#03464D] my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 flex-shrink-0">
          <img
            className="rounded-full object-cover w-full h-full"
            src={user_photoURL}
            alt={userName}
          />
        </div>

        {/* Name & Email */}
        <div>
          <h3 className="text-[#033238] font-semibold text-sm sm:text-base">
            {userName}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
