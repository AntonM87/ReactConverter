export default class CurRateAPI {
    constructor() {
        this.apiKey = '7d43712903c7dd39422fdac079c39994';
        this.apiKeyString = 'https://currate.ru/api/?get=currency_list&key=YOUR-API-KEY';
    }
    getApiKey(){
        fetch(this.apiKey).then(
            (data)=>console.log(data)
        )
    }
}