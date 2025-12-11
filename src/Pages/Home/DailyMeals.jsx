import { Link, useLoaderData } from "react-router";

const DailyMeals = () => {
  const mealsData = useLoaderData();
  console.log(mealsData);

  return (
    <div className="py-16 bg-[#033238] text-center text-white rounded-3xl">
      <h2 className="text-3xl font-bold"> Daily Meals</h2>
      <p className="max-w-2xl mx-auto text-gray-200 mt-2">
        Freshly-cooked homemade meals prepared by verified local chefs —
        delivered to your area daily.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 ">
        {mealsData.map((meal) => (
          <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border">
            <img
              src={meal.foodImage}
              alt="Food"
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-black">
                {meal.chefName}
              </h2>
              <p className="text-sm text-gray-500">{meal.chefId}</p>

              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-bold text-green-600">
                  $ {meal.foodPrice}
                </p>
                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-sm font-medium">
                  ⭐ {meal.foodRating}
                </span>
              </div>

              <p className="text-gray-700">
                <span className="font-semibold">Delivery Area:</span>{" "}
                {meal.deliveryArea}
              </p>

              <Link to={`/order/${meal._id}`}>
                <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMeals;
