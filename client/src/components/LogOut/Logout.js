import { useContext } from 'react'
import Cookies from 'js-cookie'
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { setAuth } = useContext(AuthContext);
  const setLogin = (value) => {
    localStorage.setItem("auth", value);
    setAuth(value);
  };

  const navigate = useNavigate()
  const logOutHandler = () => {
    setLogin(false)
    Cookies.remove('accessToken')
    navigate('/login')
  }

  return (
    <div>
        <button type="button" className="logout-btn" onClick={logOutHandler}>Log Out</button>
    </div>
  )
}

export default Logout