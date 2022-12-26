import PropTypes from 'prop-types';
import { useState, useEffect } from "react"
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

import { ReactComponent as Back } from '../../shared/images/ReportsImages/back.svg';

import Balance from "components/Balance/Balance";
import DateResults from "components/DateResults/DateResults";
import BudgetResults from "components/BudgetResults/BudgetResults";
import CategoryResults from "components/CategoryResults/CategoryResults";
import Charts from "components/Charts/Charts";

import { periodDate } from "shared/api/transactions-api";

import useResizeScreen from "shared/hooks/useResizeScreen";
import reworkData from "shared/helpers/reworkDataAtFetch";

import { initialChartsArr } from "./initialState";

import s from './ReportsPage.module.scss';

const ReportsPage = ({ startDate }) => {
  const [monthsDateReports, setmonthsDateReports] = useState(new Date(startDate))
  const [dataMonths, setDataMonths] = useState({})
  const [dataChatrs, setDataCharts] = useState(initialChartsArr)
  const navigate = useNavigate()
  const { isMobile, isDesctop } = useResizeScreen()

  const date = `${monthsDateReports.getFullYear()}-${monthsDateReports.getMonth() + 1}`

  useEffect(() => {
    const fetchData = async (date) => {
      const result = await periodDate(date)
      const newDada = reworkData(result)
      setDataMonths(newDada)
    }

    fetchData(date)
  }, [date])

  const dataCharts = (descr) => {
    setDataCharts(descr)
  }


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

        <DateResults dateValue={monthsDateReports} setDateValue={setmonthsDateReports} />

        {isMobile && <button type="button" className={s.buttonBack} onClick={() => navigate('/home')}>
          <Back className={s.buttonBackArrow} />
          {!isMobile && 'Main page'}
        </button>}
      </div>

      <BudgetResults data={dataMonths} />

      <CategoryResults data={dataMonths} typeFunc={dataCharts} />


      {isMobile ? <Charts chartdata={dataChatrs} /> : <div className={s.budget_chart_box}>
        <Charts chartdata={dataChatrs} />
      </div>}

    </div>
  );
};

ReportsPage.propTypes = {
  startDate: PropTypes.instanceOf(Date),
}

export default ReportsPage;
