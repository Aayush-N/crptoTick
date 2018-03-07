import React, { Component } from 'react';
import './Tickers.css'
import Cryptocurrency from './Crypto';
import axios from 'axios';
import logo from '../logo.svg';

class Tickers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
	            {
	                id: "bitcoin",
	                name: "Bitcoin",
	                symbol: "BTC",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0000",
	                price_inr: "1",
	            },
	            {
	                id: "ethereum",
	                name: "Ethereum",
	                symbol: "ETH",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0000",
	                price_inr: "1",
	            },
	            {
	                id: "ripple",
	                name: "Ripple",
	                symbol: "XRP",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0000",
	                price_inr: "1",
	            }
        	]
		};
			
	}

	fetchCryptocurrencyData() {
		axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=10")
		.then(response => {
			var wanted = ["bitcoin", "ethereum", "ripple"];
			var result = response.data.filter(currency => wanted.includes(currency.id));
			this.setState({data: result});
		})
		.catch(err => console.log(err));
	}

	componentDidMount() {
	    this.fetchCryptocurrencyData();
	    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 300 * 1000);
	}


	render() {
		var tickers = this.state.data.map((currency) =>

			<Cryptocurrency data={currency} key={currency.id} />
		);

		return (
			<div className="ticker-container">
				<ul className="tickers">{tickers}</ul>
				<p>Information automatically updates every 5 minutes courtesy of coinmarketcap.com</p>
				<hr/>
				<img src={logo} className="logo" alt="logo" />
				<p>Built with React</p>
			</div>
		);
	}
}

export default Tickers;
