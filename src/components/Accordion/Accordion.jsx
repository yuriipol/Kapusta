import { useState, useEffect } from 'react';
import Calendar from 'components/Calendar/Calendar';
import Product from 'components/Product/Product';
import Income from '../Income/Income'

import s from './Accordion.module.scss';

const Accordion = () => {
  const [isShow, setIsShow] = useState('product');

  useEffect(() => {
    // запит за даними
  }, [isShow]);

  return (
    // {isShow && }
    <div className={s.expenses_income_wrapper}>
      <div className={s.buttons_wrapper}>
        <button className={s.expenses} type="button" onClick={() => setIsShow(true)}>
          Expenses
        </button>
        <button className={s.income} type="button" onClick={() => setIsShow(false)}>
          Income
        </button>
      </div>

      {isShow ? 
      <Income />
      :
      <Income />
      }
    </div>
  );
};

export default Accordion;
