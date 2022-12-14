import React from 'react';
import { Chart } from "react-google-charts";




const PieChart = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["Seven", 3],
        ["Eight", 10],
        ["Nine", 2],
        ["Eleven", 5],
        ["Diploma", 1],
    ];

    const options = {
        is3D: true,
    };


    return (
        <div style={{ width: '600px', height: '360px', padding: 0, marginLeft: '5%' }}>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
};

export default PieChart;