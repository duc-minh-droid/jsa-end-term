import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

export default function Home() {
  const { auth } = useContext(AuthContext)

  return (
    <div>
      {auth? <HomePage />: <LoginPage /> }
    </div>
  )
}
