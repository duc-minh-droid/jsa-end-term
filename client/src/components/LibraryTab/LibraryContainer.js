import React, {useContext} from 'react'
import Recommendations from './Recommendations'
import RecentPlayed from './RecentPlayed'
import TopTrack from './TopTrack'
import FavArtists from './FavArtists'
import { PlayerContext } from '../../layout/Layout'
import EventsBanner from './EventsBanner'

function LibraryContainer() {
  const setPlayingURI = useContext(PlayerContext)
  window.scrollTo(0, 0)
  
  return (
    <div>
        <EventsBanner />
        <Recommendations setURI={setPlayingURI}/>
        <RecentPlayed setURI={setPlayingURI}/>
        <TopTrack setURI={setPlayingURI}/>
        <FavArtists setURI={setPlayingURI}/>
        {/* <Player accessToken={accessToken} trackUri={playingURI}/> */}
    </div>
  )
}

export default LibraryContainer