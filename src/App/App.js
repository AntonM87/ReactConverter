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