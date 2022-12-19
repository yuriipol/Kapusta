import { useState } from 'react';

import { ReactComponent as Bg } from '../../shared/images/ReportsImages/expenseType/bg.svg';
import { ReactComponent as AddIncome } from '../../shared/images/ReportsImages/incomeType/addIncome.svg';
import { ReactComponent as Salary } from '../../shared/images/ReportsImages/incomeType/salary.svg';

import s from './ReportsType.module.scss'

const Income = () => {
  const [category, setCategory] = useState('Salary')

  return (
    <ul className={s.category_list}>
      <li className={category === 'Salary' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Salary')}>
        <p className={s.category_price}>5 000.00</p>
        <div className={s.category_svg_box}>
          <AddIncome className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} />
        </div>
        <p className={s.category_name}>Salary</p>
      </li>
      <li className={category === 'Alcohol' ? `${s.category_item} ${s.active}` : `${s.category_item}`} onClick={() => setCategory('Alcohol')}>
        <p className={s.category_price}>200.00</p>
        <div className={s.category_svg_box}>
          <Salary className={s.category_svg_image} />
          <Bg className={s.category_svg_bg} /></div>
        <p className={s.category_name}>Alcohol</p>
      </li>
    </ul>
  );
}

export default Income;