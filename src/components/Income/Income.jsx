import React from 'react'
import Table from '../Table/Table'
import Calendar from 'components/Calendar/Calendar'
import s from './Income.module.scss'
import Product_Table from 'components/Product/Product_Table'

const Income = () => {
  return (
    <div className={s.income_Wrapper}>
      <div className={s.firstSection_Wrapper}>
        {/* <Calendar /> */}
        <Product_Table />
      </div>
      <Table />
    </div>
  )
}

export default Income