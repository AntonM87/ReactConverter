import React from "react";
import {Link} from "react-router-dom";

export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.currency = this.props.cur;
        this.state = {
            result: '',
        }
        this.getResult = this.getResult.bind(this);
    }

    getResult(e) {
        let value = e.target.value;
        if (value.length === 0) return '';

        const USD = document.querySelector('input[name=usd]');
        const RUB = document.querySelector('input[name=rub]');

        // console.log(USD)
        // console.log(RUB)

        if (e.target.name === 'usd') {
            RUB.value = (this.currency * value).toFixed(1);
        }
        if (e.target.name === 'rub') {
            USD.value = (value / this.currency).toFixed(1);
        }
    }

    render() {
        return (
            <div className='container custom-container'>
                <div className='logo'>Конвертировать доллары в рубли</div>
                <p className='current-rate'>Текущий курс рубля к доллару {(+this.props.cur).toFixed(1)}</p>
                <div className='input-container'>
                    <input onChange={this.getResult} name='usd' type="number"
                           placeholder='USD'/>
                    <i className="fas fa-exchange-alt"/>
                    <input onChange={this.getResult} name="rub" type='number'
                           placeholder='RUB'/>
                </div>
                <div className='rates-page-link'><Link to='/RatesPAge'>Далее</Link></div>
            </div>
        )
    }
}