import { useState } from 'react';
import Date from 'components/Date/Date';

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
          <Date />
        </div>
      )}
    </div>
  );
};

export default Accordion;
