import PropTypes from 'prop-types';

import s from './BudgetResults.module.scss'

const BudgetResults = ({ data }) => {
    const expense = data?.expense?.expenseTotal
    const incomes = data?.incomes?.incomeTotal

    return (
        <div className={s.budget}>
            <p className={s.budgetText}>Expenses:<span className={s.budgetText_expanse}>- {expense?.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.</span></p>
            <p className={s.budgetText}>Income:<span className={s.budgetText_income}>+ {incomes?.toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.</span></p>
        </div>
    );
}

BudgetResults.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        expense: PropTypes.object.isRequired,
        incomes: PropTypes.object.isRequired,
    }))

}

export default BudgetResults;