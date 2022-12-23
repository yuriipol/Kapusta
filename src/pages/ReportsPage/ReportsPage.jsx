
import { useState } from "react"
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

import { ReactComponent as Back } from '../../shared/images/ReportsImages/back.svg';

import Balance from "components/Balance/Balance";
import DateResults from "components/DateResults/DateResults";
import BudgetResults from "components/BudgetResults/BudgetResults";
import CategoryResults from "components/CategoryResults/CategoryResults";

import Charts from "components/Charts/Charts";

import useResizeScreen from "shared/hooks/useResizeScreen";

import s from './ReportsPage.module.scss';

const data = [
  {
    name: 'Pork',
    price: 5000,
  },
  {
    name: 'Beef',
    price: 4500,
  },
  {
    name: 'Chiken',
    price: 3200,
  },
  {
    name: 'Fish',
    price: 2100,
  },
  {
    name: 'Panini',
    price: 1800,
  },
  {
    name: 'Coffee',
    price: 1700,
  },
  {
    name: 'Spaghetti',
    price: 1500,
  },
  {
    name: 'Chocolate',
    price: 800,
  },
  {
    name: 'Olives',
    price: 500,
  },
  {
    name: 'Greens',
    price: 300,
  },
];

const ReportsPage = ({ startDate }) => {
  const [monthsReports, setMonthsReports] = useState(new Date(startDate))
  const navigate = useNavigate()

  const { isMobile, isDesctop } = useResizeScreen()

  return (
    <div className={s.reportsContainer}>
      <div className={s.reportsNav}>

        {!isMobile && <button type="button" className={s.buttonBack} onClick={() => navigate('/home')}>
          <Back className={s.buttonBackArrow} />
          {!isMobile && 'Main page'}
        </button>}

        {isDesctop ? <Balance /> :
          <div className={s.balance_wrapper}>
            <p className={s.balance_text}>Balance:</p><p className={s.balance_amount}>55 000.00 UAH</p>
          </div>}

        <DateResults dateValue={monthsReports} setDateValue={setMonthsReports} />

        {isMobile && <button type="button" className={s.buttonBack}>
          <Back className={s.buttonBackArrow} />
          {!isMobile && 'Main page'}
        </button>}

      </div>

      <BudgetResults />

      <CategoryResults />

      {isMobile ? <Charts chartdata={data} /> : <div className={s.budget_chart_box}>
        <Charts chartdata={data} />
      </div>}

    </div>
  );
};

export default ReportsPage;
