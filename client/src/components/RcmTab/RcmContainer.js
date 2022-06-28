import {useContext} from 'react'
import DamVinhHung from './DamVinhHung'
import NewRelease from './NewRelease'
import RcmVN from './RcmVN'
import Featured from './Featured'
import PopVN from './PopVN'
import { PlayerContext } from '../../layout/Layout'
import ArtistBanner from './ArtistBanner'
import DashboardRcm from './DashboardRcm'

function RcmContainer() {
  const setPlayingURI = useContext(PlayerContext)
  window.scrollTo(0, 0)

  return (
    <div>
        <DashboardRcm />
        <Featured setURI={setPlayingURI}/>
        <NewRelease setURI={setPlayingURI}/>
        <RcmVN setURI={setPlayingURI}/>
        <PopVN setURI={setPlayingURI}/>
        <ArtistBanner />
        <DamVinhHung setURI={setPlayingURI} />
        {/* <Player accessToken={accessToken} trackUri={playingURI}/> */}
    </div>
  )
}

export default RcmContainer