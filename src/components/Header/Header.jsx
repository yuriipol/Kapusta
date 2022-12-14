import React from 'react'
import style from './Header.module.scss'
import logo from '../../shared/images/Header/logo.png'
import logout from '../../shared/images/Header/logout 1.svg'

const Header = () => {
  return (
    <div className={style.main}>
      <img className={style.logo} alt="logo" src={logo}></img>
      <ul className={style.list}>
        <li className={style.userAvatar}>U</li>
        <li className={style.username}>User Name</li>
        <li className={style.devideSvg}></li>
        <li className={style.exit}>Exit</li>
        <li className={style.mobileExit}><img src={logout}></img></li>
      </ul>
    </div>
  )
}

export default Header