import React from 'react'
import logo from '../../../public/rt-logo.png'
import { Link } from 'react-router-dom'


function Logo() {
  return (
    <div className='logo-wrapper'>
        <Link to='/'><img src={logo} alt='Logo' className="logo" /></Link>
    </div>
  )
}

export default Logo