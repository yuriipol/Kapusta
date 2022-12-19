import { useState } from "react"
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

import { ReactComponent as Back } from '../../shared/images/ReportsImages/back.svg';
import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';

import Expense from "components/ReportsType/Expense";
import Income from "components/ReportsType/Income";
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

const ReportsPage = () => {
  const [isExpanse, setIsExpanse] = useState(true)
  const navigate = useNavigate()

  const { isMobile } = useResizeScreen()

  const toggleIsExpanse = () => {
    setIsExpanse(!isExpanse)
  }

  const changeBudgetype = isExpanse ? "Expanse" : 'Income'

  return (
    <div className={s.reportsContainer}>
      <div className={s.reportsNav}>
        {!isMobile && <button type="button" className={s.buttonBack} onClick={() => navigate('/home')}>
          <Back className={s.buttonBackArrow} />
          {!isMobile && 'Main page'}
        </button>}

        <div className={s.balance_wrapper}>
          <p className={s.balance_text}>Balance:</p><p className={s.balance_amount}>55 000.00 UAH</p>
        </div>
        <div className={s.currentPeriod}>
          <p className={s.currentPeriodText}>Current period:</p>
          <div className={s.currentPeriod_month}>
            <button type="button" className={s.buttonPeriod}>
              <VectorLeft className={s.buttonPeriod_svg} />
            </button>
            <p className={s.monthText}>December 2022</p>
            <button type="button" className={s.buttonPeriod}>
              <VectorRight className={s.buttonPeriod_svg} />
            </button>
          </div>
        </div>
        {isMobile && <button type="button" className={s.buttonBack}>
          <Back className={s.buttonBackArrow} />
          {!isMobile && 'Main page'}
        </button>}
      </div>

      <div className={s.budget}>
        <p className={s.budgetText}>Expenses:<span className={s.budgetText_expanse}>- 18 000.00 UAH.</span></p>
        <p className={s.budgetText}>Income:<span className={s.budgetText_income}>+ 45 000.00 UAH.</span></p>
      </div>

      <div className={s.budget_category}>
        <div className={s.budget_category_type}>
          <button type="button" className={s.buttonPeriod} onClick={toggleIsExpanse}>
            <VectorLeft className={s.buttonPeriod_svg} />
          </button>
          <p className={s.budget_category_text}>{changeBudgetype}</p>
          <button type="button" className={s.buttonPeriod} onClick={toggleIsExpanse}>
            <VectorRight className={s.buttonPeriod_svg} />
          </button>
        </div>
        {isExpanse ? <Expense /> : <Income />}
      </div>


      {isMobile ? <Charts chartdata={data} /> : <div className={s.budget_chart_box}>
        <Charts chartdata={data} />
      </div>}


    </div>
  );
};

export default ReportsPage;
