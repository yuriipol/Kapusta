// import Vector from '../../shared/images/HomePage/vector.svg';
import Calculator from '../../shared/images/HomePage/calculator.svg';
import CreatableSelect from 'react-select/creatable';
import options from '../../shared/options';

import s from './Product.module.scss';

const Product = () => {
  return (
    <>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          type="text"
          placeholder="Product description"
        />
        <div className={s.select}>
          <CreatableSelect
            className={'product-select'}
            classNamePrefix={'custom'}
            placeholder="Product category"
            options={options}
          />
        </div>

        {/* <img className={s.vector} src={Vector} alt="Vector" /> */}
        <div className={s.wrapper}>
          <input
            className={s.calculatorInput}
            type="number"
            placeholder="00.00 UAH"
          />
          <div className={s.image}>
            <img className={s.calculator} src={Calculator} alt="Calculator" />
          </div>
        </div>
      </div>
      <div className={s.groupBtn}>
        <button className={s.btn}>Input</button>
        <button className={s.btn}>Clear</button>
      </div>
    </>
  );
};

export default Product;
