import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function CurrencySelect({ selectedCurrency, handleCurrencyChange }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel htmlFor="currency">Select a currency:</InputLabel>
        <Select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          label="Select a currency"
        >
          <MenuItem value="auroracoin">Aurora Coin</MenuItem>
          <MenuItem value="binancecoin">Binance Coin (BNB)</MenuItem>
          <MenuItem value="bitcoin">Bitcoin</MenuItem>
          <MenuItem value="bitcoin-cash">Bitcoin Cash</MenuItem>
          <MenuItem value="chainlink">Chainlink</MenuItem>
          <MenuItem value="dash">Dash</MenuItem>
          <MenuItem value="dogecoin">Dogecoin</MenuItem>
          <MenuItem value="ethereum">Ethereum</MenuItem>
          <MenuItem value="litecoin">Litecoin</MenuItem>
          <MenuItem value="monero">Monero</MenuItem>
          <MenuItem value="polkadot">Polkadot</MenuItem>
          <MenuItem value="ripple">Ripple</MenuItem>
          <MenuItem value="stellar">Stellar</MenuItem>
          <MenuItem value="tether">Tether</MenuItem>
          <MenuItem value="tezos">Tezos</MenuItem>
          <MenuItem value="toncoin">Toncoin</MenuItem>
          <MenuItem value="uniswap">Uniswap</MenuItem>
          <MenuItem value="zcash">Zcash</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CurrencySelect;
