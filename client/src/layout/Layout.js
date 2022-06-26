import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import NavBar from "../components/NavBar/NavBar";
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useLocation } from 'react-router-dom';
import Player from "../music/Player/Player";
import './layout.css'

export const PlayerContext = React.createContext()

function Layout({ children }) {
  const location = useLocation().pathname
  const { auth, setAuth } = useContext(AuthContext);
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let code = searchParams.get("code");

  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  useEffect(() => {
    const setLogin = (value) => {
      localStorage.setItem("auth", value);
      setAuth(value);
    };

    if (!code) return;
    axios
      .post("http://localhost:3001/login", { code })
      .then((res) => {
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        setLogin(true);
        Cookies.set("accessToken", res.data.accessToken, {
          expires: res.data.expiresIn,
        });
        setSearchParams({});
      })
      .catch((err) => {
        setLogin(false);
        console.error(err);
      });
  }, [code, setAuth, setSearchParams]);

  useEffect(() => {
    const setLogin = (value) => {
      localStorage.setItem("auth", value);
      setAuth(value);
    };

    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          setExpiresIn(res.data.expiresIn);
          setLogin(true);
          Cookies.set("accessToken", res.data.accessToken, {
            expires: res.data.expiresIn,
          });
        })
        .catch(() => {
          setLogin(false);
          navigate('/')
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn, setAuth, navigate]);

  const [playingURI, setPlayingURI] = useState("" || [])

  return (
    <div className="content-container">
      {auth && <NavBar />}

      <PlayerContext.Provider value={setPlayingURI}>
        <SpotifyApiContext.Provider value={token}>
          {children}
        </SpotifyApiContext.Provider>
      </PlayerContext.Provider>

      {auth && (playingURI? (<>
        <Player accessToken={token} trackUri={playingURI} />
              </>):null)}
      {auth && (
        <div>
          {location==="/search"?null:<Footer />}
        </div>
      )}
    </div>
  );
}

export default Layout;
