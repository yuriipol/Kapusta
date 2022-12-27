import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logInGoogle } from '../../redux/auth/auth-operations';
import Header from '../../components/Header/Header';
import Balance from 'components/Balance/Balance';
import Calendar from 'components/Calendar/Calendar';
import Accordion from 'components/Accordion/Accordion';
import Product from 'components/Product/Product';
import Modal from 'components/Modal/Modal';
import TableForMobile from '../../components/Table/TableForMobile';

import useResizeScreen from 'shared/hooks/useResizeScreen';
import reworkDataSelect from 'shared/helpers/reworkSelectData';

import { trasactionIncome, trasactionExpense, trasactionAll, trasactionCategoryIncome, trasactionCategoryExpense } from 'shared/api/transactions-api';

import Chart from '../../shared/images/HomePage/chart.svg';
import s from './HomePage.module.scss';

const HomePage = ({ startDate, setStartDate }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const { isMobile } = useResizeScreen();

  const [isExpense, setIsExpense] = useState(true);
  const [dataIncome, setDataIncome] = useState({})
  const [dataExpense, setDataExpense] = useState({})
  const [dataAllTransaction, setDataAllTransaction] = useState([])
  const [typeTransaction, setTypeTransaction] = useState('')
  const [categoryIncomeList, setCategoryIncomeList] = useState([])
  const [categoryExpensesList, setCategoryExpensesList] = useState([])
  const changeBudgetype = isExpense ? "Expense" : 'Income'

  const toggleIsExpanse = () => {
    setIsExpense(!isExpense)
  }

  useEffect(() => {
    try {
      const transactionFeth = async () => {
        const dataCategoriesIncome = await trasactionCategoryIncome()
        const newDateIncome = reworkDataSelect(dataCategoriesIncome)
        setCategoryIncomeList(newDateIncome)
        const dataCategoriesExpense = await trasactionCategoryExpense()
        const newDateExpense = reworkDataSelect(dataCategoriesExpense)
        setCategoryExpensesList(newDateExpense)
        const resultAllTrans = await trasactionAll()
        setDataAllTransaction(resultAllTrans.allTransactions)


        if (isExpense) {
          const resultExpense = await trasactionExpense()
          setDataExpense(resultExpense)
        } else {
          const resultIncome = await trasactionIncome()
          setDataIncome(resultIncome)
        }
      }

      transactionFeth()
    } catch (error) {
      console.log(error.message);
    }
  }, [isExpense]);

  useEffect(() => {
    if (token) {
      dispatch(logInGoogle({ email, token }));
    }
  }, [token, email, dispatch]);

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);

  };
  const onClickBtnTypeMobile = (e) => {
    const btnText = e.target.innerText
    onClickToggleModal()
    setTypeTransaction(btnText)
  }
  const props = { isExpense, dataIncome, setDataIncome, dataExpense, setDataExpense, dataAllTransaction, setDataAllTransaction, changeBudgetype, toggleIsExpanse, categoryIncomeList, categoryExpensesList }

  if (isMobile) {
    return (
      <>
        <Header />
        <div className={s.background}>
          <div className="container">
            <div className={s.wrapper}>
              <Link to="/reports" className={s.text}>
                Reports
              </Link>
              <img className={s.chart} src={Chart} alt="Chart" />
            </div>
            <Balance />
            <Calendar startDate={startDate} setStartDate={setStartDate} />
          </div>
        </div>
        <TableForMobile props={props} />
        <div className={s.btn}>
          <button
            className={s.button}
            type="button"
            onClick={onClickBtnTypeMobile}
          >
            Expenses
          </button>
          <button
            className={s.button}
            type="button"
            onClick={onClickBtnTypeMobile}
          >
            Income
          </button>
        </div>
        {isOpenModal && (
          <Modal close={onClickToggleModal}>
            <Product startDate={startDate} typeTransaction={typeTransaction} closeModal={onClickToggleModal} categoryIncomeList={categoryIncomeList} categoryExpensesList={categoryExpensesList} setDataAllTransaction={setDataAllTransaction} />
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={s.background}>
        <div className={s.HomeContainer}>
          <Balance />
          <div className={s.wrapper}>
            <Link to="/reports" className={s.text}>
              Reports
            </Link>
            <img className={s.chart} src={Chart} alt="Chart" />
          </div>
        </div>
        <Accordion startDate={startDate} setStartDate={setStartDate} props={props} />
      </div>
      <div className={s.kapusta}></div>
    </>
  );
};

export default HomePage;
