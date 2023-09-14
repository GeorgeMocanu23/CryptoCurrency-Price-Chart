import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function DataSelect({ selectedData, handleDataChange }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel htmlFor="data">Select a period:</InputLabel>
        <Select
          id="data"
          value={selectedData}
          onChange={handleDataChange}
          label="Select a period:"
        >
          <MenuItem value={1}>One day</MenuItem>
          <MenuItem value={7}>One week</MenuItem>
          <MenuItem value={30}>One month</MenuItem>
          <MenuItem value={365}>One year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DataSelect;
