import {useState} from "react" 

import { ReactComponent as Back } from '../../shared/images/ReportsImages/back.svg';
import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';

import Expense from "components/ReportsType/Expense";
import Income from "components/ReportsType/Income";

import s from './ReportsPage.module.scss';

const ReportsPage = () => {
  const [isExpanse, setIsExpanse] = useState(true)

  const toggleIsExpanse = () => {
    setIsExpanse(!isExpanse)
    
  }

  const changeBudgetype = isExpanse ? "Expanse" : 'Income'

  return (
    <div className={s.reportsContainer}>
      <div className={s.reportsNav}>
        <button type="button" className={s.buttonBack}>
          <Back className={s.buttonBackArrow} />
          Main page
        </button>
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
            <p className={s.budget_type}>{changeBudgetype}</p>
            <button type="button" className={s.buttonPeriod} onClick={toggleIsExpanse}>
              <VectorRight className={s.buttonPeriod_svg} />
            </button>
          </div>
          {isExpanse ? <Expense /> : <Income/>}
      </div>
    </div>
  );
};

export default ReportsPage;
