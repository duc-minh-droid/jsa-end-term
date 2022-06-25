import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import ArtistComponent from '../../music/ArtistRenderer/ArtistComponent'
import { SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SongSwiper from '../../music/Swiper/SongSwiper'
import './Library.css'

function FavArtists({setURI}) {
  const accessToken = Cookies.get('accessToken')
  spotifyApi.setAccessToken(accessToken)

  const [card, setCard] = useState([])
  
  useEffect(() =>{
    spotifyApi
      .getMyTopArtists()
      .then(res=>res.body.items)
      .then(res=>setCard(res))
  },[])

  return (
    <div className='MusicSection'>
      <div className='MusicText'>
        My Favourite Artists
      </div>

      <SongSwiper>
        {card && card.map((e,i)=>{
          return <SwiperSlide key={i}>
            <ArtistComponent uri={e.uri} setURI={setURI}
              artistName={e.name} artistLink={e.external_urls.spotify}
              image={e.images[0].url} artistType={e.type} followerCount={e.followers.total}
            />
          </SwiperSlide>
        })}
      </SongSwiper>
    </div>
  )
}

export default FavArtists