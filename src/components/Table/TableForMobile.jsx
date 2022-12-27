
import Basket from '../../shared/images/HomePage/delete.svg';
import s from './Table.module.scss';

import { trasactionDelete, trasactionAll } from 'shared/api/transactions-api';

const TableForMobile = ({ props }) => {
  const { dataAllTransaction, setDataAllTransaction } = props

  const fetchTransaction = async () => {

    const newDateAll = await trasactionAll()

    setDataAllTransaction(newDateAll.allTransactions)
  }

  const onClickDeleteTraansaction = (e) => {
    const id = e.currentTarget.id
    trasactionDelete(id)
    fetchTransaction()
  }
  console.log(dataAllTransaction)

  const rows = dataAllTransaction?.map(({ date, description, category, amount, _id, type }) => {

    return (
      <tr key={_id} className={s.tRow}>
        <td className={s.tD_descr}>
          {description}
          <div>
            <span className={s.tD_data}>{new Date(date).toLocaleDateString()}</span>
            <span className={s.tD_categ}>{category}</span>
          </div>
        </td>

        <td className={type === 'expense' ? s.outcom : s.incom}>
          {type === 'expense' ? `- ${amount.toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}` : amount.toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
          <span className={type === 'expense' ? s.outcom : s.incom}>UAH.</span>
        </td>
        <td className={s.tD_bask}>
          <button type="button" className={s.helper} id={_id} onClick={onClickDeleteTraansaction}>
            <img className={s.basket} src={Basket} alt="basket" />
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default TableForMobile;

// TableForMobile.propTypes = {
//   //   onSubmit: PropTypes.func,
// };
