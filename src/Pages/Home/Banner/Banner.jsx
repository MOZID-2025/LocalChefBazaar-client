import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/h1.jpg";
import bannerImg2 from "../../../assets/banner/h2.jpg";
import bannerImg3 from "../../../assets/banner/h3.jpg";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="h-150 w-full">
        <img
          src={bannerImg1}
          alt="Banner 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-150 w-full">
        <img
          src={bannerImg2}
          alt="Banner 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-150 w-full">
        <img
          src={bannerImg3}
          alt="Banner 3"
          className="w-full h-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
