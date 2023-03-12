function CurrencySelect({ selectedCurrency, handleCurrencyChange }) {
    return (
        <div>
            <label htmlFor="currency">Select a currency: </label>
            <select id="currency" name="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="">Please choose the currency</option>
                <option value="auroracoin">Aurora Coin</option>
                <option value="binancecoin">Binance Coin (BNB)</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bitcoin-cash">Bitcoin Cash</option>
                <option value="chainlink">Chainlink</option>
                <option value="dash">Dash</option>
                <option value="dogecoin">Dogecoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="litecoin">Litecoin</option>
                <option value="monero">Monero</option>
                <option value="polkadot">Polkadot</option>
                <option value="ripple">Ripple</option>
                <option value="stellar">Stellar</option>
                <option value="tether">Tether</option>
                <option value="tezos">Tezos</option>
                <option value="toncoin">Toncoin</option>
                <option value="uniswap">Uniswap</option>
                <option value="zcash">Zcash</option>
            </select>
        </div>
    );
}

export default CurrencySelect;