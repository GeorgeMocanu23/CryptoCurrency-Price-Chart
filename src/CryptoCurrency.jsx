import React, { useState } from 'react';
import Chart from './Chart';
import CurrencySelect from './CurrencySelect';
import DataSelect from './DataSelect';

function CryptoCurrency() {
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [selectedData, setSelectedData] = useState("");
    const [selectedDateRange, setSelectedDateRange] = useState("");

    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        setSelectedCurrency(currency);
    };

    const handleDataChange = (event) => {
        const days = event.target.value;
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - days);
        setSelectedData(days);
        setSelectedDateRange([startDate, endDate]);
    };

    return (
        <div>
            <h1>CryptoCurrency App</h1>
            <form>
                <DataSelect
                    selectedData={selectedData}
                    handleDataChange={handleDataChange}
                />
                <br />
                <CurrencySelect
                    selectedCurrency={selectedCurrency}
                    handleCurrencyChange={handleCurrencyChange}
                />
            </form>
            <Chart
                selectedCurrency={selectedCurrency}
                selectedDateRange={selectedDateRange}
            />
        </div>
    );
}

export default CryptoCurrency;