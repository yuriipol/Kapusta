// import PropTypes from 'prop-types';
import Basket from '../../shared/images/HomePage/delete.svg';
import s from './Table.module.scss';


const Table = ({ transactionList, budgetType }) => {
  const checkType = budgetType === "Expense"
  const dataTransaction = checkType ? transactionList?.expense : transactionList?.incomes

  const rows = dataTransaction?.map(({ date, description, category, amount, _id }) => {
    return (
      <tr key={_id} className={s.tRow}>
        <td className={s.tD_data}>{date}</td>
        <td className={s.tD_descr}>{description}</td>
        <td className={s.tD_categ}>{category}</td>
        <td className={checkType ? s.outcom : s.incom}>
          {checkType ? `- ${amount.toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}` : amount.toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
          <span className={checkType ? s.outcom : s.incom}>UAH.</span>
        </td>
        <td className={s.tD_bask}>
          <button type="button" className={s.helper}>
            <img className={s.basket} src={Basket} alt="basket" />
          </button>
        </td>
      </tr >
    );
  });
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead className={s.tableHead}>
          <tr className={s.tRow}>
            <th className={s.tHead}>Date</th>
            <th className={s.tHead}>Description</th>
            <th className={s.tHead__categ}>Category</th>
            <th className={s.tHead_sum}>Sum</th>
            <th className={s.tHead_bask}></th>
          </tr>
        </thead>

        <tbody className={s.tableBody}>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;

// Table.propTypes = {
//   //   onSubmit: PropTypes.func,
// };
