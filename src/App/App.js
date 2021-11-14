import React from "react";
import './style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 0,
            baseCurrency: 'usd',         //базовая валюта
        }

        this.selectInterval = this.selectInterval.bind(this);
        this.baseCurrency = this.baseCurrency.bind(this);
    }

    //выбор интервала
    selectInterval(e) {
        this.setState({interval: e.target.value});
        e.preventDefault();
    }

    //базовая валюта
    baseCurrency(e) {
        this.setState({})
        e.preventDefault();
    }

    render() {
        return (
            <div className='container custom-container'>
                <form>
                    <div className="form-group">
                        <label>Интервал обновления в минутах</label>
                        <select onChange={this.selectInterval} className="form-control" id="exampleFormControlSelect1">
                            <option selected value='1'>1 мин.</option>
                            <option value='5'>5 мин.</option>
                            <option value='15'>15 мин.</option>
                            <option value='30'>30 мин.</option>
                            <option value='60'>60 мин.</option>
                        </select>
                    </div>
                </form>
                <form>
                    <div className="form-group">
                        <label>Базовая валюта</label>
                        <select onChange={this.baseCurrency} className="form-control" id="exampleFormControlSelect1">
                            <option selected value='rub'>RUB</option>
                            <option value='usd'>USD</option>
                        </select>
                    </div>
                </form>
                <input type="text" placeholder='max 15 цифр'/>
            </div>
        )
    }
}