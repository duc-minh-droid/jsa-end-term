import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import SongComponent from '../../music/SongRenderer/SongComponent'
import { SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SongSwiper from '../../music/Swiper/SongSwiper'
import './Rcm.css'

function RcmVN({setURI}) {
  const accessToken = Cookies.get('accessToken')
  spotifyApi.setAccessToken(accessToken)

  const [card, setCard] = useState([])
  
  useEffect(() =>{
    spotifyApi.getRecommendations({
        min_energy: 0.4,
        seed_artists: ['5FWPIKz9czXWaiNtw45KQs', '3swW6OR2g7qTY3626sqVW4'],
        min_popularity: 50
      })
      .then(res=>res.body.tracks)
      .then(res=>setCard(res))
  },[])

  return (
    <div className='MusicSection'>
      <div className='MusicText'>
        Đề xuất cho bạn
      </div>

      <SongSwiper>
        {card && card.map((e,i)=>{
          return <SwiperSlide key={i}>
            <SongComponent uri={e.uri} setURI={setURI} name={e.name}
              artistNames={e.artists?.map(i=>i.name)} artistLinks={e.artists?.map(i=>i.external_urls?.spotify)}
              image={e.album.images[0].url}
            />
          </SwiperSlide>
        })}
      </SongSwiper>
    </div>
  )
}

export default RcmVN