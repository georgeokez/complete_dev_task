import React from 'react';
import {Line } from 'react-chartjs-2'

const labels = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6','Item7']

const data = {
    labels: labels,
    datasets: [{
      label: 'Bar Chart Test',
      data: [65, 59, 80, 81, 56, 15, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      fill: false,
      tension: 0.1
    }]
  };

const LineChart = () => {    
    return (
        <div>
           <Line     
            data={data}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales:{
                    yAxes: [
                        {
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}
           />
        </div>
    )
}

export default LineChart
