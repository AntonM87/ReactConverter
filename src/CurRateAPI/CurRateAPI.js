import axios from "axios";

export default class CurRateAPI {
    constructor() {
        this.baseRequestString = 'http://api.currencylayer.com/live?access_key=25786ffae4aa0b747da8052d92b9d76f&format=1';
    }

    async getUSDRUBcurrency() {
        let currency = '';
        await axios.get(this.baseRequestString)
            .then(data => {
                if (data.status === 200) {
                    currency = data.data.quotes['USDRUB'];
                }
            });
        return currency;
    }
}