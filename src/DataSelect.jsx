function DataSelect({ selectedData, handleDataChange }) {
    return (
        <div>
            <label htmlFor="data">Select a period: </label>
            <select id="data" name="data" value={selectedData} onChange={handleDataChange}>
                <option value={0}>Please choose the period</option>
                <option value={1}>One day</option>
                <option value={7}>One week</option>
                <option value={30}>One month</option>
                <option value={365}>One year</option>
            </select>
        </div>
    );
}

export default DataSelect;