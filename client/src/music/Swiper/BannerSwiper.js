import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import React from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function BannerSwiper({children}) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{delay: 4000}}
        speed={1000}
      >
        {children}
      </Swiper>
    </>
  );
}
