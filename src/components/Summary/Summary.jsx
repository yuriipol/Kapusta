import { nanoid } from '../../../node_modules/nanoid/index';
import s from './Summary.module.scss';


const Summary = ({ transactionList }) => {
  const trasactionSummary = transactionList?.monthStats

  const reworkSummary = trasactionSummary ? Object.entries(trasactionSummary) : []
  const fiterArr = reworkSummary?.filter(el => el[1] !== 'N/A')
  const rows = fiterArr?.map((el) => {

    return (
      <tr key={nanoid(5)} className={s.row}>
        <td className={s.desc}>{el[0]}</td>
        <td className={s.desc}>{el[1] === 'N/A' ? '00.00' : el[1].toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</td>
      </tr>
    );
  });

  return (
    <table className={s.table}>
      <thead>
        <tr className={s.row}>
          <th className={s.head} colSpan="2">
            Summary
          </th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default Summary;
