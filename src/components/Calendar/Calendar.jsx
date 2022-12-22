import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Icon from '../../shared/images/HomePage/calendar.svg';
import s from './Calendar.module.scss';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={s.date}>
      <img className={s.calendar} src={Icon} alt="Calendar" />
      <DatePicker
        className={s.DatePicker}
        popperClassName={s.popper}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};

export default Calendar;
