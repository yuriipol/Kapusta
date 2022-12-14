import s from './Summary.module.scss';

const Summary = () => {
  return (
    <div className={s.wrapper}>
      <table>
        <tbody>
          <tr>
            <th>Summary</th>
          </tr>
          <tr>
            <td>December</td>
            <td>10 000.00</td>
          </tr>
          <tr>
            <td>November</td>
            <td>30 000.00</td>
          </tr>
          <tr>
            <td>October</td>
            <td>30 000.00</td>
          </tr>
          <tr>
            <td>September</td>
            <td>20 000.00</td>
          </tr>
          <tr>
            <td>Augest</td>
            <td>15 000.00</td>
          </tr>
          <tr>
            <td>July</td>
            <td>18 000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
