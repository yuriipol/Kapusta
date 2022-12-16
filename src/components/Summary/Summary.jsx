import s from './Summary.module.scss';

const data = [
  {
    month: 'December',
    sum: '10000.00',
    id: '1',
  },
  {
    month: 'November',
    sum: '30000.00',
    id: '2',
  },
  {
    month: 'October',
    sum: '30000.00',
    id: '3',
  },
  {
    month: 'September',
    sum: '20000.00',
    id: '4',
  },
  {
    month: 'Augest',
    sum: '15000.00',
    id: '5',
  },
  {
    month: 'July',
    sum: '18000.00',
    id: '6',
  },
];

const Summary = () => {
  const rows = data.map(({ month, sum, id }) => {
    return (
      <tr key={id}>
        <td>{month}</td>
        <td>{sum}</td>
      </tr>
    );
  });

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Summary</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};

export default Summary;
