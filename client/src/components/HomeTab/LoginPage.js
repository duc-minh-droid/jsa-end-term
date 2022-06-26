import React from 'react'
import Login from './Login'
import './Home.css'
import { RiVipCrownLine, RiInformationLine, RiCheckboxCircleLine } from "react-icons/ri"

function LoginPage() {
  return (
    <div className='loginContainer'>
        <div className='loginForm'>
            <img src='https://iili.io/jHxmLN.png' alt='logo'/>
                <div className='loginCheck loginBox'>
                    <RiCheckboxCircleLine className='loginIcon'/>
                    <p>This is asteroid - an application that allows user to listen to their favourite songs and more... Login to experience the music!</p>
                </div>
                <div className='loginWarn loginBox'>
                    <RiVipCrownLine className='loginIcon'/>
                    <p>Important! This application is only available for spotify's premium user only. Please consider when loggin in.</p>
                </div>
                <div className='loginDesc loginBox'>
                    <RiInformationLine className='loginIcon'/>
                    <p>The link will take you to spotify's login page. Make sure your email address is valid and please accept the conditions in order for the application to proceed</p>
                </div>
        <Login />
        </div>
    </div>
  )
}

export default LoginPage