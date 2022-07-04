import React from 'react'
import './Banner.css'
import { AiFillCompass } from 'react-icons/ai'
import useRanLink from '../../hook/useRanLink'

function Banner({image, title, desc}) {
    // const imageSrc = require(`../../assets/Library/${image}`)
  return (
    <div className='BannerContainer'>
        <div className='EventContainer'>
            <img src={image} alt={image} />
        </div>
        <div className='EdescContainer'>
            <div className='EtextContainer'>
                <div className='EtextHeading'>
                    {title}
                </div>
                    {desc}
            </div>
            <a href={useRanLink()} target='_blank' rel='noreferrer'>
                <div className='EventButton'>
                    <AiFillCompass size={30} />
                    Visit now
                </div>
            </a>
        </div>
    </div>
  )
}

export default Banner