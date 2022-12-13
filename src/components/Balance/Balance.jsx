import s from './Balance.module.scss';
const Balance = () => {
  return (
    <div className={s.group}>
      <p className={s.text}>Balance:</p>
      <button className={s.balance}>55000.00 UAN</button>
      <button className={s.confirm}>Confirm</button>
    </div>
  );
};

export default Balance;
