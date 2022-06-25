import React from 'react'
import './SongComponent.css'
import {AiFillPlayCircle} from 'react-icons/ai'

function SongComponent({uri, setURI, name, artistLinks, artistNames, image}) {
    const handlePlay = ()=>{
        setURI(uri)
    }

  return (
      <div className='songCard'>
        <div className='songImage'>
            <div className='songPlay'>
                <img src={image} alt={name} />
                <AiFillPlayCircle className='playBtn' onClick={handlePlay} />
            </div>
        </div>
        <div className='songText'>
            <div>{name}</div>
            {artistNames.length <= 2 ? artistLinks.map((artistLink, index)=>{
                return (<div className='songAnchor' key={index}>
                    <a href={artistLink} alt={artistNames[index]} target="_blank" rel='noreferrer'>{artistNames[index]}</a>
                </div>)
            }): (<div>
                    <a href={artistLinks[0]} alt={artistNames[0]} target="_blank" rel='noreferrer'>{artistNames[0]}</a>
                </div>)
            }
        </div>
      </div>
  )
}

export default SongComponent