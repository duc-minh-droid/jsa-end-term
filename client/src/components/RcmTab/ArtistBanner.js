import React from 'react'
import './Rcm.css'

function ArtistBanner() {
  return (
    <div className='MusicSection banner-section'>
        <div className='banner-img-container'>
            <img src='https://avatar-ex-swe.nixcdn.com/song/2021/07/13/d/1/2/3/1626163286914_640.jpg' alt='Dam Vinh Hung' />
        </div>
        <div className='banner-text-container'>
            <p className='banner-text-heading'>
                Ca sĩ của năm
            </p>
            <p className='banner-name'>Đàm Vĩnh Hưng</p>
            <blockquote lang="en" className='banner-quote'>
                Cô đơn nghệ sĩ nào cũng có. Với Hưng, cô đơn là thường trực, thậm chí là trên giường ngủ hay sau khi ăn.
            </blockquote>
        </div>
    </div>
  )
}

export default ArtistBanner