import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const BarChart = ({ data, labels, name, vsCurrency, days }) => {
    console.log(name);
    function toCapitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div style={{ height: '200px', width: '1000px' }}>
            <Line
                options={{ responsive: true, elements: { point: { radius: 0 } } }}
                data={{
                    labels: `${'XD'} ${vsCurrency}`,

                    datasets: [
                        { label: toCapitalize(name), data, borderColor: 'rgb(75, 192, 192)' },
                    ],
                }}
            ></Line>
        </div>
    );
};

export default BarChart;
