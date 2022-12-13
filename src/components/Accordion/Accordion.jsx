import { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';

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
          <button>Input</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
