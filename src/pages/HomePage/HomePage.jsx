import { useState } from 'react';

import Balance from 'components/Balance/Balance';
import Calendar from 'components/Calendar/Calendar';
import Accordion from 'components/Accordion/Accordion';
import Product from 'components/Product/Product';
import Summary from 'components/Summary/Summary';
import Modal from 'components/Modal/Modal';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import Chart from '../../shared/images/HomePage/chart.svg';
import s from './HomePage.module.scss';

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const mediaSize = useResizeScreen();
  const { isMobile } = mediaSize;

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  if (isMobile) {
    return (
      <>
        <div className={s.background}>
          <div className="container">
            <div className={s.wrapper}>
              <p className={s.text}>Reports</p>
              <img className={s.chart} src={Chart} alt="Chart" />
            </div>
            <Balance />
            <Calendar />
          </div>
        </div>
        <div className={s.btn}>
          <button
            className={s.button}
            type="button"
            onClick={onClickToggleModal}
          >
            Expenses
          </button>
          <button
            className={s.button}
            type="button"
            onClick={onClickToggleModal}
          >
            Income
          </button>
        </div>
        {isOpenModal && (
          <Modal close={onClickToggleModal}>
            <Product />
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <div className={s.background}>
        <div className="container">
          <div className={s.wrapper}>
            <p className={s.text}>Reports</p>
            <img className={s.chart} src={Chart} alt="Chart" />
          </div>
          <Balance />
        </div>
        <Accordion />
      </div>
      <Summary />
    </>
  );
};

export default HomePage;
