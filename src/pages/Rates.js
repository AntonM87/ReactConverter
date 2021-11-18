import React from "react";

export default class Rates extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>This "Rates" page!</h1>
                <h2>{this.props.userValue}</h2>
            </>
        )
    }
}