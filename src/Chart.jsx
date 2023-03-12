import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Chart(props) {
    const [coinData, setCoinData] = useState([]);
    const [coinLogo, setCoinLogo] = useState('');
    const [formattedStartDate, setFormattedStartDate] = useState('');
    const [formattedEndDate, setFormattedEndDate] = useState('');

    useEffect(() => {
        if (props.selectedCurrency && props.selectedDateRange) {
            const startDate = props.selectedDateRange[0].getTime() / 1000;
            const endDate = props.selectedDateRange[1].getTime() / 1000;
            let apiUrl = `https://api.coingecko.com/api/v3/coins/${props.selectedCurrency}/market_chart/range?vs_currency=usd&from=${startDate}&to=${endDate}`;
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    const formattedData = data.prices.map(([timestamp, price]) => ({
                        date: new Date(timestamp).toLocaleDateString('en-GB'),
                        price: price
                }));
                setCoinData(formattedData);
                let apiLogoUrl = `https://api.coingecko.com/api/v3/coins/${props.selectedCurrency}`;
                fetch(apiLogoUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        setCoinLogo(data.image.small);
                        setFormattedStartDate(new Date(startDate * 1000).toLocaleDateString('en-GB'));
                        setFormattedEndDate(new Date().toLocaleDateString('en-GB'));
                    })
                    .catch((error) => console.log(error));
                })
            .catch((error) => console.log(error));
        }
    }, [props.selectedCurrency, props.selectedDateRange]);

    return (
        <div>
            {coinData.length > 0 && (
                <div>
                    <h4>{`${props.selectedCurrency.toUpperCase()} prices from ${formattedStartDate} to ${formattedEndDate}`}</h4>
                    {coinLogo && <img src={coinLogo} alt={`${props.selectedCurrency} logo`} />}
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={coinData}>
                            <XAxis dataKey="date" />
                            <YAxis dataKey="price" />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip
                                formatter={(value) => [`Price: ${value.toFixed(4)} $`]}
                            />
                            <Line type="monotone" dataKey="price" stroke="#0eaeee" strokeWidth={2} dot={false}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}

export default Chart;