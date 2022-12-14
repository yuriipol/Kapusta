import Vector from '../../shared/images/HomePage/vector.svg';
import s from './Product.module.scss';

const Product = () => {
  return (
    <>
      <div className={s.background}>
        <input type="text" placeholder="Product description" />
        <input type="text" placeholder="Product category" />
        <img className={s.vector} src={Vector} alt="Vector" />
      </div>
      <button className={s.btn}>Input</button>
      <button className={s.btn}>Clear</button>
    </>
  );
};

export default Product;
