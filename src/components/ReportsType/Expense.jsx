import s from './ReportsType.module.scss'

const Expense = () => {
    return (
        <ul className={s.category_list}>
            <li className={s.category_item}>
              <p>5 000.00</p>
              <p>Products</p>
            </li>
            <li className={s.category_item}>
              <p>200.00</p>
              <p>Alcohol</p>
            </li>
            <li className={s.category_item}>
              <p>800.00</p>
              <p>Entertainment</p>
            </li>
            <li className={s.category_item}>
              <p>900.00</p>
              <p>Health</p>
            </li>
            <li className={s.category_item}>
              <p>2 000.00</p>
              <p>Transport</p>
            </li>
            <li className={s.category_item}>
              <p>1 500.00</p>
              <p>Housing</p>
            </li>
            <li className={s.category_item}>
              <p>800.00</p>
              <p>Technique</p>
            </li>
            <li className={s.category_item}>
              <p>2 200.00</p>
              <p>Communal, communication</p>
            </li>
            <li className={s.category_item}>
              <p>1 800.00</p>
              <p>Sports, hobbies</p>
            </li>
            <li className={s.category_item}>
              <p>2 400.00</p>
              <p>Education</p>
            </li>
            <li className={s.category_item}>
              <p>3 000.00</p>
              <p>Other</p>
            </li>
           
          </ul>
    );
}

export default Expense;