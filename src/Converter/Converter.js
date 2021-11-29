import React from "react";
import {Link} from "react-router-dom";

export default function Converter(props) {
    const {cur, input, handlerInputLengthValidation} = props;
    return (
        //переписать класс и хранить стейт для запоминания инпута ??? Попробовать
        // не сохдраняется инпут а результат сохраняется при возврате "назад"
        <div className='container custom-container'>
            <div className='logo'>Конвертировать доллары в рубли</div>
            <p className='current-rate'>Текущий курс рубля к доллару {(+cur).toFixed(1)}</p>
            <input onChange={handlerInputLengthValidation} type="text" placeholder='max 15 цифр'/>
            <div className='result'>Результат: {+(cur * input).toFixed(1)} Rub</div>
            {/*<div>Результат: {`${cur}  ${input}`}</div>*/}
            <div className='rates-page-link'><Link to='/RatesPAge'>Далее</Link></div>
        </div>
    )
}