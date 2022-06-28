import React from 'react'
import './Home.css'
import gif1 from '../../assets/gif/gif1.gif'
import gif2 from '../../assets/gif/gif2.gif'
import gif3 from '../../assets/gif/gif3.gif'

function GifSection() {
  return (
    <div>
        <div className="gif-section">
            <div className="gif-container">
                <div className="gif-content">
                    <img src={gif1} style={{height:'450px', width:'450px'}} alt='error' />
                </div>
                <div className="gif-text">
                    <h2>Listen to a personalized mix of tracks</h2>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/number1.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/number2.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/number3.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="gif-section gif-odd">
            <div className="gif-container gif-flex-odd">
                <div className="gif-content">
                    <img src={gif2} style={{height:'450px', width:'450px'}} alt='error' />
                </div>
                <div className="gif-text">
                    <h2>We cure your taste of music</h2>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/finder.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/finder.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/icon/finder.svg' alt=''/>
                        <p>Reduce unnecessary spend with real time insights into every penny spent.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="gif-section gif-even">
            <div className="gif-container">
                <div className="gif-content">
                    <img src={gif3} style={{height:'450px', width:'450px'}} alt='error' />
                </div>
                <div className="gif-text">
                    <h2>Get ready for seamless online music</h2>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic2.png.webp' alt=''/>
                        <p>High quality audio</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic3.png.webp' alt=''/>
                        <p>No ads</p>
                    </div>
                    <div className="gif-list">
                        <img src='https://preview.colorlib.com/theme/musiclab/assets/img/gallery/onlinemusic4.png.webp' alt=''/>
                        <p>Unlimited skips</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GifSection