import React from 'react'
import './Home.css'
import rec from '../../assets/image/Home/rectangle9.png'

function HomeBanner() {
  const scrollTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='home-banner-container'>
        <img src={rec} alt='' />
        <button onClick={scrollTopBtn} class="noselect"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></button>
    </div>
  )
}

export default HomeBanner