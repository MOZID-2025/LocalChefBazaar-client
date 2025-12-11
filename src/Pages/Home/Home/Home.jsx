import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Meals from "../DailyMeals";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import DailyMeals from "../DailyMeals";
const reviewsPromise = fetch("http://localhost:3000/reviews").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div className="bg-[#EAECED]">
      <Banner></Banner>
      <DailyMeals></DailyMeals>
      <WhyChooseUs></WhyChooseUs>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
