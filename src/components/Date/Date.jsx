import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../../shared/images/HomePage/calendar.png';
import s from './Date.module.scss';

const Date = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={s.date}>
      <img className={s.calendar} src={Calendar} alt="Calendar" />
      <DatePicker
        className={s.DatePicker}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};

export default Date;
