import React from "react";
import { Link } from "react-router-dom";

export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.currency = this.props.cur;
        this.state = {
            result: '',
        }

        this.USDref = React.createRef();
        this.RUBref = React.createRef();

        this.getResult = this.getResult.bind(this);
    }

    getResult(e) {
        let value = e.target.value;
        const name = e.target.name;

        const USDref = this.USDref.current;
        const RUBref = this.RUBref.current;

        if (value.length === 0) {
            USDref.value = 'Empty';
            RUBref.value = 'Empty';
            return;
        };

        if (value < 0) {
            USDref.value = 'Empty';
            RUBref.value = 'Empty';
            return;
        }

        if (name === 'usd') {
            RUBref.value = (this.currency * value).toFixed(1);
            return;
        }
        if (name === 'rub') {
            USDref.value = (value / this.currency).toFixed(1);
            return;
        }
    }

    render() {
        return (
            <div className='container custom-container'>
                <div className='logo'>Конвертировать доллары в рубли</div>
                <p className='current-rate'>Текущий курс рубля к доллару {(+this.props.cur).toFixed(1)}</p>
                <div className='input-container'>
                    <label>
                        <i class="fas fa-dollar-sign"></i>
                        <input ref={this.USDref} onChange={this.getResult} name='usd' type="number"
                            placeholder='USD' />
                    </label>
                    <i className="fas fa-exchange-alt" />
                    <label>
                        <i class="fas fa-ruble-sign"></i>
                        <input ref={this.RUBref} onChange={this.getResult} name="rub" type='number'
                            placeholder='RUB' />
                    </label>
                </div>
                <div className='rates-page-link'><Link to='/RatesPAge'>Курсы валют</Link></div>
            </div>
        )
    }
}