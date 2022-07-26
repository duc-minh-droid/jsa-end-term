import { useState, useEffect, useContext } from "react";
import TrackSearchResult from "./TrackSearchResult";
import { Form } from "react-bootstrap";
import axios from "axios";
import { spotifyApi } from "../../spotify/spotifyApi";
import './Search.css'
import { PlayerContext } from '../../App'

export default function Dashboard({ accessToken }) {
  // window.history.pushState({}, null, "/")

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");
  const setPlayingURI = useContext(PlayerContext)

  function chooseTrack(track) {
    setPlayingURI(track?.uri)
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!playingTrack) return;

    axios
      .get("https://serverx.up.railway.app/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div className="searchContainer">
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      <div className="searchResult" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre", color: "#FFFFFF", marginTop: '50px' }}>
            {lyrics}
          </div>
        )}
      </div>
      <div className="searchPlayer">
        {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
      </div>
    </div>
  );
}
