import React, {useContext} from 'react'
import UserProfile from './UserProfile'
import SavedTracks from './SavedTracks'
import { PlayerContext } from '../../layout/Layout'
import MyArtists from './MyArtists'

function UserContainer() {
  const setPlayingURI = useContext(PlayerContext)
  window.scrollTo(0, 0)

  return (
    <div>
      <UserProfile />
      <SavedTracks setURI={setPlayingURI}/>
      <MyArtists setURI={setPlayingURI}/>
    </div>
  )
}

export default UserContainer