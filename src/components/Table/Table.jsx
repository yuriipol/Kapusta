// import PropTypes from 'prop-types';
import Basket from '../../shared/images/HomePage/delete.svg';
import s from './Table.module.scss';

// const data видалити, коли будуть дані
const data = [
  {
    data: '05.09.2019',
    description: 'My salary',
    category: 'Salary',
    sum: '20000.00',
    id: '1',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Products',
    sum: '-50.00',
    id: '2',
  },
  {
    data: '05.09.2019',
    description: 'Undeground',
    category: 'Transport',
    sum: '-2000.00',
    id: '3',
  },
];
const difClass = suma => {
  const result = suma >= 0 ? 's.incom' : 's.outcom';
  return result;
};

const Table = () => {
  console.log(difClass(1000));
  const rows = data.map(({ data, description, category, sum, id }) => {
    const suma = Number.parseFloat(sum);

    return (
      <tr key={id} className={s.tRow}>
        <td className={s.tD_data}>{data}</td>
        <td className={s.tD_descr}>{description}</td>
        <td className={s.tD_categ}>{category}</td>
        <td className={`${suma >= 0 ? s.incom : s.outcom}`}>
          {sum}{' '}
          <span className={`${suma >= 0 ? s.incom : s.outcom}`}>UAH.</span>
        </td>
        <td className={s.tD_bask}>
          <button type="button" className={s.helper}>
            <img className={s.basket} src={Basket} alt="basket" />
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr className={s.tRow}>
            <th className={s.tHead}>Date</th>
            <th className={s.tHead}>Description</th>
            <th className={s.tHead__categ}>Category</th>
            <th className={s.tHead_sum}>Sum</th>
            <th className={s.tHead_bask}></th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;

// Table.propTypes = {
//   //   onSubmit: PropTypes.func,
// };
