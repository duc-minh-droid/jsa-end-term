import React from 'react'
import { Swiper } from "swiper/react"
import { Keyboard, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Swiper.css'

function SongSwiper({children}) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
        className="mySwiper"
      >
          {children}
      </Swiper>
    </>
  )
}

export default SongSwiper