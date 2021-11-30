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

//https://currencylayer.com/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            USDRUB: '',
        }
    }

    async componentDidMount() {
        const cur = new CurRateAPI();
        this.setState({
            USDRUB: await cur.getUSDRUBcurrency(),
        })
    }

    // validation(number) {
    //
    //     if (number.length > 15) {
    //         alert('Не более 15 цифр');
    //         return number.substring(0, 15);
    //     }
    //
    //     if (number === '') {
    //         return '';
    //     }
    //
    //     if (parseFloat(number) || parseInt(number)) {
    //         if (number.match('[A-Za-z]+$') !== null) {
    //             const index = number.match('[A-Za-z]+$')['index'];
    //             alert('В числах есть буквы ?')
    //             return number.substring(0, index);
    //             // не работает с русским алфавитом
    //         }
    //         return number;
    //     } else {
    //         alert('Введите корректное значение');
    //         return '';
    //     }
    // }

    render() {
        const {USDRUB: cur,} = this.state;
        return (
            <div>
                <Routes>
                    <Route path='/' element={
                        <Converter
                            cur={cur}
                        />
                    }/>
                    <Route path='/RatesPage' element={<Rates/>}>Далее</Route>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        )
    }
}