import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import SongComponent from '../../music/SongRenderer/SongComponent'
import { SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SongSwiper from '../../music/Swiper/SongSwiper'
import './Rcm.css'

function Featured({setURI}) {
  const accessToken = Cookies.get('accessToken')
  spotifyApi.setAccessToken(accessToken)

  const [card, setCard] = useState([])
  
  useEffect(() =>{
    spotifyApi.getFeaturedPlaylists({ limit : 10, offset: 1, country: 'VN', locale: 'sv_VN' })
      .then(res=>res.body.playlists.items)
    //   .then(res=>console.log(res))
      .then(res=>setCard(res))
  },[])

  return (
    <div className='MusicSection'>
      <div className='MusicText'>
        Dành cho bạn
      </div>

      <SongSwiper>
        {card && card.map((e,i)=>{
          return <SwiperSlide key={i}>
            <SongComponent uri={e.uri} setURI={setURI} name={e.name}
              artistNames={["Spotify"]} artistLinks={["#"]}
              image={e.images[0].url}
            />
          </SwiperSlide>
        })}
      </SongSwiper>
    </div>
  )
}

export default Featured