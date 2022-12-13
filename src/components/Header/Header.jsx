import React from 'react'
import style from './Header.module.scss'
import logo from '../../shared/images/Header/logo.png'

const Header = () => {
  return (
    <div className={style.head}>
      <img className={style.logo} alt="logo" src={logo}></img>
      <ul className={style.list}>
        <li className={style.userAvatar}>U</li>
        <li className={style.username}>User Name</li>
        <li className={style.devideSvg}></li>
        <li className={style.exit}>Exit</li>
      </ul>
    </div>
  )
}

export default Header