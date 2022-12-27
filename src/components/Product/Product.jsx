import { useState } from 'react';
import Calculator from '../../shared/images/HomePage/calculator.svg';
import CreatableSelect from 'react-select/creatable';



import { postTrasactionExpense, postTrasactionIncome, trasactionAll } from 'shared/api/transactions-api';

import s from './Product.module.scss';

const Product = ({ startDate, typeTransaction, closeModal, categoryIncomeList, categoryExpensesList, setDataAllTransaction }) => {
  const [state, setState] = useState({
    amount: '',
    category: '',
    description: '',
    date: startDate
  });

  const { amount, description } = state;
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
    console.log(value);
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
  const transactionAllFetch = async () => {
    const dateTransactionAll = await trasactionAll()

    setDataAllTransaction(dateTransactionAll.allTransactions)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (typeTransaction === 'INCOME') {
      postTrasactionIncome(state)
    }
    if (typeTransaction === 'EXPENSES') {
      postTrasactionExpense(state)
    }
    transactionAllFetch()
    reset();
    closeModal()
  };

  const reset = () => {
    setState({
      ...state, amount: '',
      category: '',
      description: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          onChange={handleChange}
          type="text"
          name="description"
          value={description}
          placeholder="Product description"
        />
        <div className={s.select}>
          <CreatableSelect
            onChange={handleSelect}
            className={'product-select'}
            classNamePrefix={'custom'}
            placeholder="Product category"
            options={typeTransaction === 'EXPENSES' ? categoryExpensesList : categoryIncomeList}
            name="category"
          />
        </div>
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
      <div className={s.groupBtn}>
        <button type="submit" className={s.btn}>
          Input
        </button>
        <button className={s.btn} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Product;
