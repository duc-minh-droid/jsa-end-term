import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import HomePage from './HomePage'
import { useNavigate, Navigate } from 'react-router-dom'

export default function Home() {
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  if (!auth) {
    navigate('/login')
  }

  return (
    <div>
      {auth? <HomePage />: <Navigate to='/login' /> }
    </div>
  )
}
