import PropTypes from 'prop-types';
import { nanoid } from '../../../node_modules/nanoid/index';
import { useState, useEffect } from 'react';

import svgArray from './svgArray';

import { ReactComponent as Bg } from '../../shared/images/ReportsImages/expenseType/bg.svg';
import { ReactComponent as Warning } from '../../shared/images/ReportsImages/warrning.svg';

import { initialChartsArr } from 'pages/ReportsPage/initialState';

import s from './ReportsType.module.scss';

const ReportsType = ({ data, typeFunc, budgetType }) => {
    const [category, setCategory] = useState('');
    const dataCategories = data
    const dataFirstElem = data?.length > 0 ? data[0].category : ''
    const dataDescriptions = data?.length > 0 ? data[0].data : initialChartsArr

    const onClickChangetype = (elem) => {
        typeFunc(elem.data)
        setCategory(elem.category)
    }

    useEffect(() => {
        setCategory(dataFirstElem)
        typeFunc(dataDescriptions)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataFirstElem, dataDescriptions])


    const renderCategoryCard = dataCategories?.map((el, idx) => {
        const svgImage = svgArray.find(elem =>
            elem.category === el.category)
        return (
            <li key={nanoid(5)}
                className={
                    category === el.category
                        ? `${s.category_item} ${s.active}`
                        : `${s.category_item}`
                }
                onClick={() => onClickChangetype(el)}
            >
                <p className={s.category_price}>{el?.total.toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
                <div className={s.category_svg_box}>
                    <svgImage.svg className={s.category_svg_image} />
                    <Bg className={s.category_svg_bg} />
                </div>
                <p className={s.category_name}>{el.category}</p>
            </li>
        );
    });

    return (
        <ul className={s.category_list}>
            {data?.length !== 0 ? renderCategoryCard : <li className={s.category_item}>
                <p className={s.category_price}>0.00</p>
                <div className={s.category_svg_box}>
                    <Warning className={s.category_svg_image} />
                    <Bg className={s.category_svg_bg} />
                </div>
                <p className={s.category_name}>no transaction {budgetType}</p></li>}
        </ul>
    );
};

ReportsType.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        total: PropTypes.number.isRequired
    })),
    typeFunc: PropTypes.func.isRequired,
    budgetType: PropTypes.string.isRequired

}

export default ReportsType;
