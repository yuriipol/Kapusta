import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsersBalance } from 'redux/user/user-operations';

import s from './Balance.module.scss';

const Balance = () => {
  const [state, setState] = useState({
    balance: '',
  });
  const { balance } = state;
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
    console.log(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
    dispatch(updateUsersBalance(state));
    reset();
  };

  const reset = () => {
    setState({ balance: '' });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <p className={s.text}>Balance:</p>
      <div className={s.wrapper}>
        <input
          type="number"
          name="balance"
          value={balance}
          title="Hello! To get started, enter the current balance of your account!"
          placeholder="00.00 UAN"
          className={s.input}
          onChange={handleChange}
          required
        />
        <button type="submit" className={s.confirm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Balance;
