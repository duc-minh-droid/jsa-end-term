import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./Player.css";
import Cookies from "js-cookie";

function Player({ trackUri }) {
  const [play, setPlay] = useState(false);
  let accessToken = Cookies.get("accessToken");
  
  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;
  return (
    <div className="player">
      <div className="player-after"></div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        styles={{
          bgColor: "#181818",
          trackArtistColor: "#B3B3B3",
          trackNameColor: "#FFFFFF",
          color: "#FFFFFF",
          sliderColor: "#1db945",
          sliderTrackColor: "#B3B3B3",
          sliderHandleColor: "#FFFFFF",
        }}
        initialVolume={0.5}
      />
    </div>
  );
}

export default React.memo(Player);
