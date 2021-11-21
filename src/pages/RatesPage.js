import React from "react";
import CurRateAPI from "../CurRateAPI/CurRateAPI";
import ListItem from "../ListItem/ListItem";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Rates from "../Rates/Rates";

export default class RatesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrency: '',       //выбранная валюта в списке
            currency: '',
        };
        this.currencyArr = '';
        this.handlerSelectedCurrency = this.handlerSelectedCurrency.bind(this);
    }

    async componentDidMount() {
        await this.setState({
            selectedCurrency: 'USD'
        })

        const currency = await this.selectedCurrency(this.state.selectedCurrency);
        this.setState({
            currency,
        })
    }

    async selectedCurrency(selectedCurrency) {
        const cur = new CurRateAPI();
        return await cur.getSelectedCurrency(selectedCurrency);
    }

    async handlerSelectedCurrency(e) {
        const selectedCurrency = e.target.value;
        const currency = await this.selectedCurrency(selectedCurrency);
        await this.setState({
            selectedCurrency,
            currency
        })
        console.log('currency')
    }

    getCurrencyArr() {
        this.currencyArr = Object.entries(this.state.currency);
    }


    render() {


        this.getCurrencyArr()
        console.log('this.currencyArr', this.currencyArr);
        return (
            <Rates
                handlerSelectedCurrency={this.handlerSelectedCurrency}
                currencyArr={this.currencyArr}
            />
        )
    }
}