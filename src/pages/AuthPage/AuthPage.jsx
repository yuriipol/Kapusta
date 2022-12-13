import AuthForm from '../../components/AuthForm/AuthForm';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <>
      <div className={s.section}>
        {/* <div className="container"> */}
        <div className={s.wrapper}>
          <div className={s.titleGroup}>
            <h1 className={s.title}>
              Kapu<span className={s.titleSpan}>$</span>ta
            </h1>
            <p className={s.titleText}>Smart Finance</p>
          </div>
        </div>
        <div className={s.helper}></div>

        <AuthForm />
        {/* </div> */}
      </div>
    </>
  );
};
export default AuthPage;
