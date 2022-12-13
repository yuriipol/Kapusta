import React from 'react'
import style from './Header.module.scss'
import logo from '../../shared/images/Header/logo.png'

const Header = () => {
  return (
    <div className={style.head}>
      <img className={style.logo} alt="logo" src={logo}></img>
      <ul className={style.list}>
        <li>U</li>
        <li>User Name</li>
        <li>|</li>
        <li className={style.exit}>Exit</li>
      </ul>
    </div>
  )
}

export default Header