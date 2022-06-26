import React, {useState, useContext} from 'react'
import Player from '../../music/Player/Player'
import Cookies from 'js-cookie'
import Recommendations from './Recommendations'
import RecentPlayed from './RecentPlayed'
import TopTrack from './TopTrack'
import FavArtists from './FavArtists'
import { PlayerContext } from '../../layout/Layout'

function LibraryContainer() {
  const accessToken = Cookies.get('accessToken')
  // const [playingURI, setPlayingURI] = useState("")
  const setPlayingURI = useContext(PlayerContext)

  return (
    <div>
        <Recommendations setURI={setPlayingURI}/>
        <RecentPlayed setURI={setPlayingURI}/>
        <TopTrack setURI={setPlayingURI}/>
        <FavArtists setURI={setPlayingURI}/>
        {/* <Player accessToken={accessToken} trackUri={playingURI}/> */}
    </div>
  )
}

export default LibraryContainer