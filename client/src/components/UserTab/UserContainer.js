import React, {useState, useContext} from 'react'
import UserProfile from './UserProfile'
import Cookies from 'js-cookie'
import SavedTracks from './SavedTracks'
import { PlayerContext } from '../../layout/Layout'
import MyArtists from './MyArtists'

function UserContainer() {
  const accessToken = Cookies.get('accessToken')
  const setPlayingURI = useContext(PlayerContext)

  return (
    <div>
      <UserProfile />
      <SavedTracks setURI={setPlayingURI}/>
      <MyArtists setURI={setPlayingURI}/>
      {/* <Player accessToken={accessToken} trackUri={playingURI} /> */}
    </div>
  )
}

export default UserContainer