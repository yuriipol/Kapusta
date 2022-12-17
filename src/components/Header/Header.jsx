import React from 'react';
import { useState } from 'react';
import ModalExit from 'components/ModalExit/ModalExit';
import style from './Header.module.scss';
import logo from '../../shared/images/Header/logo.png';
import logout from '../../shared/images/Header/logout 1.svg';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className={style.main}>
      <img className={style.logo} alt="logo" src={logo}></img>
      <ul className={style.list}>
        <li className={style.userAvatar}>U</li>
        <li className={style.username}>User Name</li>
        <li className={style.devideSvg}></li>
        <li className={style.exit} onClick={onClickToggleModal}>
          Exit
        </li>
        <li className={style.mobileExit}>
          <img onClick={onClickToggleModal} src={logout} alt="logout"></img>
        </li>
      </ul>
      {isOpenModal && <ModalExit close={onClickToggleModal} />}
    </div>
  );
};

export default Header;
