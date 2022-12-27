import Income from '../Income/Income';

import s from './Accordion.module.scss';

const Accordion = ({ startDate, setStartDate, props }) => {
  const { isExpense, dataIncome, dataExpense, changeBudgetype, toggleIsExpanse } = props

  return (
    <div className={s.expenses_income_wrapper}>
      <div className={s.buttons_wrapper}>
        <button
          className={isExpense ? `${s.expenses} ${s.active}` : s.expenses}
          type="button"
          onClick={() => toggleIsExpanse()}
        >
          Expenses
        </button>
        <button
          className={!isExpense ? `${s.expenses} ${s.active}` : s.expenses}
          type="button"
          onClick={() => toggleIsExpanse()}
        >
          Income
        </button>
      </div>

      <Income startDate={startDate} setStartDate={setStartDate} budgetType={changeBudgetype} transactionList={isExpense ? dataExpense : dataIncome} />

    </div>
  );
};

export default Accordion;
