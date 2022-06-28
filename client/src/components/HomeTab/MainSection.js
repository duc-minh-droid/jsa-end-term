import React from 'react'
import './Home.css'
import IntroVideo from '../../assets/video/IntroVideo'

function MainSection() {
  return (
    <div>
        <div className="main-section first-section">
            <div className="main-desc">
                <p className="main-title">Listening is everything</p>
                <p>Millions of songs and podcasts.</p>
            </div>
        </div>

        <div className="main-section second-section">
            <div className="second-desc">
                <p className="main-title">Top songs being discovered around the world right now</p>
                <IntroVideo />
            </div>
        </div>

        <div className="main-section third-section">
            <div className="third-desc">
                <p className="main-title">Open the world of music</p>
                <p>Intuitive. Powerful. Runs everywhere</p>
            </div>
            <div className="image-container">
                <img src='https://picsum.photos/800/500' alt='' />
            </div>
        </div>
    </div>
  )
}

export default MainSection