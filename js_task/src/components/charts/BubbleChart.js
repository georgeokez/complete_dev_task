import React from 'react'
import { Bubble } from 'react-chartjs-2'

const data = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: -30,
        r: 15
      }, {
        x: -40,
        y: 10,
        r: 10
      }, , {
        x: -12,
        y: -15,
        r: 65
      }],
      backgroundColor: 'rgba(255, 99, 132,0.3)'
    }]
  };

function BubbleChart() {
    return (
        <div>
           <Bubble     
            data={data}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: true,
            }}
            
           />
        </div>
    )
}

export default BubbleChart
