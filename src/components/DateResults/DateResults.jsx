import PropTypes from 'prop-types';

import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';

import s from './DateResults.module.scss'

const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


const DateResults = ({ dateValue, setDateValue }) => {
    const takeMonths = dateValue.getMonth()
    const takeYears = dateValue.getFullYear()


    const decrementMonth = () => {
        const newMonth = new Date(dateValue.getFullYear(), dateValue.getMonth() - 1)
        setDateValue(newMonth)
    }

    const incrementMonth = () => {
        const newMonth = new Date(dateValue.getFullYear(), dateValue.getMonth() + 1)
        setDateValue(newMonth)
    }

    return (
        <div className={s.currentPeriod}>
            <p className={s.currentPeriodText}>Current period:</p>
            <div className={s.currentPeriod_month}>
                <button type="button" className={s.buttonPeriod} onClick={() => decrementMonth()}>
                    <VectorLeft className={s.buttonPeriod_svg} />
                </button>
                <p className={s.currentPeriod_month_text}>{`${month[takeMonths]} ${takeYears}`}</p>
                <button type="button" className={s.buttonPeriod} onClick={() => incrementMonth()}>
                    <VectorRight className={s.buttonPeriod_svg} />
                </button>
            </div>
        </div>
    );
}

DateResults.propTypes = {
    dateValue: PropTypes.instanceOf(Date).isRequired,
    setDateValue: PropTypes.func.isRequired
}

export default DateResults;