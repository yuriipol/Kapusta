import { useState } from 'react';

import { ReactComponent as Alcohol } from '../../shared/images/ReportsImages/expenseType/alcohol.svg';
import { ReactComponent as Bg } from '../../shared/images/ReportsImages/expenseType/bg.svg';
import { ReactComponent as Communal } from '../../shared/images/ReportsImages/expenseType/communal.svg';
import { ReactComponent as Education } from '../../shared/images/ReportsImages/expenseType/education.svg';
import { ReactComponent as Entertaiment } from '../../shared/images/ReportsImages/expenseType/entertaiment.svg';
import { ReactComponent as Health } from '../../shared/images/ReportsImages/expenseType/health.svg';
import { ReactComponent as Hobbies } from '../../shared/images/ReportsImages/expenseType/hobbies.svg';
import { ReactComponent as Housing } from '../../shared/images/ReportsImages/expenseType/housing.svg';
import { ReactComponent as Other } from '../../shared/images/ReportsImages/expenseType/other.svg';
import { ReactComponent as Product } from '../../shared/images/ReportsImages/expenseType/product.svg';
import { ReactComponent as Technique } from '../../shared/images/ReportsImages/expenseType/technique.svg';
import { ReactComponent as Transport } from '../../shared/images/ReportsImages/expenseType/transport.svg';

import s from './ReportsType.module.scss'



const Expense = () => {
  const [category, setCategory] = useState('Products')

  return (
    <ul className={s.category_list}>
      <li className={category === 'Products' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Products')}>
        <p className={s.category_price}>5 000.00</p>
        <div className={s.category_svg_box}>
          <Product className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} />
        </div>
        <p className={s.category_name}>Products</p>
      </li>
      <li className={category === 'Alcohol' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Alcohol')}>
        <p className={s.category_price}>200.00</p>
        <div className={s.category_svg_box}>
          <Alcohol className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Alcohol</p>
      </li>
      <li className={category === 'Entertainment' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Entertainment')}>
        <p className={s.category_price}>800.00</p>
        <div className={s.category_svg_box}>
          <Entertaiment className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Entertainment</p>
      </li>
      <li className={category === 'Health' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Health')}>
        <p className={s.category_price}>900.00</p>
        <div className={s.category_svg_box}>
          <Health className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Health</p>
      </li>
      <li className={category === 'Transport' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Transport')}>
        <p className={s.category_price}>2 000.00</p>
        <div className={s.category_svg_box}>
          <Transport className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Transport</p>
      </li>
      <li className={category === 'Housing' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Housing')}>
        <p className={s.category_price}>1 500.00</p>
        <div className={s.category_svg_box}>
          <Housing className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Housing</p>
      </li>
      <li className={category === 'Technique' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Technique')}>
        <p className={s.category_price}>800.00</p>
        <div className={s.category_svg_box}>
          <Technique className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Technique</p>
      </li>
      <li className={category === 'Communal' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Communal')}>
        <p className={s.category_price}>2 200.00</p>
        <div className={s.category_svg_box}>
          <Communal className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Communal, communication</p>
      </li>
      <li className={category === 'hobbies' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('hobbies')}>
        <p className={s.category_price}>1 800.00</p>
        <div className={s.category_svg_box}>
          <Hobbies className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Sports, hobbies</p>
      </li>
      <li className={category === 'Education' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Education')}>
        <p className={s.category_price}>2 400.00</p>
        <div className={s.category_svg_box}>
          <Education className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Education</p>
      </li>
      <li className={category === 'Other' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Other')}>
        <p className={s.category_price}>3 000.00</p>
        <div className={s.category_svg_box}>
          <Other className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Other</p>
      </li>

    </ul>
  );
}

export default Expense;