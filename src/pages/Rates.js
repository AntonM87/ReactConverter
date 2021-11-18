import React from "react";
import CurRateAPI from "../CurRateAPI/CurRateAPI";
import ListItem from "../ListItem/ListItem";

export default class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: '',
        };
        this.currencyArr = '';

    }

    async componentDidMount() {
        const cur = new CurRateAPI();
        const response = await cur.getFullCurrency();
        this.setState({
            currency: response,
        })
    }

    getCurrencyArr() {
        this.currencyArr = Object.entries(this.state.currency);
    }


    render() {
        this.getCurrencyArr()
        return (
            <div>
                <h1>This "Rates" page!</h1>
                {
                    this.currencyArr.map(item => {
                        return <ListItem name={item[0]} value={item[1]}/>
                    })
                }
            </div>
        )
    }
}