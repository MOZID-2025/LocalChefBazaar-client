import React, { useState } from "react";
import { useLoaderData } from "react-router";

const MealReviews = ({ review }) => {
  const meal = useLoaderData();

  const [reviews, setReviews] = useState(meal.reviews || []);
  const [newReview, setNewReview] = useState({
    reviewerName: "",
    reviewerImage: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      ...newReview,
      id: `R-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([review, ...reviews]);
    setNewReview({
      reviewerName: "",
      reviewerImage: "",
      rating: "",
      comment: "",
    });
  };

  return (
    <div>
      <div>
        {/* default review */}

        <h2 className="text-2xl font-bold text-center mb-5">
          Existing Reviews
        </h2>
        <div className="space-y-4">
          {review.map((r) => (
            <div
              key={r.id}
              className="flex items-start space-x-4 border p-4 rounded-lg mb-5"
            >
              <img
                src={r.reviewerImage || "https://i.ibb.co/placeholder.png"}
                alt={r.reviewerName}
                className="w-12 h-12 rounded-full object-cover"
              />


              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{r.chefName}</h4>
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-sm">
                    ⭐ {r.rating}
                  </span>
                </div>
                <p className="text-gray-700">{r.comment}</p>
                <p className="text-gray-400 text-sm mt-1">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

        
        {/* Display Reviews */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-gray-500"></p>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="flex items-start space-x-4 border p-4 rounded-lg mb-5"
              >
                <img
                  src={
                    review.reviewerImage || "https://i.ibb.co/placeholder.png"
                  }
                  alt={review.reviewerName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">{review.reviewerName}</h4>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded text-sm">
                      ⭐ {review.rating}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-gray-400 text-sm mt-1">{review.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* review section */}
      <div>
        <div className=" p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Add Review {meal.foodName}
          </h2>

          {/* Add Review Form */}
          <form
            onSubmit={handleSubmitReview}
            className="mb-6 p-4 border rounded-lg bg-gray-50"
          >
            <h3 className="font-semibold mb-2">Add a Review</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="reviewerName"
                value={newReview.reviewerName}
                onChange={handleChange}
                placeholder="Your Name"
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="reviewerImage"
                value={newReview.reviewerImage}
                onChange={handleChange}
                placeholder="Your Image URL"
                className="border px-3 py-2 rounded"
              />
              <input
                type="number"
                name="rating"
                value={newReview.rating}
                onChange={handleChange}
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                step="0.5"
                className="border px-3 py-2 rounded"
                required
              />
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleChange}
                placeholder="Your Comment"
                className="border px-3 py-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MealReviews;
