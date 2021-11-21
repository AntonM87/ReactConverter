import React from "react";
import ListItem from "../ListItem/ListItem";
import {Link} from "react-router-dom";

export default function Rates(props){
    const {currencyArr} = props;
    return (
        <div>
            <h1>This "Rates" page!</h1>
            <select onChange={props.handlerSelectedCurrency}>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='RUB'>RUB</option>
            </select>
            {
                currencyArr.map((item,index) => {
                    return <ListItem key={index} name={item[0]} value={item[1]}/>
                })
            }
            <Link to='/'>Назад</Link>
        </div>
    )
}