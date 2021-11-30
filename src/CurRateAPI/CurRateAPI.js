import axios from "axios";

export default class CurRateAPI {
    constructor() {
        this.USDquerySting = 'http://apilayer.net/api/live?access_key=7ef3a3b4cf0bb3cb761bfdcc278247b1&currencies=RUB&source=USD&format=1';
    }

    async getSelectedCurrency(currency) {
        if (currency !== 'USD') {
            currency = 'USD'
            alert('Увы API бесплатно дает только курс по доллару')
        }
        let result = '';
        await axios.get(this.getRequestString(currency))
            .then(data => {
                if (data.status === 200) {
                    result = data.data.quotes;
                }
            })
        return result;
    }

    getRequestString(selectedCurrency) {
        return `http://apilayer.net/api/live?access_key=7ef3a3b4cf0bb3cb761bfdcc278247b1&currencies=EUR,GBP,CAD,PLN,RUB&source=${selectedCurrency}&format=1`
    }

    async getUSDRUBcurrency() {
        let currency = '';
        await axios.get(this.USDquerySting)
            .then(data => {
                if (data.status === 200) {
                    // console.log(data.data.quotes.USDRUB);
                    currency = data.data.quotes.USDRUB;
                }
            });
        return currency;
    }
}