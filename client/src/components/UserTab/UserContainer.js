import React, {useState} from 'react'
import UserProfile from './UserProfile'
import Cookies from 'js-cookie'
import Player from '../../music/Player/Player'
import SavedTracks from './SavedTracks'
import MyArtists from './MyArtists'

function UserContainer() {
  const accessToken = Cookies.get('accessToken')
  const [playingURI, setPlayingURI] = useState("")

  return (
    <div>
      <UserProfile />
      <SavedTracks setURI={setPlayingURI}/>
      <MyArtists setURI={setPlayingURI}/>
      <Player accessToken={accessToken} trackUri={playingURI} />
    </div>
  )
}

export default UserContainer