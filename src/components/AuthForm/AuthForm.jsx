import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GoogleLogo from '../../shared/images/auth/google-symbol_lg.svg';
import { registerUser } from '../../redux/auth/auth-operations';
import { googleLogin } from '../../shared/api/auth-api';
import s from './AuthForm.module.scss';

// const BASE_URL = 'http://localhost:4040';

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password };

    onSubmit(data);
    setEmail('');
    setPassword('');
  }

  function onRegistration(event) {
    // event.preventDefault();
    const data = { email, password };
    dispatch(registerUser(data));
  }

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  }

  function onGoogleRetistrationClick() {
    googleLogin();
    navigate('/home');
  }

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.textUp}> You can log in with your Google Account:</p>
        <button
          type="button"
          className={s.link}
          onClick={onGoogleRetistrationClick}
        >
          <img className={s.googleIcon} src={GoogleLogo} alt="Google Logo" />
          Google
        </button>
        <p className={s.textDown}>
          Or log in using an email and password, after registering:
        </p>

        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="your@email.com"
            type="email"
            name="email"
            value={email}
            id="email"
            // required
            // pattern="\S+@[a-z]+\.[a-z]+"
            title="The email must contain ???"
            // title="The email must contain only Latin lowercase letters, @ and  a dot without spacesю  For example - butterfly@mail.com"
            onChange={handleChange}
          />
          <label className={s.formLabel} htmlFor="email">
            Email
          </label>
          <div className={s.formText}>This is a required field</div>
        </div>
        <div className={s.formItem}>
          <input
            className={s.formInput}
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            id="password"
            // required
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="The password cannot be less than 8 characters ????"
            // title="The password cannot be less than 8 characters and must contain at least one number, one lowercase, and one uppercase Latin letter. For example - Butterfly01"
            onChange={handleChange}
          />
          <label className={s.formLabel} htmlFor="password">
            Password
          </label>
          <div className={s.formText}>This is a required field</div>
        </div>

        <div className={s.btnGroup}>
          <button
            type="submit"
            className={s.btn}
            onClick={() => navigate('/home')}
            // onClick={handleSubmit}
          >
            log in
          </button>
          <button type="button" className={s.btn} onClick={onRegistration}>
            Registration
          </button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};
