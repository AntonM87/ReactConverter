import axios from "axios";

export default class CurRateAPI {
    constructor() {
        // this.baseRequestString = 'http://api.currencylayer.com/live?access_key=25786ffae4aa0b747da8052d92b9d76f&format=1';
        this.USDquerySting = 'http://apilayer.net/api/live?access_key=25786ffae4aa0b747da8052d92b9d76f&currencies=RUB&source=USD&format=1';
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
        return `http://apilayer.net/api/live?access_key=25786ffae4aa0b747da8052d92b9d76f&currencies=EUR,GBP,CAD,PLN,RUB&source=${selectedCurrency}&format=1`
    }

    async getUSDRUBcurrency() {
        let currency = '';
        await axios.get(this.USDquerySting)
            .then(data => {
                if (data.status === 200) {
                    currency = data.data.quotes.USDRUB;
                }
            });
        return currency;
    }
}