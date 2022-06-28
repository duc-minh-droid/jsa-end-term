import React from 'react'
import GifSection from './GifSection'
import HomeBanner from './HomeBanner'
import MainSection from './MainSection'

function HomePage() {
  window.scrollTo(0, 0)

  return (
    <div className='HomePage'>
      <MainSection />
      <GifSection />
      <HomeBanner />
    </div>
  )
}

export default HomePage