import Chart from '../../shared/images/HomePage/chart.png';
import Date from 'components/Date/Date';
import s from './HomePage.module.scss';

const HomePage = () => {
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
        </div>
        <Date />
      </section>
      <div className={s.btn}>
        <button className={s.button}>Expenses</button>
        <button className={s.button}>Income</button>
      </div>
    </>
  );
};

export default HomePage;
