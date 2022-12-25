import s from './BudgetResults.module.scss'

const BudgetResults = () => {
    return (
        <div className={s.budget}>
            <p className={s.budgetText}>Expenses:<span className={s.budgetText_expanse}>- 18 000.00 UAH.</span></p>
            <p className={s.budgetText}>Income:<span className={s.budgetText_income}>+ 45 000.00 UAH.</span></p>
        </div>
    );
}

export default BudgetResults;