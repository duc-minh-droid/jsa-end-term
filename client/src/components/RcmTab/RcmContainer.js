import {useState} from 'react'
import Cookies from 'js-cookie'
import DamVinhHung from './DamVinhHung'
import Player from '../../music/Player/Player'

function RcmContainer() {
  const accessToken = Cookies.get('accessToken')
  const [playingURI, setPlayingURI] = useState("")

  return (
    <div>
        <DamVinhHung setURI={setPlayingURI} />
        <Player accessToken={accessToken} trackUri={playingURI}/>
    </div>
  )
}

export default RcmContainer