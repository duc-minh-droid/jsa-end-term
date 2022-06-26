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
    navigate('/')
  }

  return (
    <div>
        <button type="button" className="btn btn-success" onClick={logOutHandler}>Log Out</button>
    </div>
  )
}

export default Logout