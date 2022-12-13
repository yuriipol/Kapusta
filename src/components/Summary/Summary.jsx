import s from './Summary.module.scss';

const Summary = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>Summary</p>
      <ul>
        <li className={s.month}>December</li>
        <li className={s.month}>November</li>
        <li className={s.month}>October</li>
        <li className={s.month}>September</li>
        <li className={s.month}>Augest</li>
        <li className={s.month}>July</li>
      </ul>
    </div>
  );
};

export default Summary;
