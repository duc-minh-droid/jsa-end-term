import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import HomeTab from "./pages/HomeTab";
import SearchTab from "./pages/SearchTab";
import RcmTab from "./pages/RcmTab";
import LibraryTab from "./pages/LibraryTab";
import UserTab from "./pages/UserTab";
import LoginPage from "./components/HomeTab/LoginPage";
import { PrivateRoute } from "./RouteFunction/PrivateRoute";
import Player from "./music/Player/Player";
import React, { useState } from "react";

export const PlayerContext = React.createContext();

function App() {
  const [playingURI, setPlayingURI] = useState("");
  const location = window.location.pathname
  console.log(location)
  return (
    <div>
      <AuthContextProvider>
        <PlayerContext.Provider value={setPlayingURI}>
          <Router>
          {location==="/login"?null:<Player trackUri={playingURI} />}
            <Routes>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/" element={<HomeTab />} />
              </Route>
              <Route path="search" element={<SearchTab />} />
              <Route path="recommended" element={<RcmTab />} />
              <Route path="library" element={<LibraryTab />} />
              <Route path="profile" element={<UserTab />} />
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </Router>
        </PlayerContext.Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
