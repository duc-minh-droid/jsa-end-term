import React, {useState} from 'react'
import Player from '../../music/Player/Player'
import Cookies from 'js-cookie'
import Recommendations from './Recommendations'

function LibraryContainer() {
  const accessToken = Cookies.get('accessToken')
  const [playingURI, setPlayingURI] = useState("")

  return (
    <div>
        <Recommendations setURI={setPlayingURI}/>
        <Player accessToken={accessToken} trackUri={playingURI}/>
    </div>
  )
}

export default LibraryContainer