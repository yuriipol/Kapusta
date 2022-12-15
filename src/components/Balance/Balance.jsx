import s from './Balance.module.scss';
const Balance = () => {
  return (
    <form className={s.form}>
      <p className={s.text}>Balance:</p>
      <div className={s.wrapper}>
        <input
          type="number"
          title="Hello! To get started, enter the current balance of your account!"
          placeholder="00.00 UAN"
          className={s.input}
        />
        <button className={s.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Balance;
