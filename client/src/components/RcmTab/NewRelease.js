import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import SongComponent from '../../music/SongRenderer/SongComponent'
import { SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SongSwiper from '../../music/Swiper/SongSwiper'
import './Rcm.css'

function NewRelease({setURI}) {
  const accessToken = Cookies.get('accessToken')
  spotifyApi.setAccessToken(accessToken)

  const [card, setCard] = useState([])
  
  useEffect(() =>{
    spotifyApi.getNewReleases({ country: 'VN', limit: 20 })
      .then(res=>res.body.albums.items)
      .then(res=>setCard(res))
  },[])

  return (
    <div className='MusicSection'>
      <div className='MusicText'>
        Mới ra mắt
      </div>

      <SongSwiper>
        {card && card.map((e,i)=>{
          return <SwiperSlide key={i}>
            <SongComponent uri={e.uri} setURI={setURI} name={e.name}
              artistNames={e.artists?.map(i=>i.name)} artistLinks={e.artists?.map(i=>i.external_urls?.spotify)}
              image={e.images[0].url}
            />
          </SwiperSlide>
        })}
      </SongSwiper>
    </div>
  )
}

export default NewRelease