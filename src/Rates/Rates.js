import React from "react";
import ListItem from "../ListItem/ListItem";
import {Link} from "react-router-dom";

export default function Rates(props) {
    const {currencyArr} = props;
    return (
        <div className='rate'>
            <div className='logo'>Текущие курсы валют!</div>
            <select onChange={props.handlerSelectedCurrency}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='RUB'>RUB</option>
            </select>
            <ul>
                {
                    currencyArr.map((item, index) => {
                        return <ListItem key={index} name={item[0]} value={item[1]}/>
                    })
                }
            </ul>
            <div className="rates-page-link"><Link to='/'>Назад</Link></div>
        </div>
    )
}