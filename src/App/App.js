import React from "react";
import CurRateAPI from "../CurRateAPI/CurRateAPI";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import Converter from "../Converter/Converter";
import Rates from '../pages/RatesPage';
import NotFoundPage from '../pages/NotFoundPage'
import './styles.css';

//https://currencylayer.com/

const mainCurrency = 'USDRUB';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            USDRUB: '',
            input: '',
        }

        this.handlerInputLengthValidation = this.handlerInputLengthValidation.bind(this);
    }

    async componentDidMount() {
        const cur = new CurRateAPI();
        this.setState({
            USDRUB: await cur.getUSDRUBcurrency(),
            // input: localStorage.getItem(mainCurrency),
        })
    }

    // componentWillUnmount() {
    //     localStorage.setItem(mainCurrency,this.state.input);
    // }

    validation(number) {

        if (number.length > 15) {
            alert('Не более 15 цифр');
            return number.substring(0, 15);
        }

        if (number === '') {
            return '';
        }

        if (parseFloat(number) || parseInt(number)) {
            if (number.match('[A-Za-z]+$') !== null) {
                const index = number.match('[A-Za-z]+$')['index'];
                alert('В числах есть буквы ?')
                return number.substring(0, index);
                // не работает с русским алфавитом
            }
            return number;
        } else {
            alert('Введите корректное значение');
            return '';
        }
    }

    stateInput(inputValue) {
        this.setState({input: inputValue});
    }

    handlerInputLengthValidation(e) {
        e.target.value = this.validation(e.target.value);
        this.setState({input: e.target.value});
        e.preventDefault();
    }

    render() {

        // console.log(localStorage);

        const {USDRUB: cur, input} = this.state;
        return (
            <div>
                <Routes>
                    <Route path='/' element={
                        <Converter
                            handlerInputLengthValidation={this.handlerInputLengthValidation}
                            cur={cur}
                            input={input}
                        />
                    }/>
                    <Route path='/RatesPage' element={<Rates/>}>Далее</Route>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        )
    }
}