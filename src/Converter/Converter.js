import React from "react";
import {Link} from "react-router-dom";

export default function Converter(props) {
    const {cur, input, handlerInputLengthValidation} = props;
    return (
        <div className='container custom-container'>
            <div>Конвертировать доллары в рубли</div>
            <input onChange={handlerInputLengthValidation} type="text" placeholder='max 15 цифр'/>
            <div>Результат: {(cur * input).toFixed(1)}</div>
            <Link to='/rates'>Далее</Link>
        </div>
    )
}