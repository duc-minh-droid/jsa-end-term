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

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<HomeTab/>}/>
            </Route>
            <Route path="search" element={<SearchTab />} />
            <Route path="recommended" element={<RcmTab />} />
            <Route path="library" element={<LibraryTab />} />
            <Route path="profile" element={<UserTab />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
