import { useState, useEffect } from 'react';
import Calendar from 'components/Calendar/Calendar';
import Product from 'components/Product/Product';

import s from './Accordion.module.scss';

const Accordion = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    // запит за даними
  }, [isShow]);

  const clickBtn = () => {
    setIsShow(!isShow);
  };
  return (
    // {isShow && }
    <div>
      <button className={s.expences} type="button" onClick={clickBtn}>
        Expenses
      </button>
      <button className={s.income} type="button" onClick={clickBtn}>
        Income
      </button>
      {isShow ? (
        <div className={s.wrapper}>
          <Calendar />
          <Product />
        </div>
      )
      :
      <div>qwerty</div>
      }
    </div>
  );
};

export default Accordion;
