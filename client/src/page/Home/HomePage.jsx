import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./Home.scss";
import Contact from "../../components/Contact/Contact";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

function HomePage() {
  return (
    <div className="home">
      {/* Swiper */}
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/8433517/pexels-photo-8433517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3457273/pexels-photo-3457273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <FeaturedProducts type="featured" />
      <FeaturedProducts type="tranding" />
      <Contact />
    </div>
  );
}

export default HomePage;
