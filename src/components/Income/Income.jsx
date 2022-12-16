import React from 'react'
import Table from '../Table/Table'
import Calendar from 'components/Calendar/Calendar'
import s from './Income.module.scss'
import Product_Tablet from 'components/Product/Product_Tablet'

const Income = () => {
  return (
    <div className={s.income_Wrapper}>
      <div className={s.firstSection_Wrapper}>
        <Calendar />
        <Product_Tablet />
        <button className={s.btn_Desktop}>Input</button>
        <button className={s.btn_Desktop}>Clear</button>
      </div>
      <div className={s.secondSection_Wrapper}>
        <button className={s.btn}>Input</button>
        <button className={s.btn}>Clear</button>
      </div>
      <Table />
    </div>
  )
}

export default Income