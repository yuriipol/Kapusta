import { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';
import Summary from 'components/Summary/Summary';
import s from './Accordion.module.scss';

const Accordion = () => {
  const [isShow, setIsShow] = useState(false);

  const clickBtn = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button type="button" onClick={clickBtn}>
        Expenses
      </button>
      <button type="button" onClick={clickBtn}>
        Income
      </button>
      {isShow && (
        <div>
          <Calendar />
          <p>Product description</p>
          <button className={s.btn}>Input</button>
          <button className={s.btn}>Clear</button>
        </div>
      )}
      <Summary />
    </div>
  );
};

export default Accordion;
