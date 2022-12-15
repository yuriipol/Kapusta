// import Vector from '../../shared/images/HomePage/vector.svg';
import Calculator from '../../shared/images/HomePage/calculator.svg';

import CreatableSelect from 'react-select/creatable';
// import { css } from 'emotion';
// import { colourOptions } from '../data';

// export default () => <CreatableSelect isClearable options={colourOptions} />;
import s from './Product.module.scss';

const Product = () => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // color: state.isSelected ? 'yellow' : 'black',
      // backgroundColor: state.isSelected ? 'white' : 'orange',
    }),
    control: provided => ({
      ...provided,
      marginTop: '0%',
      marginLeft: '16px',
      width: '280px',
      height: '44px',
      background: 'transparent',
      borderColor: '#ffffff',
      border: '2px solid #ffffff',
      borderRadius: '0px 0px 10px 0px',
    }),
  };

  return (
    <>
      <div className={s.background}>
        <input
          className={s.descriptionInput}
          type="text"
          placeholder="Product description"
        />
        <CreatableSelect
          className={s.select}
          styles={customStyles}
          placeholder="Product category"
        />

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
