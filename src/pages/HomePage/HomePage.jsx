import Chart from '../../shared/images/HomePage/chart.png';
import Calendar from 'components/Calendar/Calendar';
import Accordion from 'components/Accordion/Accordion';
import s from './HomePage.module.scss';
import Header from 'components/Header/Header';

const HomePage = () => {
  return (
    <>
    <Header></Header>
      <section className={s.section}>
        <div className="container">
          <div className={s.wrapper}>
            <p className={s.text}>Reports</p>
            <img className={s.chart} src={Chart} alt="Chart" />
          </div>
          <p className={s.text}>Balance:</p>
          <button className={s.balance}>55000.00 UAN</button>
          <button className={s.confirm}>Confirm</button>
        </div>
        <Calendar />
      </section>
      <div className={s.btn}>
        <button className={s.button}>Expenses</button>
        <button className={s.button}>Income</button>
      </div>
      <Accordion />
    </>
  );
};

export default HomePage;
