import React from "react";
import {Link} from "react-router-dom";

export default function Converter(props) {
    const {cur, input, handlerInputLengthValidation} = props;
    return (
        //переписать класс и хранить стейт для запоминания инпута ??? Попробовать
        // не сохдраняется инпут а результат сохраняется при возврате "назад"
        <div className='container custom-container'>
            <div>Конвертировать доллары в рубли</div>
            <p>Текущий курс рубля к доллару {(+cur).toFixed(1)}</p>
            <input onChange={handlerInputLengthValidation} type="text" placeholder='max 15 цифр'/>
            <div>Результат: {+(cur * input).toFixed(1)}</div>
            {/*<div>Результат: {`${cur}  ${input}`}</div>*/}
            <Link to='/RatesPAge'>Далее</Link>
        </div>
    )
}