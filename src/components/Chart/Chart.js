import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // ca sa imi returneze un array cu toate valorile
    const maximumValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={maximumValue} />)}
        </div>
    );
};

export default Chart;