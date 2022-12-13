import Vector from '../../shared/images/HomePage/vector.svg';
import s from './Product.module.scss';

const Product = () => {
  return (
    <div className={s.background}>
      <p className={s.text}>Product description</p>
      <p className={s.text}>Product category</p>
      <img className={s.vector} src={Vector} alt="Vector" />
    </div>
  );
};

export default Product;
