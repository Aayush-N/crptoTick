import React, { Component } from 'react';
import './Crypto.css'

class Cryptocurrency extends Component {

    convertToTime(epoch) {
        return Date(epoch).toString()
    }
    render() {

        var {
            id,
            name,
            symbol,
            price_usd,
            price_inr,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            last_updated,
        } = this.props.data;

        return(
            <li className={"cryptocurrency" + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <hr/>
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <hr/>
                <h1>₹{ (+price_inr).toFixed(2) }</h1>
                <hr/>
                <p>Percent Changes</p>
                <p>{percent_change_1h}% 1hr</p>
                <p>{percent_change_24h}% 24hrs</p>
                <p>{percent_change_7d}% 7days</p>
                <hr/>
                <p>Last Updated: </p>
                <p>{this.convertToTime((+last_updated))}</p>  
            </li>
        );
    }
}

export default Cryptocurrency;