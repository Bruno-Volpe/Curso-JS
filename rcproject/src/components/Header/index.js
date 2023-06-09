import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { Nav } from './styled'
import * as actions from '../../store/modules/auth/actions'
import history from '../../services/history'

export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  function hnaldeLogout(e) {
    e.preventDefault()
    dispatch(actions.loginFailure())
    history.push('/')
  }

  return (
    <Nav>
      <Link to="/"> <FaHome size={24} /> </Link>
      <Link to="/register"> <FaUserAlt size={24} /> </Link>
      <Link to="/login" > <FaSignInAlt size={24} /> </Link>
      <Link onClick={e => hnaldeLogout(e)} to="/logout" > <FaSignInAlt size={24} /> </Link>

      <FaCircle size={24} color={isLoggedIn ? 'lightgreen' : 'red'} />
    </Nav>
  )
}
