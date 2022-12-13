import { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';
import Product from 'components/Product/Product';

import s from './Accordion.module.scss';

const Accordion = () => {
  const [isShow, setIsShow] = useState(true);

  const clickBtn = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button className={s.expences} type="button" onClick={clickBtn}>
        Expenses
      </button>
      <button className={s.income} type="button" onClick={clickBtn}>
        Income
      </button>
      {isShow && (
        <div>
          <Calendar />
          <Product />
          <button className={s.btn}>Input</button>
          <button className={s.btn}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
