import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard from "./ReviewCard";
import { use } from "react";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  console.log(reviewsData);
  return (
    <div>
      <div className="text-center mb-8 mt-8">
        <h2 className="text-2xl text-[#03373D] mb-4">
          Customer Reviews & Testimonials
        </h2>
        <p>
          Hear from our valued customers—their stories, experiences, and
          feedback that highlight the quality, reliability, <br /> and positive
          impact of our services, helping you see why so many trust and choose
          us every day.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 100,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
