import React, {useState} from 'react'
import Player from '../../music/Player/Player'
import DamVinhHung from './DamVinhHung'
import Cookies from 'js-cookie'

function LibraryContainer() {
  const accessToken = Cookies.get('accessToken')
  const [playingURI, setPlayingURI] = useState("")

  return (
    <div>
        <DamVinhHung setURI={setPlayingURI}/>
        <Player accessToken={accessToken} trackUri={playingURI}/>
    </div>
  )
}

export default LibraryContainer