import React from 'react'
import './Rcm.css'
import longrec1 from '../../assets/image/ForYou/longrec1.jpg'
import longrec2 from '../../assets/image/ForYou/longrec2.jpg'
import square1 from '../../assets/image/ForYou/square1.jpg'
import square2 from '../../assets/image/ForYou/square2.jpg'
import square3 from '../../assets/image/ForYou/square3.jpg'
import square4 from '../../assets/image/ForYou/square4.png'
import square6 from '../../assets/image/ForYou/square6.jpg'
import square5 from '../../assets/image/ForYou/square5.png'

function DashboardRcm() {
  return (
      <div>
        <div className='MusicText dashboard-text'>Đình đám trong tuần</div>
      <div className='dashboard-section'>
        <div className="grid-container">
            <div className="long-card1">
                <img src={longrec1} alt='card' />
            </div>
            <div className="long-card2">
                <img src={longrec2} alt='card' />
            </div>
            <div className="short-card">
                <img src={square1} alt='card' />
            </div>
            <div className="short-card">
                <img src={square2} alt='card' />
            </div>
            <div className="short-card">
                <img src={square3} alt='card' />
            </div>
            <div className="short-card">
                <img src={square4} alt='card' />
            </div>
            <div className="short-card">
                <img src={square5} alt='card' />
            </div>
            <div className="short-card">
                <img src={square6} alt='card' />
            </div>

        </div>
    </div>
    </div>
  )
}

export default DashboardRcm