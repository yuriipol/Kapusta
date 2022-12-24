import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalExit from 'components/ModalExit/ModalExit';
import logo from '../../shared/images/Header/logo.png';
import logout from '../../shared/images/Header/logout 1.svg';
import { userInfoName, avatar } from 'redux/user/user-selectors';

import style from './Header.module.scss';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const userName = useSelector(userInfoName);
  const userAvatar = useSelector(avatar);

  return (
    <div className={style.main}>
      <img className={style.logo} alt="logo" src={logo}></img>
      <ul className={style.list}>
        {/* <li className={style.userAvatar}>U</li> */}
        <li className={style.userAvatar}>
          <img className={style.imgAvatar} alt="avatar" src={userAvatar}></img>
        </li>
        <li className={style.username}>{userName}</li>
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
