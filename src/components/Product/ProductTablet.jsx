import Calculator from '../../shared/images/HomePage/calculator.svg';
import CreatableSelect from 'react-select/creatable';
import options from '../../shared/options';
import s from './Product.module.scss';

const Product_Table = () => {
  return (
    <>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          type="text"
          placeholder="Product description"
        />
        <CreatableSelect
          className={'product-select'}
          classNamePrefix={'custom'}
          placeholder="Product category"
          options={options}
        />
        <div className={s.wrapper}>
          <input
            className={s.calculatorInput}
            type="number"
            placeholder="00.0"
          />
          <div className={s.image}>
            <img className={s.calculator} src={Calculator} alt="Calculator" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Table;
