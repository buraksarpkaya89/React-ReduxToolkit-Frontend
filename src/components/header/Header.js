import React from 'react'
import './Header.scss'
import Logo from "../../assets/image/Logo.png";


export default function Header() {
  return (
    <div>
        <img src={Logo} alt="logo"/>
        <h3 className='logo'>LOGO</h3>
        <hr noshade=" noshade" />
    </div>
  )
}
