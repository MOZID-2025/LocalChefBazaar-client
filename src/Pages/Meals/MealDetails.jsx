import { Link, useLoaderData } from "react-router";
import MealReviews from "./MealReviews";

const MealDetails = () => {
  const data = useLoaderData();
  const meal = data.result;
  const {
    foodName,
    chefName,
    foodImage,
    foodPrice,
    foodRating,
    deliveryArea,
    deliveryTime,
    chefExperience,
    chefId,
    ingredients,
    review = [],
  } = meal || {};

  console.log(meal);

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-5">Meal Details</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 my-5">
        {/* Image */}
        <img
          src={foodImage}
          alt=""
          className="w-full h-64 object-cover rounded-lg mb-5"
        />

        {/* Basic Info */}
        <h2 className="text-3xl font-bold mb-2">{foodName}</h2>
        <p className="text-gray-600 text-lg mb-4">Chef: {chefName}</p>

        {/* Price + Rating */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Price: {foodPrice} TK</p>
          <p className="text-yellow-500 font-semibold">⭐ {foodRating}</p>
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-1">Ingredients:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Delivery Info */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Delivery Area: </h3>
          <p className="text-gray-700"> {deliveryArea} </p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Estimated Delivery Time:</h3>
          <p className="text-gray-700">{deliveryTime}</p>
        </div>

        {/* Chef Info */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Chef’s Experience:</h3>
          <p className="text-gray-700">{chefExperience} years</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg">Chef ID:</h3>
          <p className="text-gray-700">{chefId}</p>
        </div>

        {/* Order Button */}
        <Link to="/order">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold transition">
            Order Now
          </button>
        </Link>
      </div>

      <MealReviews review={review}></MealReviews>
    </div>
  );
};

export default MealDetails;
