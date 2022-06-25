import React from 'react'
import './Artist.css'
import {AiFillPlayCircle} from 'react-icons/ai'

function ArtistComponent({uri, setURI, artistType, artistName, image, followerCount}) {
  const handlePlay = ()=>{
    setURI(uri)
  }
  
  return (
    <div className='artistCard'>
        <div className='artistImage'>
          <div className='artistPlay'>
            <img src={image} alt={artistName} />
            <AiFillPlayCircle className='playBtn' onClick={handlePlay} />
          </div>
        </div>
       <div className='artistText'>
         <p className='artistName'>{artistName}</p>
         <div className='artistDesc'>
           <p>{artistType}</p>
           <p>{followerCount} followers</p>
        </div>
       </div>
    </div>
  )
}

export default ArtistComponent