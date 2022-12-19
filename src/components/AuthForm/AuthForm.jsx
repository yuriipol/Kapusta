import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { GoogleLogin } from 'react-google-login';
// import { gapi, loadAuth2 } from 'gapi-script';
import GoogleButton from 'react-google-button';

import { userInfo } from '../../shared/api/auth-api';
// import GoogleLogo from '../../shared/images/auth/google-symbol_lg.svg';
import { registerUser } from '../../redux/auth/auth-operations';
// import { googleLogin, googleGetData } from '../../shared/api/auth-api';
import s from './AuthForm.module.scss';

// const BASE_URL = 'http://localhost:4040';
const GOOGLE_CLIENT_ID =
  '317994541483-4vvq63m12csjfr2hter6k9g0aq7vcaog.apps.googleusercontent.com';
// const scopes = 'http://localhost:4040/api/auth/users/google';

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [profile, setProfile] = useState([]);
  function handleGoogle(res) {
    console.log('res.credential', res.credential);
  }
  // useEffect(() => {
  //   window.google.accounts.id.initialize({
  //     client_id: GOOGLE_CLIENT_ID,
  //     callback: handleGoogle,
  //   });
  //   window.google.accounts.id.renderButton(
  //     document.getElementById('signUpDiv'),
  //     {
  //       type: 'standard',
  //       theme: 'filled_black',
  //       size: 'small',
  //       text: 'signin',
  //       shape: 'pill',
  //     }
  //   );
  // }, []);

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

  async function onGoogleRetistrationClick(event) {
    // event.preventDefault();
    // googleLogin();
    // googleGetData();
    // console.log('resuln-onGoogleRetistrationClick', resuln);
    // navigate('/home');
  }

  // const onSuccess = res => {
  //   setProfile(res.profileObj);
  //   console.log(profile);
  // };
  // const onFailure = err => {
  //   console.log('failed:', err);
  // };

  const redirectOnGoogle = async () => {
    // let timer = null;
    const googleLoginURL = 'http://localhost:4040/api/auth/users/google';

    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500,height=600'
    );

    if (newWindow) {
      setTimeout(() => {
        userInfo();
        newWindow.close();
      }, 1000);
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.textUp}> You can log in with your Google Account:</p>

        <GoogleButton
          onClick={redirectOnGoogle}
          style={{
            // borderRadius: 14,
            backgroundColor: 'red',
            color: 'white',
          }}
        />
        {/* <a
          // id="signUpDiv"
          href="http://localhost:4040/api/auth/users/google/callback"
          // rel="noopener noreferrer"
          // target="_blank"
          className={s.link}
          onClick={onGoogleRetistrationClick}
        >
          <img className={s.googleIcon} src={GoogleLogo} alt="Google Logo" />
          Google
        </a> */}
        {/* <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={renderProps => (
            <button
              type="button"
              className={s.link}
              onClick={() => {
                renderProps.onClick();
                // googleLogin();
              }}
              disabled={renderProps.disabled}
            >
              <img
                className={s.googleIcon}
                src={GoogleLogo}
                alt="Google Logo"
              />
              Google
            </button>
          )}
          buttonText="Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        /> */}

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
