import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Chart from '../../shared/images/HomePage/chart.png';
import Calendar from '../../shared/images/HomePage/calendar.png';

import s from './HomePage.module.scss';

const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <section className={s.section}>
        <div className="container">
          <div className={s.wrapper}>
            <p className={s.text}>Reports</p>
            <img className={s.chart} src={Chart} alt="Chart" />
          </div>
          <p className={s.text}>Balance:</p>
          <button className={s.balance}>55000.00 UAN</button>
          <button className={s.confirm}>Confirm</button>
          <div className={s.date}>
            <img className={s.calendar} src={Calendar} alt="Calendar" />
            <DatePicker
              className={s.DatePicker}
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="dd.MM.yyyy"
            />
          </div>
        </div>
      </section>
      <div className={s.btn}>
        <button className={s.button}>Expenses</button>
        <button className={s.button}>Income</button>
      </div>
    </>
  );
};

export default HomePage;
