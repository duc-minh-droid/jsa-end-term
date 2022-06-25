import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import SongComponent from '../../music/SongRenderer/SongComponent'
import { SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SongSwiper from '../../music/Swiper/SongSwiper'
import './Rcm.css'

function DamVinhHung({setURI}) {
  const accessToken = Cookies.get('accessToken')
  spotifyApi.setAccessToken(accessToken)

  const [card, setCard] = useState([])
  
  useEffect(() =>{
    spotifyApi
      .getArtistAlbums('4ht0wODL01ELRxlDYvsFad', { limit: 10 })
      .then(res=>res.body)
      .then(res=>res.items)
      .then(res=>setCard(res))
  },[])

  return (
    <div className='MusicSection'>
      <div className='MusicText'>
        Đàm Vĩnh Hưng
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

export default DamVinhHung