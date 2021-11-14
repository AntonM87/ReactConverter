import React from "react";
import CurRateAPI from "../CurRateAPI/CurRateAPI";
import './style.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey : '',
            interval: (1000 * 60 * 5),
            baseCurrency: 'usd',         //базовая валюта
        }

        // написать класс работы с сетью и перед
        // конвертакцией запросить курс в this.componentDidMount()

        this.selectInterval = this.selectInterval.bind(this);
        this.baseCurrency = this.baseCurrency.bind(this);
        this.handlerInputLengthValidation = this.handlerInputLengthValidation.bind(this);
    }

    componentDidMount() {
        const cur = new CurRateAPI();
        cur.getApiKey();
    }

    validation(number) {

        if (number.length > 15) {
            alert('Не более 15 цифр');
            return number.substring(0, 15);
        }

        if (number === ''){
            return '';
        }

        if (parseFloat(number) || parseInt(number)){
            if (number.match('[A-Za-z]+$') !== null){
                const index = number.match('[A-Za-z]+$')['index'];
                alert('В числах есть буквы ?')
                return number.substring(0,index);
                // не работает с русским алфавитом
            }

            return number;
        } else {
            alert('Введите корректное значение');
            return '';
        }
    }

    handlerInputLengthValidation(e) {
        e.target.value = this.validation(e.target.value);
        e.preventDefault();
    }

    // минуты в милисекунды для interval
    convertMinToMilisec(min) {
        return 60000 * min;
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
        // let i = 0;
        // setInterval(()=> console.log(++i),500);

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
                <input onChange={this.handlerInputLengthValidation} type="text" placeholder='max 15 цифр'/>
            </div>
        )
    }
}