import React from 'react'
import Table from '../Table/Table'
import Summary from 'components/Summary/Summary'
import Calendar from 'components/Calendar/Calendar'
import s from './Income.module.scss'
import Product_Tablet from 'components/Product/Product_Tablet'
import useResizeScreen from '../../shared/hooks/useResizeScreen';


const Income = () => {
  const {isTablet} = useResizeScreen();

  if(isTablet){
    return (
    <div className={s.income_Wrapper}>
      <div className={s.firstSection_Wrapper}>
        <Calendar />
        <Product_Tablet />
      </div>
      <div className={s.secondSection_Wrapper}>
        <button className={s.btn}>Input</button>
        <button className={s.btn}>Clear</button>
      </div>
      <div className={s.test}>
        <Table />
      </div>
    </div>
    )
  }
  return (
    <div className={s.income_Wrapper}>
    <div className={s.firstSection_Wrapper}>
      <Calendar />
      <Product_Tablet />
      <button className={s.btn}>Input</button>
      <button className={s.btn}>Clear</button>
    </div>
    <div className={s.secondSection_Wrapper}>
    </div>
    <div className={s.tabSumWrapper}>
      <Table />
      <Summary />
    </div>
  </div>
  )
}

export default Income