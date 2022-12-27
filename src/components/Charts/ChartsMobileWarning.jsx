import s from './ChartsMobileWarning.module.scss'

import { ReactComponent as Warning } from '../../shared/images/ReportsImages/chartsWarning.svg';

const ChartsMobileWarning = () => {
    return (
        <div className={s.warning_wrapper}>

            <div className={s.warning_box}>
                <Warning />
            </div>
            <p className={s.warning_text}>you don`t have changes of balance</p>
        </div>
    );
}

export default ChartsMobileWarning;