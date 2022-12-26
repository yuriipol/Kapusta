import PropTypes from 'prop-types';
import { useState } from 'react'

import { ReactComponent as VectorLeft } from '../../shared/images/ReportsImages/VectorLeft.svg';
import { ReactComponent as VectorRight } from '../../shared/images/ReportsImages/VectorRight.svg';


import ReportsType from 'components/ReportsType/ReportsType';

import s from './CategoryResults.module.scss'

const CategoryResults = ({ data, typeFunc }) => {
    const [isExpense, setIsExpense] = useState(true)

    const expense = data?.expense?.expensesData
    const incomes = data?.incomes?.incomesData
    const toggleIsExpense = () => {
        setIsExpense(!isExpense)
    }

    const changeBudgetype = isExpense ? "Expense" : 'Income'
    return (
        <div className={s.budget_category}>
            <div className={s.budget_category_type}>
                <button type="button" className={s.buttonPeriod} onClick={toggleIsExpense}>
                    <VectorLeft className={s.buttonPeriod_svg} />
                </button>
                <p className={s.budget_category_text}>{changeBudgetype}</p>
                <button type="button" className={s.buttonPeriod} onClick={toggleIsExpense}>
                    <VectorRight className={s.buttonPeriod_svg} />
                </button>
            </div>
            <ReportsType data={isExpense ? expense : incomes} typeFunc={typeFunc} budgetType={changeBudgetype} />
        </div >
    );
}

CategoryResults.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        expense: PropTypes.object.isRequired,
        incomes: PropTypes.object.isRequired,
    })),
    typeFunc: PropTypes.func.isRequired
}

export default CategoryResults;