import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Calculator from '../../shared/images/HomePage/calculator.svg';
import CreatableSelect from 'react-select/creatable';
import options from '../../shared/options';

import s from './Product.module.scss';

const Product = () => {
  const [state, setState] = useState({
    amount: '',
    product: '',
    description: '',
  });

  const { amount, product } = state;
  // const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
    console.log(value);
  };

  const handleSelect = event => {
    console.log(event.target.value);
    setState({
      ...state,
      description: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(state);

    reset();
  };

  const reset = () => {
    setState({ amount: '', product: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          onChange={handleChange}
          type="text"
          name="product"
          value={product}
          placeholder="Product description"
        />
        <div className={s.select}>
          <CreatableSelect
            onChange={handleSelect}
            className={'product-select'}
            classNamePrefix={'custom'}
            placeholder="Product category"
            options={options}
            name="description"
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
