import {useState} from 'react'
import Cookies from 'js-cookie'
import DamVinhHung from './DamVinhHung'
import Player from '../../music/Player/Player'
import NewRelease from './NewRelease'
import RcmVN from './RcmVN'
import Featured from './Featured'
import PopVN from './PopVN'

function RcmContainer() {
  const accessToken = Cookies.get('accessToken')
  const [playingURI, setPlayingURI] = useState("")

  return (
    <div>
        <Featured setURI={setPlayingURI}/>
        <NewRelease setURI={setPlayingURI}/>
        <RcmVN setURI={setPlayingURI}/>
        <PopVN setURI={setPlayingURI}/>
        <DamVinhHung setURI={setPlayingURI} />
        <Player accessToken={accessToken} trackUri={playingURI}/>
    </div>
  )
}

export default RcmContainer