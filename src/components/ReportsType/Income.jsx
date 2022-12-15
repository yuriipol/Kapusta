import s from './ReportsType.module.scss'

const Income = () => {
    return (
        <ul className={s.category_list}>
            <li className={s.category_item}>
              <p>45 000.00</p>
              <p>Salary</p>
            </li>
            <li className={s.category_item}>
              <p>1 500.00</p>
              <p>Add. income</p>
            </li>
        
          </ul>
    );
}

export default Income;