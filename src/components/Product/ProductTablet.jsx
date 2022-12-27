import { useState } from 'react';

import Calculator from '../../shared/images/HomePage/calculator.svg';
import CreatableSelect from 'react-select/creatable';

import { trasactionExpense, trasactionIncome, postTrasactionIncome, postTrasactionExpense } from 'shared/api/transactions-api';

import s from './Product.module.scss';

const ProductTable = ({ startDate, budgetType, categoryIncomeList, categoryExpensesList, setDataIncome, setDataExpense }) => {
  const [state, setState] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  const { amount, description } = state;
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSelect = e => {
    if (e === null) {
      setState(prevState => ({
        ...prevState,
        category: '',
      }));
      return;
    }
    const { value } = e;
    setState(prevState => ({
      ...prevState,
      category: value,
    }));
  };
  const transactionFetch = async () => {
    if (budgetType !== 'Expense') {
      const dateIncome = await trasactionIncome()
      setDataIncome(dateIncome)
      console.log(`HELLO`, dateIncome);
    }
    if (budgetType === 'Expense') {
      const dateExpense = await trasactionExpense()
      setDataExpense(dateExpense)
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newState = {
      ...state,
      date: startDate,
      amount: Number(state.amount)
    }

    const fetchPostTransacrion = async () => {
      if (budgetType !== 'Expense') {
        await postTrasactionIncome(newState)
      }
      if (budgetType === 'Expense') {
        await postTrasactionExpense(newState)
      }
      transactionFetch()
    }

    fetchPostTransacrion()
    reset();

  };

  const reset = () => {
    setState({
      ...state, amount: "",
      category: '',
      description: '',
    });
  };
  return (
    <form className={s.second_form} onSubmit={handleSubmit}>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          onChange={handleChange}
          type="text"
          name="description"
          value={description}
          placeholder="Product description"
        />
        <CreatableSelect
          onChange={handleSelect}
          className={'product-select'}
          classNamePrefix={'custom'}
          placeholder="Product category"
          options={budgetType === 'Expense' ? categoryExpensesList : categoryIncomeList}
          name="category"
        />
        <div className={s.wrapper}>
          <input
            className={s.calculatorInput}
            onChange={handleChange}
            type="number"
            name="amount"
            value={amount}
            placeholder="00.00 UAH"
          />
          <div className={s.image}>
            <img className={s.calculator} src={Calculator} alt="Calculator" />
          </div>
        </div>

      </div>
      <div className={s.btn_second_wrapper}>
        <button type="submit" className={s.btn_second}>Input</button>
        <button className={s.btn_second}>Clear</button>
      </div>
    </form>
  );
};

export default ProductTable;
