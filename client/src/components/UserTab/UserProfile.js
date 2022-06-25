import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {spotifyApi} from '../../spotify/spotifyApi'
import './User.css'

function UserProfile() {
    const accessToken = Cookies.get('accessToken')
    spotifyApi.setAccessToken(accessToken)
    const [user, setUser] = useState({})
    const [following, setFollowing] = useState(0)

    useEffect(() =>{
      spotifyApi.getMe()
          .then(res=>res.body)
          .then(res=>({
            name: res.display_name,
            email: res.email,
            image: (res.images[0])?(res.images[0]?.url):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
            link: res.external_urls.spotify,
            follow: res.followers.total,
          }))
          .then(res=>setUser(res))

    }, [])

    useEffect(()=>{
      spotifyApi.getFollowedArtists()
      .then(res=>res.body.artists.total)
      .then(res=>setFollowing(res))
    },[])

    return (
      <div className='userContainer'>
        <div className='userImage'>
          <img src={user.image} alt={user.name} />
        </div>
        <div className='userText'>
          <p className='userName'>{user.name}</p>
          <div className='userDesc'>
            <a href={user.link} target='_blank' rel='noreferrer'>{user.email}</a>
            <p>{user.follow} followers · following {following}</p>
          </div>
        </div>
      </div>
    )
}

export default UserProfile