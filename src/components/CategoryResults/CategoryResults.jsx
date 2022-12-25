import { useState } from 'react'

import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';

import Expense from "components/ReportsType/Expense";
import Income from "components/ReportsType/Income";

import s from './CategoryResults.module.scss'

const CategoryResults = () => {
    const [isExpanse, setIsExpanse] = useState(true)

    const toggleIsExpanse = () => {
        setIsExpanse(!isExpanse)
    }

    const changeBudgetype = isExpanse ? "Expanse" : 'Income'
    return (
        <div className={s.budget_category}>
            <div className={s.budget_category_type}>
                <button type="button" className={s.buttonPeriod} onClick={toggleIsExpanse}>
                    <VectorLeft className={s.buttonPeriod_svg} />
                </button>
                <p className={s.budget_category_text}>{changeBudgetype}</p>
                <button type="button" className={s.buttonPeriod} onClick={toggleIsExpanse}>
                    <VectorRight className={s.buttonPeriod_svg} />
                </button>
            </div>
            {isExpanse ? <Expense /> : <Income />}
        </div >
    );
}

export default CategoryResults;