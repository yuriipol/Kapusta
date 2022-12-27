import React from 'react';
import Table from '../Table/Table';
import Summary from 'components/Summary/Summary';
import Calendar from 'components/Calendar/Calendar';
import s from './Income.module.scss';
import ProductTablet from 'components/Product/ProductTablet';
import useResizeScreen from '../../shared/hooks/useResizeScreen';

const Income = ({ startDate, setStartDate, budgetType, transactionList, setDataIncome, setDataExpense, categoryIncomeList, categoryExpensesList }) => {
  const { isTablet } = useResizeScreen();


  if (isTablet) {
    return (
      <>
        <div className={s.income_Wrapper}>
          <div className={s.firstSection_Wrapper}>
            <Calendar startDate={startDate} setStartDate={setStartDate} />
            <ProductTablet startDate={startDate} budgetType={budgetType} setDataIncome={setDataIncome} setDataExpense={setDataExpense} categoryIncomeList={categoryIncomeList} categoryExpensesList={categoryExpensesList} />
          </div>
          <div className={s.test}>
            <Table transactionList={transactionList} budgetType={budgetType} setDataIncome={setDataIncome} setDataExpense={setDataExpense} />
          </div>
        </div>
        <Summary transactionList={transactionList} />
      </>
    );
  }
  return (
    <div className={s.income_Wrapper}>
      <div className={s.firstSection_Wrapper}>
        <Calendar startDate={startDate} setStartDate={setStartDate} />
        <ProductTablet startDate={startDate} budgetType={budgetType} setDataIncome={setDataIncome} setDataExpense={setDataExpense} categoryIncomeList={categoryIncomeList} categoryExpensesList={categoryExpensesList} />

      </div>
      <div className={s.secondSection_Wrapper}></div>
      <div className={s.tabSumWrapper}>
        <Table transactionList={transactionList} budgetType={budgetType} setDataIncome={setDataIncome} setDataExpense={setDataExpense} />
        <Summary transactionList={transactionList} />
      </div>
    </div>
  );
};

export default Income;
