import { ReactComponent as Back } from '../../shared/images/ReportsImages/back.svg';
import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';

import s from './ReportsPage.module.scss';
const ReportsPage = () => {
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
    </div>
  );
};

export default ReportsPage;
