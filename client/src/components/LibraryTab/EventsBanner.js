import React from 'react'
import BannerSwiper from '../../music/Swiper/BannerSwiper'
import {SwiperSlide} from 'swiper/react'
import Banner from '../../music/BannerRenderer/Banner'
import rec1 from '../../assets/image/Library/rectangle1.jpg'
import rec2 from '../../assets/image/Library/rectangle3.jpeg'
import rec3 from '../../assets/image/Library/rectangle7.jpeg'
import rec4 from '../../assets/image/Library/rectangle12.jpeg'

function EventsBanner() {

  return (
    <div className='MusicSection'>
        <div className='MusicText'>
            Events
        </div>
        <BannerSwiper>
            <SwiperSlide>
                <Banner image={rec1}
                    title='Discover your music taste with Spotify Premium!'
                    desc='Free 3 months of Spotify premium for newcomers'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Banner image={rec2}
                    title='Future Music Festival in California'
                    desc='Nova presents to you a lively show with a theme of Summer in the 15s. Make sure to visit us!'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Banner image={rec3}
                    title='Sound Motion music festival ft DJ Snake'
                    desc='Starting in 25th August, Sound Motion is holding the first festival only for 25$ a ticket'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Banner image={rec4}
                    title='2019 Music Festival'
                    desc='Let we take you to the past, drowning yourself in the beauty of 2019'
                />
            </SwiperSlide>
        </BannerSwiper>
    </div>
  )
}

export default EventsBanner