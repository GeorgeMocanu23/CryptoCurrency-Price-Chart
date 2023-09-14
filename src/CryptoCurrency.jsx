import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
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
    <Container maxWidth="md" align="center">
      <Typography variant="h3">CryptoCurrency App</Typography>
      <Box mt={2} />
      <Paper elevation={3} style={{ padding: '16px' }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <DataSelect
                selectedData={selectedData}
                handleDataChange={handleDataChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CurrencySelect
                selectedCurrency={selectedCurrency}
                handleCurrencyChange={handleCurrencyChange}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Chart
        selectedCurrency={selectedCurrency}
        selectedDateRange={selectedDateRange}
      />
    </Container>
  );
}

export default CryptoCurrency;
